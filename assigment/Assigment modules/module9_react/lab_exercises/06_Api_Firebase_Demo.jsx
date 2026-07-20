import React, { useState, useEffect } from 'react';

// ==========================================
// Lab: React - JSON-server and Firebase Real Time Database
// Task 1: Fetch data from public API and display in a table.
// Task 3: Implement error handling and loading states.
// ==========================================
export const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an API call to JSON placeholder (or a local json-server)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: '20px', fontWeight: 'bold', color: '#007bff' }}>Loading data... ⏳</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Users Data (Fetched from API)</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ background: '#f4f4f4', borderBottom: '2px solid #ccc' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{user.id}</td>
              <td style={{ padding: '8px' }}>{user.name}</td>
              <td style={{ padding: '8px' }}>{user.email}</td>
              <td style={{ padding: '8px' }}>{user.address?.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ==========================================
// Lab: React - JSON-server and Firebase Real Time Database
// Task 2: Create React App CRUD and Authentication with Firebase API
// ==========================================
export const FirebaseMockDemo = () => {
  // This is a boilerplate/mock representation of how Firebase Auth would be implemented.
  // In a real app, you would import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    // Simulated Firebase Google Authentication
    console.log("Initializing GoogleAuthProvider...");
    console.log("Calling signInWithPopup(auth, provider)...");
    
    setTimeout(() => {
      setUser({
        displayName: "Demo User",
        email: "demo@example.com",
        photoURL: "https://via.placeholder.com/50"
      });
      alert("Successfully authenticated with Firebase (Simulated)!");
    }, 1000);
  };

  const handleLogout = () => {
    // Simulated Firebase sign out
    setUser(null);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '30px' }}>
      <h3>Firebase Authentication Demo</h3>
      
      {!user ? (
        <div>
          <p>Please sign in to continue.</p>
          <button 
            onClick={handleGoogleLogin}
            style={{ padding: '10px 15px', background: '#db4437', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Sign in with Google (Mock)
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src={user.photoURL} alt="Profile" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
          <div>
            <h4>Welcome, {user.displayName}</h4>
            <p style={{ margin: '0', color: '#666' }}>{user.email}</p>
          </div>
          <button onClick={handleLogout} style={{ marginLeft: 'auto', padding: '8px 12px', background: '#333', color: 'white', border: 'none', borderRadius: '4px' }}>
            Logout
          </button>
        </div>
      )}
      
      <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9' }}>
        <h4>CRUD Operations (JSON-Server / Firebase Firestore)</h4>
        <p>Example Flow:</p>
        <ul style={{ lineHeight: '1.6' }}>
          <li><strong>CREATE (POST):</strong> <code>fetch('/posts', &#123; method: 'POST', body: JSON.stringify(data) &#125;)</code></li>
          <li><strong>READ (GET):</strong> <code>fetch('/posts')</code></li>
          <li><strong>UPDATE (PUT/PATCH):</strong> <code>fetch('/posts/1', &#123; method: 'PUT', body: JSON.stringify(data) &#125;)</code></li>
          <li><strong>DELETE (DELETE):</strong> <code>fetch('/posts/1', &#123; method: 'DELETE' &#125;)</code></li>
        </ul>
      </div>
    </div>
  );
};


// Example usage container
export default function ApiFirebaseLab() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2>API, JSON-Server, and Firebase Lab</h2>
      <UsersTable />
      <FirebaseMockDemo />
    </div>
  );
}
