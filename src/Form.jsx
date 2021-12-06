import React, {useState} from 'react';

function Form(props) {

  const [gifTerm, setGifTerm] = useState('')

  const handleChange = e => {
    const term = e.target.value
    console.log('term', term)
    setGifTerm(term)
    console.log(gifTerm)
  }
  const handleSubmit = e => {
    e.preventDefault()
    props.handleSubmit(gifTerm)
    setGifTerm('')
  }

  return (
  <>
  <form onSubmit={handleSubmit}>
    <input
      id='gifTerm'
      type='text'
      value={gifTerm}
      onChange={handleChange}
    />
    <input type="submit" value="Submit" />
  </form>
  </>
  )
}

export default Form