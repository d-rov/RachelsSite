import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Contact.css'

// TODO:
// need to create JSON to send to POST /contact/send endpoint
// needs name, email, message fields

function Contact() {
  const [data, setData] = useState(null)

  const [name, setName] = useState(null)
  const [date, setDate] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    fetch("/contact")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  })

  return (
    <div className="Contact">
      <p>{!data ? "Loading..." : data}</p>
      <form className="contact__form">
        {/* <label></label> */}
        <input
          className="name__date"
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="name__date"
          name="date"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <input
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <input
          type="submit"
        />
      </form>
      <Link className="home__link" to="/">Home</Link>
    </div>
  );
}

export default Contact;
  