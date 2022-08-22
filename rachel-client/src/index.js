import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Landing from './routes/Landing/landing'
import About from './routes/About/about'
import Gallery from './routes/Gallery/gallery'
import Contact from './routes/Contact/contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
