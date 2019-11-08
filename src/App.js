import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Pages from './components/Pages';
function App() {
  return (
    <div className="App">

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/registration'>Registration</Link>
      <Link to='/login'>Login</Link>
  
      <div>
        <Pages></Pages>
      </div>


    </div>

    
  );
}

export default App;
