import { useState, useEffect } from 'react'

function Contact() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/gallery")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  })

  return (
    <div className="Contact">
      <h1>Hello World! This is the gallery page.</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default Contact;
  