import './Artwork.css'

function Artwork(props) {
    return (
      <div className="Artwork">
        <img src={props.image} alt={props.text} />
      </div>
    );
  }
  
  export default Artwork;
  