import React from 'react';

// Functional Component with Props
export const Greeting = ({ name }) => {
  return <h3>Hello, {name}!</h3>;
};

// User Card with Props
export const UserCard = ({ name, age, location }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

// Class Component
export class WelcomeMessage extends React.Component {
  render() {
    return <h2>Welcome to React! (Class Component)</h2>;
  }
}
