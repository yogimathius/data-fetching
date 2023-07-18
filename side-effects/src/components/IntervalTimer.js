import React, { useEffect, useState } from 'react'

const IntervalTimer = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => prev+= 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [timer])

  return (
    <>
      <h2>Timer</h2>
      <p>{timer}</p>
    </>
  )
}

export default IntervalTimer
