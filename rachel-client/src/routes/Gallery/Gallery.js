import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
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
      <Link className="home__link" to="/">Home</Link>
    </div>
  );
}

export default Gallery;
  