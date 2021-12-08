import React from 'react'

const RandomGif = ({ gif }) => {
  console.log(gif)
  return (
    <>
    <img src={gif.images.original.url} alt=""/>
    </>
  )
}

export default RandomGif