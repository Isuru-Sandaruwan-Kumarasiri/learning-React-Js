
import Card from '../components/card';
import data from '../data';



function UserPage() {
    const userDetailsCards=data.map((user)=>{return <Card userName={user.name} imageUrl={user.imageUrl} age={user.age} details={user.details}></Card>})
  return (
    <div>{userDetailsCards}</div>
  )
}

export default UserPage