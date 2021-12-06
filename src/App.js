import logo from './logo.svg';
import './App.css';
import GifInfo from './GifInfo';
import React, { useEffect, useState } from 'react';

function App() {
  const [gifData, setGifData] = useState('')
  const [gifTerm, setGifTerm] = useState('')

  const handleChange = () => {
    return
  }
  const handleSubmit = () => {
    return
  }

  return (
    <div className="App">
      <h1>Giphy</h1>
      {/* input - handleSubmit*/}
      <form onSubmit={handleSubmit}>
      <input
        id='gifTerm'
        type='text'
        value={gifTerm}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
      </form>
      <button>Make API Call Again</button>
      <GifInfo />
      {/* gif? <gif!/> : null */}
    </div>
  );
}

export default App;
