import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecords, addRecord, updateRecord, deleteRecord } from './features/recordsSlice';
import { Pencil, Trash2 } from 'lucide-react';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.records);
  const [searchTerm, setSearchTerm] = useState('');
  const [editId, setEditId] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRecords());
    }
  }, [status, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateRecord({ ...formData, id: editId }));
      setEditId(null);
    } else {
      dispatch(addRecord(formData));
    }
    setFormData({ name: '', phone: '', email: '', address: '' });
  };

  const handleEdit = (record) => {
    setEditId(record.id);
    setFormData({
      name: record.name,
      phone: record.phone,
      email: record.email,
      address: record.address
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      dispatch(deleteRecord(id));
    }
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>Customer Complaints Manager</h1>
      </header>

      <main className="main-content">
        <section className="form-section">
          <h2>{editId ? 'Edit Record' : 'Add New Record'}</h2>
          <form onSubmit={handleSubmit} className="record-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea name="address" value={formData.address} onChange={handleChange} required rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {editId ? 'Update Record' : 'Submit Record'}
            </button>
            {editId && (
              <button type="button" className="btn btn-secondary" onClick={() => {
                setEditId(null);
                setFormData({ name: '', phone: '', email: '', address: '' });
              }}>
                Cancel
              </button>
            )}
          </form>
        </section>

        <section className="table-section">
          <div className="table-header">
            <h2>Submissions</h2>
            <input 
              type="text" 
              placeholder="Search by Name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {status === 'loading' ? (
            <p>Loading...</p>
          ) : filteredItems.length === 0 ? (
            <div className="no-records">No records found.</div>
          ) : (
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td className="actions">
                        <button className="icon-btn edit" onClick={() => handleEdit(item)}><Pencil size={18} /></button>
                        <button className="icon-btn delete" onClick={() => handleDelete(item.id)}><Trash2 size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
