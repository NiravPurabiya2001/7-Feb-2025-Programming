class StorageUtil {
    static getItems(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }
    static setItem(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

class CustomerFormHandler {
    constructor() {
        this.form = document.getElementById('hotelForm');
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
            this.form.addEventListener('input', this.handleInput.bind(this));
        }
    }

    handleInput(e) {
        this.validateField(e.target);
    }

    validateField(field) {
        let isValid = true;
        
        switch (field.id) {
            case 'fullName':
                isValid = field.value.length >= 3;
                break;
            case 'phone':
                isValid = /^\d{10}$/.test(field.value);
                break;
            case 'email':
                isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
                break;
            case 'address':
                isValid = field.value.trim().length > 0;
                break;
            case 'aadhar':
                isValid = /^\d{12}$/.test(field.value);
                break;
            case 'checkIn':
                const checkInDate = new Date(field.value);
                const today = new Date();
                today.setHours(0,0,0,0);
                isValid = checkInDate >= today;
                break;
            case 'checkOut':
                const inDate = new Date(document.getElementById('checkIn').value);
                const outDate = new Date(field.value);
                isValid = outDate > inDate;
                break;
            case 'adults':
                isValid = parseInt(field.value) > 0;
                break;
            case 'purpose':
                isValid = field.value.trim().length > 0;
                break;
        }

        if (!isValid) {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
        
        return isValid;
    }

    validateForm() {
        const fields = this.form.querySelectorAll('.form-control');
        let formValid = true;
        fields.forEach(field => {
            if (!this.validateField(field)) formValid = false;
        });
        return formValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.saveToLocalStorage();
            this.showMessage('Registration successful!', 'success');
            this.clearForm();
        } else {
            this.showMessage('Please fix the errors in the form.', 'danger');
        }
    }

    saveToLocalStorage() {
        const data = {
            id: Date.now(),
            name: document.getElementById('fullName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            aadhar: document.getElementById('aadhar').value,
            checkIn: document.getElementById('checkIn').value,
            checkOut: document.getElementById('checkOut').value,
            adults: document.getElementById('adults').value,
            purpose: document.getElementById('purpose').value
        };
        
        const submissions = StorageUtil.getItems('hotelSubmissions');
        submissions.push(data);
        StorageUtil.setItem('hotelSubmissions', submissions);
    }

    clearForm() {
        this.form.reset();
        this.form.querySelectorAll('.form-control').forEach(field => {
            field.classList.remove('is-valid');
            field.classList.remove('is-invalid');
        });
    }

    showMessage(msg, type) {
        const box = document.getElementById('messageBox');
        box.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
        setTimeout(() => { box.innerHTML = ''; }, 3000);
    }
}

class SubmissionViewer {
    constructor() {
        this.tableBody = document.getElementById('tableBody');
        this.searchInput = document.getElementById('searchInput');
        this.noDataMsg = document.getElementById('noDataMessage');
        this.table = document.getElementById('submissionsTable');
        
        if (this.tableBody) {
            this.renderTable();
            this.searchInput.addEventListener('input', this.handleSearch.bind(this));
            
            // Event delegation for delete buttons
            this.tableBody.addEventListener('click', (e) => {
                if (e.target.classList.contains('delete-btn')) {
                    const id = e.target.getAttribute('data-id');
                    this.deleteRecord(id);
                }
            });
        }
    }

    renderTable(filterText = '') {
        const submissions = StorageUtil.getItems('hotelSubmissions');
        this.tableBody.innerHTML = '';
        
        const filtered = submissions.filter(sub => {
            return sub.name.toLowerCase().includes(filterText.toLowerCase()) || 
                   sub.checkIn.includes(filterText);
        });
        
        if (filtered.length === 0) {
            this.table.style.display = 'none';
            this.noDataMsg.style.display = 'block';
        } else {
            this.table.style.display = 'table';
            this.noDataMsg.style.display = 'none';
            
            filtered.forEach(sub => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${sub.name}</td>
                    <td>${sub.phone}</td>
                    <td>${sub.email}</td>
                    <td>${sub.aadhar}</td>
                    <td>${sub.checkIn}</td>
                    <td>${sub.checkOut}</td>
                    <td>${sub.adults}</td>
                    <td><button class="btn btn-sm btn-danger delete-btn" data-id="${sub.id}">Delete</button></td>
                `;
                this.tableBody.appendChild(tr);
            });
        }
    }

    handleSearch(e) {
        this.renderTable(e.target.value);
    }

    deleteRecord(id) {
        let submissions = StorageUtil.getItems('hotelSubmissions');
        submissions = submissions.filter(sub => sub.id != id);
        StorageUtil.setItem('hotelSubmissions', submissions);
        this.renderTable(this.searchInput.value);
    }
}

// Initialize classes based on the current page
document.addEventListener('DOMContentLoaded', () => {
    new CustomerFormHandler();
    new SubmissionViewer();
});
