import './Card.css'

function Card({userName,age,details}) {
    return (  
        <>
          <div className="card-bg">
               <div className="card-name">{userName}</div>
               <div className="card-age">{age}</div>
               <div className="card-details">{details}</div>
          </div>
        </>
    );
}

export default Card;