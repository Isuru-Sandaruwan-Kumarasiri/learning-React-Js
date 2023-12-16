import Footer from "./components/footer"
import Header from "./components/header"
import Profile from "./components/profile"

function App() {
  

  return (
    <>
      <Footer></Footer>
      <Profile 
        userName="isuru sandaruwan" 
        email="user@gmail.com" 
        city="Ratanpura">

      </Profile>
      <Header></Header>
    </>
  )
}

export default App
