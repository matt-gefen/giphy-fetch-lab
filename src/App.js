import './App.css';
import GifInfo from './GifInfo';
import RandomGif from './RandomGif';
import React, { useEffect, useState } from 'react';
import Form from './Form';

function App() {
  const [gifData, setGifData] = useState('')
  const [randomGif, setRandomGif] = useState('')
  const [gifTerm, setGifTerm] = useState('')

  const handleSubmit = term => {
    setGifTerm(term)
    console.log(gifTerm)
  }


  useEffect(() => {
    let gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=LFYMIdgkEwDs3KuyUKvtYuLr4CleMVPQ&tag=${gifTerm}&rating=pg-13`
    
    async function makeApiCall() {
      try {
        const res = await fetch(gifUrl)
        const data = await res.json()
        setGifData((data.data))
        setRandomGif(false)
      } catch(error) {
        console.log(error)
      }
    }
    makeApiCall() }
  , [gifTerm])

  useEffect(() => {
    let randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=LFYMIdgkEwDs3KuyUKvtYuLr4CleMVPQ&rating=pg-13`

    async function makeApiCall() {
      try {
        const res = await fetch(randomUrl)
        const data = await res.json()
        setRandomGif((data.data))
      } catch(error) {
        console.log(error)
      }
    }
    makeApiCall() }
  , [])

  console.log(randomGif)
  

  const handleRefresh = () => {
    setRandomGif('')
    setGifData('')
    window.location.reload(false)
  }
  
  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit}/>
      <div><br></br></div>
      <button onClick = {() => handleRefresh()}>Make API Call Again</button>
      <div><br></br></div>
      {!!gifData && <GifInfo  gif={gifData}/>}
      {randomGif && <RandomGif  gif={randomGif}/>}
    </div>
  );
}

export default App;
