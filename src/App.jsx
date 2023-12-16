import Footer from "./components/footer"
import Header from "./components/header"
import Profile from "./components/profile"

function App() {
  const userData={
    userName:"user123",
    eamil:"abs",
    city:"kandy"

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
    </>
  )
}

export default App
