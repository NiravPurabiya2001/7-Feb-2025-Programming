import React, { Component } from 'react';

// ==========================================
// Lab: Introduction to React.js
// Task: Create a basic component that displays "Hello, React!"
// ==========================================
export const HelloReact = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
};

// ==========================================
// Lab: JSX (JavaScript XML)
// Task: Render a heading and a paragraph explaining JSX with dynamic data (curly braces)
// ==========================================
export const WelcomeJSX = () => {
  const dynamicData = "JavaScript XML";
  const feature = "write HTML directly inside JavaScript";

  return (
    <div>
      <h2>Welcome to JSX</h2>
      <p>
        JSX stands for <strong>{dynamicData}</strong>. It allows us to {feature}.
        Using curly braces, we can evaluate mathematical expressions like 2 + 2 = {2 + 2}, 
        or inject dynamic string variables.
      </p>
    </div>
  );
};

// ==========================================
// Lab: Components (Functional & Class Components)
// Task 1: Create a functional component Greeting that accepts a name as a prop.
// ==========================================
export const Greeting = ({ name }) => {
  return (
    <div>
      <h3>Hello, {name}!</h3>
    </div>
  );
};

// ==========================================
// Lab: Components (Functional & Class Components)
// Task 2: Create a class component WelcomeMessage with a render() method.
// ==========================================
export class WelcomeMessage extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to React! (from Class Component)</h3>
      </div>
    );
  }
}

// Example usage to show how they would be rendered together:
export default function BasicsLab() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <HelloReact />
      <hr />
      <WelcomeJSX />
      <hr />
      <Greeting name="John Doe" />
      <hr />
      <WelcomeMessage />
    </div>
  );
}
