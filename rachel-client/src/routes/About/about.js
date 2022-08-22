import { useState, useEffect } from 'react'

function About() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/about")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  })

  return (
    <div className="About">
      <h1>Hello World! This is the about page.</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default About;
