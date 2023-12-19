import './Card.css'

function Card({number}) {
    return (  
        <>
          <div className="card-bg">
               <div className="card-num">{number}</div>
               <div className="card-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti nesciunt facilis voluptatum iste quam consequuntur dignissimos. Facere, ab sit.</div>
          </div>
        </>
    );
}

export default Card;