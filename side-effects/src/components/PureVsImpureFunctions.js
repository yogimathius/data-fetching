import React, { useState } from 'react'

const PureFunction = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.year}</p>
      <p>{props.director}</p>
    </>
  )
}


const ImPureFunction = (props) => {
  const [movie, setMovie] = useState();

  return (
    <>
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <p>{movie.director}</p>
    </>
  )
}

