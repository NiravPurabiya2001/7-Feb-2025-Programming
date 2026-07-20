import React, { Component, useState, useEffect, useRef } from 'react';

// ==========================================
// Lab: Forms in React
// Task 1 & 2: Controlled form with validation (Name, Email, Password)
// ==========================================
export const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    // Simple email regex validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is not valid.";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      // Reset form on success
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px' }}>
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <div style={{ color: 'red', fontSize: '12px' }}>{errors.name}</div>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div style={{ color: 'red', fontSize: '12px' }}>{errors.email}</div>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <div style={{ color: 'red', fontSize: '12px' }}>{errors.password}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#d4edda' }}>
          <h4>Submitted Data:</h4>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

// ==========================================
// Lab: Lifecycle Methods (Class Components)
// Task 1 & 2: Fetch data on mount, log updates, log unmount
// ==========================================
export class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, count: 0 };
  }

  componentDidMount() {
    console.log("Component Mounted! Fetching data...");
    // Simulating an API fetch
    setTimeout(() => {
      this.setState({ data: "Mock API Data Loaded!" });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Component Updated! Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log("Component Will Unmount! Cleaning up...");
  }

  render() {
    return (
      <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
        <h3>Class Lifecycle Demo</h3>
        <p>Data: {this.state.data ? this.state.data : "Loading..."}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Count</button>
      </div>
    );
  }
}

// ==========================================
// Lab: Hooks (useEffect & useRef)
// Task: useEffect data fetch & useRef to avoid re-renders
// ==========================================
export const HooksDemo = () => {
  const [data, setData] = useState(null);
  
  // useRef to store a mutable value that doesn't trigger re-renders
  const renderCount = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    // This runs after every render
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []); // Empty array means this runs only once on mount

  const handleFocus = () => {
    // Directly access DOM element without re-rendering
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#eef';
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
      <h3>Hooks Demo (useEffect, useRef)</h3>
      <p><strong>Render Count:</strong> {renderCount.current} (Tracked by useRef)</p>
      
      <div>
        <h4>Fetched Data:</h4>
        {data ? <p>{data.name} ({data.email})</p> : <p>Loading data...</p>}
      </div>

      <div style={{ marginTop: '15px' }}>
        <input ref={inputRef} type="text" placeholder="Click button to focus me" />
        <button onClick={handleFocus} style={{ marginLeft: '10px' }}>Focus Input</button>
      </div>
    </div>
  );
};

// Example usage container
export default function FormsLifecycleHooksLab() {
  const [showLifecycle, setShowLifecycle] = useState(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Forms, Lifecycle, and Hooks Lab</h2>
      <RegistrationForm />
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setShowLifecycle(!showLifecycle)}>
          Toggle Lifecycle Component (Test Unmount)
        </button>
        {showLifecycle && <LifecycleDemo />}
      </div>

      <HooksDemo />
    </div>
  );
}
