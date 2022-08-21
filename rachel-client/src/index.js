import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Landing from './routes/landing'
import About from './routes/about'
import Contact from './routes/contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
