import React from 'react';
import logo from './logo.svg';
import './App.css';

import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>To get started authenticate with Facebook</h3>
      </header>
      <Facebook />
    </div>
  );
}

export default App;
