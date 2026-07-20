import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const MOCK_DB_KEY = 'app_records';

const getInitialData = () => {
    const data = localStorage.getItem(MOCK_DB_KEY);
    return data ? JSON.parse(data) : [];
};

const saveData = (data) => {
    localStorage.setItem(MOCK_DB_KEY, JSON.stringify(data));
};

export const fetchRecords = createAsyncThunk('records/fetchRecords', async () => {
    await delay(500);
    return getInitialData();
});

export const addRecord = createAsyncThunk('records/addRecord', async (record) => {
    await delay(500);
    const data = getInitialData();
    const newRecord = { ...record, id: Date.now() };
    data.push(newRecord);
    saveData(data);
    return newRecord;
});

export const updateRecord = createAsyncThunk('records/updateRecord', async (record) => {
    await delay(500);
    const data = getInitialData();
    const index = data.findIndex(r => r.id === record.id);
    if (index !== -1) {
        data[index] = record;
        saveData(data);
    }
    return record;
});

export const deleteRecord = createAsyncThunk('records/deleteRecord', async (id) => {
    await delay(500);
    let data = getInitialData();
    data = data.filter(r => r.id !== id);
    saveData(data);
    return id;
});

const recordsSlice = createSlice({
    name: 'records',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecords.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRecords.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchRecords.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addRecord.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateRecord.fulfilled, (state, action) => {
                const index = state.items.findIndex(r => r.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(deleteRecord.fulfilled, (state, action) => {
                state.items = state.items.filter(r => r.id !== action.payload);
            });
    }
});

export default recordsSlice.reducer;
