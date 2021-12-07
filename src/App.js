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
    let gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=LFYMIdgkEwDs3KuyUKvtYuLr4CleMVPQ&q=${gifTerm}&limit=1`
    async function makeApiCall() {
      try {
        const res = await fetch(gifUrl)
        const data = await res.json()
        setGifData((data.data))
      } catch(error) {
        console.log(error)
      }
    }
    makeApiCall()
  }, [gifTerm])
  
  const handleRefresh = () => {
    setGifData({data:null})
  }
  console.log(gifData)
  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit}/>
      <button onClick = {() => handleRefresh()}>Make API Call Again</button>
      {gifData.length ? <GifInfo  gif={gifData}/> : null}
    </div>
  );
}

export default App;
