import './App.css';
import React, { useEffect, useState } from 'react';
import FaangStocks from './Faang';


function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return( 
    <div className='APP'>
      <h1>{msg}</h1>
      <FaangStocks/>
    </div>
  )
}

export default App;
