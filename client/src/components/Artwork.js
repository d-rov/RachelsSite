import './Artwork.css'

function Artwork(props) {
    return (
      <div className="Artwork">
        <img className="artpiece" src={props.image} alt={props.text} />
        <h1 className="title">{props.title}</h1>
        <p className="thoughts">{props.thoughts}</p>
      </div>
    );
  }
  
  export default Artwork;
  