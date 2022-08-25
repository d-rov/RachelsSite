import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Admin.css'

function Admin() {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="Admin">
      <Link className="home__link" to="/">Home</Link>
      <div className="art__form">
        <form className="contact__form">
          <label>Add Artwork</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            name="url"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
          <textarea
            name="message"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}
  
  export default Admin;