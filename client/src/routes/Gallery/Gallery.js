import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Artwork from '../../components/Artwork'

// import ohm from '../Landing/ohm_sample_symbol.jpg'
// import snail from '../Landing/snail.jpg'
// import xbar from '../Landing/x_bar_sample_symbol.png'
// import sloth from '../About/avatar_sample.png'

import './Gallery.css'

function Gallery() {
  // let thought = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Quam lacus suspendisse faucibus interdum posuere. Aliquet sagittis id consectetur purus ut. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Et molestie ac feugiat sed lectus vestibulum mattis. Interdum varius sit amet mattis vulputate enim. Sem integer vitae justo eget."
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/gallery")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <div className="Gallery">
      <Link className="home__link" to="/">Home</Link>
      <div className="artcase">
        {data.map((entry) => (
          //
          <Artwork key={entry.id} {...entry} />
          // <h1 key={entry.name} >{!entry ? "Loading..." : entry.name}</h1>
        ))}
      </div>
    </div>
  )
}

export default Gallery;
  