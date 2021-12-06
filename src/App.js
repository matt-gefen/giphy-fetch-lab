import logo from './logo.svg';
import './App.css';
import GifInfo from './GifInfo';
import React, { useEffect, useState } from 'react';
import Form from './Form';

function App() {
  const [gifData, setGifData] = useState('')
  const [gifTerm, setGifTerm] = useState('')

  const handleSubmit = term => {
    setGifTerm(term)
    console.log('gifTerm - app', term)
  }

  useEffect(() => {
    let gifUrl = `api.giphy.com/v1/gifs/search?api_key=LFYMIdgkEwDs3KuyUKvtYuLr4CleMVPQ&q=${gifTerm}&limit=1`
    async function makeApiCall() {
      try {
        console.log(gifUrl)
        const res = await fetch(gifUrl)
        console.log(res)
        const data = await res.json()
        console.log(data)
        setGifData(data)
      } catch(error) {
        console.log(error)
      }
    }
    makeApiCall()
  }, [gifTerm])

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit}/>
      <button>Make API Call Again</button>
      <GifInfo gif={gifData}/>
    </div>
  );
}

export default App;
