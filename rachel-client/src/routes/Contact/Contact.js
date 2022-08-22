import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// TODO:
// need to create JSON to send to POST /contact/send endpoint
// needs name, email, message fields

// TODO:
// need to create a form

function Contact() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/contact")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  })

  return (
    <div className="Contact">
      <h1>Hello World! This is the contact page.</h1>
      <p>{!data ? "Loading..." : data}</p>
      <Link className="home__link" to="/">Home</Link>
    </div>
  );
}

export default Contact;
  