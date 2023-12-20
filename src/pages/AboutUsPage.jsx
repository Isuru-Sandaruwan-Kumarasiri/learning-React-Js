import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutusPage() {
  const navigate=useNavigate();
  return (
    <div>
      <button  onClick={()=>{navigate('/')}}>Go Home</button>
      <button onClick={()=>{navigate('/userPage')}}>Go User</button>    
      <button onClick={()=>{navigate(-1)}}>Back</button>
    </div>
    //  you must add / into navigate() function
  )
}

export default AboutusPage