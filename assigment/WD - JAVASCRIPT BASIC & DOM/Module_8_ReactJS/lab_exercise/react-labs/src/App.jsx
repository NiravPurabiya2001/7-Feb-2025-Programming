import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// Importing components
import { Greeting, UserCard, WelcomeMessage } from './components/BasicComponents';
import { Counter, EventHandling, ConditionalRendering } from './components/HooksEvents';
import { ListAndKeys, FormValidation } from './components/ListsForms';
import { LifecycleLogger, ApiDataFetcher, ThemeProvider, ThemeComponent } from './components/LifecycleApiContext';
import { ReduxCounter } from './components/ReduxCounter';

const Home = () => (
  <div style={{ padding: '20px' }}>
    <h2>Home Page</h2>
    <hr />
    <Greeting name="Student" />
    <WelcomeMessage />
    <UserCard name="Jane Doe" age={25} location="New York" />
    <hr />
    <Counter />
    <hr />
    <EventHandling />
    <hr />
    <ConditionalRendering />
    <hr />
    <LifecycleLogger />
  </div>
);

const About = () => (
  <div style={{ padding: '20px' }}>
    <h2>About Page - Lists and Forms</h2>
    <ListAndKeys />
    <hr />
    <FormValidation />
  </div>
);

const Advanced = () => (
  <div style={{ padding: '20px' }}>
    <h2>Advanced React Concepts</h2>
    <ApiDataFetcher />
    <hr />
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
    <hr />
    <ReduxCounter />
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ fontFamily: 'sans-serif' }}>
          <nav style={{ background: '#333', padding: '10px' }}>
            <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>About</Link>
            <Link to="/advanced" style={{ color: 'white', textDecoration: 'none' }}>Advanced & API</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/advanced" element={<Advanced />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
