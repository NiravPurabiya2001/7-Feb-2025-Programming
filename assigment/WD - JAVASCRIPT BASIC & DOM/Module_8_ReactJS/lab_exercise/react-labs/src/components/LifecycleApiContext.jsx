import React, { Component, useState, useEffect, createContext, useContext } from 'react';

// Lifecycle Methods (Class Component)
export class LifecycleLogger extends Component {
  componentDidMount() {
    console.log("Component Mounted!");
  }
  componentDidUpdate() {
    console.log("Component Updated!");
  }
  componentWillUnmount() {
    console.log("Component Will Unmount!");
  }
  render() {
    return <div><p>Check console for lifecycle logs (Mount, Update, Unmount)</p></div>;
  }
}

// Fetch API with Hooks, Loading, and Error State
export const ApiDataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{color: 'red'}}>Error: {error}</p>;

  return (
    <div>
      <h4>Users Fetched via API:</h4>
      <ul>
        {data.slice(0, 3).map(user => <li key={user.id}>{user.name} ({user.email})</li>)}
      </ul>
    </div>
  );
};

// Context API Theme Toggle
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '10px' }}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
