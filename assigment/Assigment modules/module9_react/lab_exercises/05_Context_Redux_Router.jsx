import React, { createContext, useContext, useState, useReducer } from 'react';
// Note: In a real app, react-router-dom, react-redux, and @reduxjs/toolkit would be imported.
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { Provider, useSelector, useDispatch } from 'react-redux';

// ==========================================
// Lab: Context API
// Task 1 & 2: Theme toggle and Global User Authentication
// ==========================================

// 1. Create Contexts
const ThemeContext = createContext();
const AuthContext = createContext();

// 2. Providers
export const AppProviders = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

// 3. Consumers (Using Context)
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ padding: '10px', background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export const UserProfile = () => {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <div style={{ marginTop: '20px' }}>
      {user ? (
        <>
          <h4>Welcome, {user.name}!</h4>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h4>Please log in.</h4>
          <button onClick={() => login('Jane Doe')}>Login as Jane Doe</button>
        </>
      )}
    </div>
  );
};


// ==========================================
// Lab: State Management (Redux - Simulated with useReducer for demo)
// Task: Counter using Redux concepts (Actions, Reducer, Dispatch)
// ==========================================
const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const ReduxMockCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h3>Redux-style State Management (useReducer)</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
};

// ==========================================
// Lab: Routing in React (Mock Structure)
// Task: Set up React Router with Home and About pages + Nav bar
// ==========================================
export const RouterDemoStructure = () => {
  // In a real environment, this would use <BrowserRouter>, <Routes>, <Route>, <Link>
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h3>React Router Demo (Mock Structure)</h3>
      <nav style={{ background: '#eee', padding: '10px', display: 'flex', gap: '15px' }}>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </nav>
      
      <div style={{ padding: '20px', border: '1px dashed #aaa', marginTop: '10px' }}>
        <h4>Page Content Area</h4>
        <p>Depending on the URL (/home, /about, /contact), the specific component will render here.</p>
        <p>Example: <code>&lt;Route path="/about" element=&#123;&lt;About /&gt;&#125; /&gt;</code></p>
      </div>
    </div>
  );
};


// Example usage container
export default function AdvancedReactLab() {
  return (
    <AppProviders>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2>Context API, Redux Concepts, and Router Lab</h2>
        
        <h3>Context API Demo</h3>
        <ThemeToggle />
        <UserProfile />
        <hr />
        
        <ReduxMockCounter />
        <hr />
        
        <RouterDemoStructure />
      </div>
    </AppProviders>
  );
}
