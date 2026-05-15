import React, { useState } from 'react';

// Counter using Hooks
export const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// Event Handling & Controlled Component
export const EventHandling = () => {
  const [text, setText] = useState('Not Clicked');
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <button onClick={() => setText('Clicked!')}>{text}</button>
      <div style={{ marginTop: '10px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Type here..."
        />
        <p>You typed: {inputValue}</p>
      </div>
    </div>
  );
};

// Conditional Rendering
export const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [age, setAge] = useState(20);

  return (
    <div>
      {/* Login Toggle */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      {/* Voting Eligibility */}
      <p>{age >= 18 ? "You are eligible to vote" : "You are not eligible to vote"}</p>
      <button onClick={() => setAge(age === 20 ? 15 : 20)}>Toggle Age</button>
    </div>
  );
};
