import React, { useState } from 'react';

// ==========================================
// Lab: Conditional Rendering
// Task 1: Component that conditionally displays login/logout based on status.
// ==========================================
export const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Using ternary operator for conditional rendering
  return (
    <div style={{ margin: '20px 0' }}>
      <h4>Authentication Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h4>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)} style={{ background: '#dc3545', color: 'white' }}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)} style={{ background: '#28a745', color: 'white' }}>Login</button>
      )}
    </div>
  );
};

// ==========================================
// Lab: Conditional Rendering
// Task 2: Display voting eligibility based on age.
// ==========================================
export const VotingEligibility = ({ age }) => {
  // Using if-else logic outside JSX (or ternary inside)
  return (
    <div style={{ margin: '20px 0', padding: '10px', background: '#e9ecef' }}>
      <h4>Voter Status (Age: {age})</h4>
      {age >= 18 ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>You are eligible to vote.</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>You are not eligible to vote.</p>
      )}
    </div>
  );
};

// ==========================================
// Lab: Lists and Keys
// Task 1: Render a list of items (fruits) using map().
// ==========================================
export const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];

  return (
    <div style={{ margin: '20px 0' }}>
      <h4>Fruit List:</h4>
      <ul>
        {fruits.map((fruit, index) => (
          // Using index as key is okay for static lists that don't change order,
          // but unique IDs are preferred.
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// ==========================================
// Lab: Lists and Keys
// Task 2: Create a list of users where each has a unique id, and assign as key.
// ==========================================
export const UserList = () => {
  const users = [
    { id: 101, name: 'Alice Smith', role: 'Admin' },
    { id: 102, name: 'Bob Johnson', role: 'Editor' },
    { id: 103, name: 'Charlie Brown', role: 'Viewer' }
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <h4>User List:</h4>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          // The unique user.id is used as the key
          <li key={user.id} style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
            <strong>{user.name}</strong> - <em>{user.role}</em> (ID: {user.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage container:
export default function ConditionalAndListsLab() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Conditional Rendering, Lists & Keys Lab</h2>
      <AuthButton />
      <hr />
      <VotingEligibility age={20} />
      <VotingEligibility age={16} />
      <hr />
      <FruitList />
      <hr />
      <UserList />
    </div>
  );
}
