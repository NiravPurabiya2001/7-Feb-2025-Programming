import React, { useState } from 'react';

// Lists and Keys
export const ListAndKeys = () => {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  return (
    <div>
      <h4>Fruits List</h4>
      <ul>
        {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
      </ul>
      
      <h4>Users List</h4>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

// Forms with Validation
export const FormValidation = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <p>Form Submitted Successfully by {formData.name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
