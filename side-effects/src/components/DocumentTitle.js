import React, { useEffect, useState } from 'react'

const DocumentTitle = () => {
  const [title, setTitle] = useState("Document Title");
  const [button, setButton] = useState("off")
  useEffect(() => {
    console.log("use effect is triggered!");

    document.title = title
  }, [title])

  return (
    <>
      <h2>Document Title</h2>
      <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Update Title' />
      <br />
      <button onClick={() => setButton(button === "off" ? " on" : "off")}>Button is {button}</button>
    </>
  )
}

export default DocumentTitle
