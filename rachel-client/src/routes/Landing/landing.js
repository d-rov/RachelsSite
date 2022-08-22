import { Link } from 'react-router-dom'

import snail from './snail.jpg'
import symbol from './ohm_sample_symbol.jpg'
import Card from '../../components/Card'

import './landing.css'

function Landing() {
    return (
      <div className="Landing">
        <div className="Symbol">
          <img src={symbol} alt="temporary symbol" />
        </div>
        <div className="Navbar">
            <nav>
              <Link id="links" to="/about">About</Link>
              <Link id="links" to="/gallery">Gallery</Link>
              <Link id="links" to="/contact">Contact</Link>
            </nav>
        </div>
        <div className="Showcase">
            {/* <h1>Hello World!</h1> */}
            {/* <img src={snail} alt="Surreal snail painting." /> */}
            <Card image={snail} text="Surreal snail painting" />
        </div>
      </div>
    );
  }
  
  export default Landing;
  