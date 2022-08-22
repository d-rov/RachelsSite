import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="Contact">
      <h1>Hello World! This is the contact page.</h1>
      <Link className="home__link" to="/">Home</Link>
    </div>
  );
}

export default Contact;
  