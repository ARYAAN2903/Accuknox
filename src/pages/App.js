import React from 'react';
import Dashboard from '../components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/App.css';
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard />
    </div>
  );
}

export default App;
