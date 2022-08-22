import './Card.css'

function Card(props) {
    return (
      <div className="Card">
        <img src={props.image} alt={props.text} />
      </div>
    );
  }
  
  export default Card;
  