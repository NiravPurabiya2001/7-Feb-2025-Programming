import React, { useState } from 'react';

// ==========================================
// Lab: Props and State
// Task 1: Create UserCard that accepts name, age, location as props.
// ==========================================
export const UserCard = ({ name, age, location }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px 0', width: '250px' }}>
      <h3>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

// ==========================================
// Lab: Props and State & Hooks
// Task 2: Create a Counter component using state. Include buttons to increment/decrement.
// ==========================================
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>Increment (+)</button>
      <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
    </div>
  );
};

// ==========================================
// Lab: Handling Events in React
// Task 1: Button changes text on click.
// ==========================================
export const ClickButton = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{ margin: '20px 0' }}>
      <button 
        onClick={() => setClicked(true)} 
        style={{ padding: '10px', background: clicked ? '#28a745' : '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        {clicked ? "Clicked!" : "Not Clicked"}
      </button>
    </div>
  );
};

// ==========================================
// Lab: Handling Events in React
// Task 2: Form input dynamically displayed as user types.
// ==========================================
export const LiveInputForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ margin: '20px 0', padding: '15px', background: '#f8f9fa', borderRadius: '5px' }}>
      <h4>Live Input Demo</h4>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something here..." 
        style={{ padding: '8px', width: '250px' }}
      />
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
        You typed: <span style={{ color: '#007bff' }}>{inputValue}</span>
      </p>
    </div>
  );
};

// Example usage container:
export default function PropsStateEventsLab() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Props, State, and Events Lab</h2>
      <UserCard name="Alice Smith" age={28} location="New York, USA" />
      <hr />
      <Counter />
      <hr />
      <ClickButton />
      <hr />
      <LiveInputForm />
    </div>
  );
}
