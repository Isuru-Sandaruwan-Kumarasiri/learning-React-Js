import './Card.css'

function Card({userName,imageUrl,age,details}) {
    return (  
        <>
          <div className="card-bg">
               <div className="card-name">{userName}</div>
               <img src={imageUrl} alt="userPhoto" className='card-img'/>
               <div className="card-age">{age}</div>
               <div className="card-details">{details}</div>
          </div>
        </>
    );
}

export default Card;