import React from 'react';

const Profile=({image,designation,name,jobDescription})=>{ 
    const profileClick=()=>{
      alert(name);
    }
  
  
  return(
    <div className="profile">
      <img src={image} alt ={name}/>
      <h1>{designation}</h1>
      <h2>{name}</h2>
      <p>{jobDescription}</p>
      <div  className ='button'>
        <button onClick= {profileClick} style= {{backroundColour:"grey", colour:"white"}}>see more</button>
      </div>
        
    </div>
  );
  };
  
  export default Profile;
  
  
  

