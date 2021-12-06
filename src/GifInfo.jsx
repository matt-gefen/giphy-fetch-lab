import React from 'react'

const GifInfo = ({ gif }) => {
  console.log(gif.data)
  return (
    <>
    <iframe src={gif.embed_url} width="480" height="258" frameBorder="0" className="giphy-embed" title='gif' allowFullScreen></iframe>
    </>
  )
}

export default GifInfo