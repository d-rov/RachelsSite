import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Card from '../../components/Card'

import ohm from '../Landing/ohm_sample_symbol.jpg'
import snail from '../Landing/snail.jpg'
import xbar from '../Landing/x_bar_sample_symbol.png'
import sloth from '../About/avatar_sample.png'

import './Gallery.css'

function Gallery() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/gallery")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  })

  return (
    <div className="Gallery">
      <p>{!data ? "Loading..." : data}</p>
      <div className="artcase">
        <Card image={ohm} text={"this is image 1"} />
        <Card image={snail} text={"this is image 2"} />
        <Card image={xbar} text={"this is image 3"} />
        <Card image={sloth} text={"this is image 4"} />
      </div>
      <Link className="home__link" to="/">Home</Link>
    </div>
  );
}

export default Gallery;
  