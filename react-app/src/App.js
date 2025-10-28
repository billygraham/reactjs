import { useState } from 'react';
import Counter from './Counter';
import PartnerDirectory from './PartnerDirectory';
import logo from './logo.svg';
import './App.css';

function App() {
  const [visibleComponents, setVisibleComponents] = useState({
    Counter: false,
    PartnerDirectory: false
  });

  const toggleComponent = (key) => {
    setVisibleComponents((prev) => ({
      ...prev,
      [key]: !prev[key] // Toggle specific one
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={() => toggleComponent('Counter')}>
          {visibleComponents.Counter ? 'Hide' : 'Show'} Counter
        </button>
        <button onClick={() => toggleComponent('PartnerDirectory')}>
          {visibleComponents.PartnerDirectory ? 'Hide' : 'Show'} PartnerDirectory
        </button>

        {visibleComponents.Counter && <Counter />}
        {visibleComponents.PartnerDirectory && <PartnerDirectory />}
      </header>
    </div>
  );
}

export default App;
