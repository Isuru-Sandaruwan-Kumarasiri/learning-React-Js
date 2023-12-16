function Profile({userName,email,city}) {//{} must be added in the brakets
    return ( 
        <>
          <p>{"Name :" + userName}</p>
          <p>{"Email :" + email}</p>
          <p>{"City :" + city}</p>
        </>
     );
}

export default Profile;