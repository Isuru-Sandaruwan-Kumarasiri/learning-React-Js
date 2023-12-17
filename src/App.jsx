import { useState } from "react";
import Footer from "./components/footer"
import Header from "./components/header"
import Profile from "./components/profile"




function App() {
 const [count,setCount]=useState(10);
  const userData={
    userName:"user123",
    eamil:"abs",
    city:"kandy"

  };
  const handleClick=()=>{
  //   if(count==10){
  //     setCount(0);
  //   }else{
  //     setCount(count+1);
  //   }
  // 
     if(count>0){
      count===1 ? setCount("Stop") : setCount(count -1);
     }
  };


  return (
    <>
      <Footer></Footer>
      <Profile 
        userName="isuru sandaruwan" 
        email="user@gmail.com" 
        city="Ratanpura">

      </Profile>
      <br />
      <Profile 
        userName= {userData.userName}
        email={userData.email} 
        city={userData.city}>

      </Profile>
      <Header></Header>



      <div>
        <h3 style={{color:count>3 ? "black":"red"}}>{count}</h3>
        <button onClick={handleClick}>Click Me</button>
      </div>

    </>
  )
}

export default App
