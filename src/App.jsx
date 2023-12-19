import { useState } from "react";
import Footer from "./components/footer"
import Header from "./components/header"
import Profile from "./components/profile"
import Mapping from "./components/mapping";
import UserEffect from "./components/UserEffect";
import Card from "./components/card";




function App() {
//  const [count,setCount]=useState(10);
//   const userData={
//     userName:"user123",
//     eamil:"abs",
//     city:"kandy"

//   };
//   const handleClick=()=>{
//   //   if(count==10){
//   //     setCount(0);
//   //   }else{
//   //     setCount(count+1);
//   //   }
//   // 
//      if(count>0){
//       count===1 ? setCount("Stop") : setCount(count -1);
//      }
//   };
  
// ***************Mapping**********



    //  const numArray=[1,2,3,4,5,6];
    //  const sqartArray=numArray.map((num)=>{return num*2})
    //  console.log(sqartArray)

    const numArray=[1,2,3,4,5,6];
    const setCard=numArray.map((num)=>{return <Card number={num} key={num}></Card>})




  return (
    <>
      {/* <Footer></Footer>
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
        <h3 style={{color: count>3 ? "black":"red"}}>{count}</h3>
        <button onClick={handleClick}
          
        >Click Me</button>
      </div> */}

{/* ******Mapping******* */}
      {/* <div>
        <Mapping></Mapping>
      </div> */}



    {/* *************UserEffect********** */}

    {/* <UserEffect></UserEffect> */}



                 
    <div>{setCard}</div>
    </>

  )
}

export default App
