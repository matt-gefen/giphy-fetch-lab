import React from 'react'

const GifInfo = ({ gif }) => {
  console.log(gif)
  return (
    <>
    <img src={gif.images.original.url} alt=""/>
    </>
  )
}

export default GifInfo