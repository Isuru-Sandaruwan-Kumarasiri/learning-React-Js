import { useState } from "react";
import Footer from "./components/footer"
import Header from "./components/header"
import Profile from "./components/profile"




function App() {
 const [count,setCount]=useState(0);
  const userData={
    userName:"user123",
    eamil:"abs",
    city:"kandy"

  };
  const handleClick=()=>{setCount((count+1))};


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
        <h3>{count}</h3>
        <button onClick={handleClick}>Click Me</button>
      </div>

    </>
  )
}

export default App
