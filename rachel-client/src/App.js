import Landing from './routes/landing'

import { Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Landing />
      <nav>
        <Link to="/com" />
      </nav>
    </div>
  )
}

export default App
