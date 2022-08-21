import { Link } from 'react-router-dom'

import './landing.css'

function Landing() {
    return (
      <div className="Landing">
        <div className="Symbol">
            <h1>Symbol</h1>
        </div>
        <div className="Navbar">
            <h1>Navbar</h1>
            <nav>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
        </div>
        <div className="Showcase">
            <h1>Hello World!</h1>
        </div>
      </div>
    );
  }
  
  export default Landing;
  