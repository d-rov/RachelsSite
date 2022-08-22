import './Artwork.css'

function Artwork(props) {
    return (
      <div className="Artwork">
        <img className="artpiece" src={props.image} alt={props.text} />
        <h2 className="title">{props.title}</h2>
        <p className="thoughts">{props.thoughts}</p>
      </div>
    );
  }
  
  export default Artwork;
  