import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Contact.css'

// TODO:
// need to create JSON to send to POST /contact/send endpoint
// needs name, email, message fields

function Contact() {
  // const [data, setData] = useState(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // useEffect(() => {
  //   fetch("/contact")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message))
  // })

  return (
    <div className="Contact">
      <h1>Contact</h1>
      {/* <p>{!data ? "Loading..." : data}</p> */}
      <Link className="home__link" to="/">Home</Link>
      <form className="contact__form">
        {/* <label>Name:</label> */}
        <input
          className="small__input"
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="small__input"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <input
          type="submit"
        />
      </form>
      {/* <Link className="home__link" to="/">Home</Link> */}
    </div>
  )
}

export default Contact;
  