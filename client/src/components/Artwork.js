import './Artwork.css'

function Artwork(props) {
    return (
      <div className="Artwork">
        <img className="artpiece" src={props.url} alt={props.text} />
        {/* <img className="artpiece" src={snail} alt={props.text} /> */}
        <h2 className="title">{props.name}</h2>
        <p className="thoughts">{props.description}</p>
      </div>
    )
  }
  
  export default Artwork;
  