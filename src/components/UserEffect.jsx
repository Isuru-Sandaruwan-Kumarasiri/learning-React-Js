import { useState,useEffect} from "react";

function UserEffect() {
    const [userText,setuserText]=useState("ISuru")

    useEffect(()=>{
           console.log("userEffect is working")
    })
    return ( 
        <>
        <div>
           <button onClick={()=>{setuserText("User")}} >User</button>
           <button  onClick={()=>{setuserText("Home")}}>Home</button>
           <button onClick={()=>{setuserText("About us")}}>  About us</button>

           <h2>{userText}</h2>
        </div>
        </>
     );
}

export default UserEffect;