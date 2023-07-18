import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RandomCat = () => {
  const CAT_API = 'https://api.thecatapi.com/v1/images/search';
  const [catImg, setCatImg] = useState(false);


  useEffect(() => {
    axios.get(CAT_API)
      .then(res => setCatImg(res.data[0].url))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h2>Random Cat API</h2>
      {catImg ? <img alt='random cat' src={catImg} /> : <p>Loading...</p>}
    </>
  )
}

export default RandomCat
