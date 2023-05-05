//ASSIGNMENT DETAILS
//dog image changes when button click (get) 
//  try to do this with the help of axios 


import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';



function App() {


  const [image, setImage] = useState();
  
  
  const GetDogImage=async()=>{
    try{ 
    const response = await axios.get("https://dog.ceo/api/breeds/image/random")
    
    setImage(response.data.message);
    }
    catch(error){

      console.log(error)
    }

  }
  useEffect( () =>{
  GetDogImage();
  },[]);

  
  return (
    <div className="App">

      <img src={image} alt="Dog Image"/>

      <button onClick={GetDogImage}>Get Image</button>
      
      
    </div>
  );
}

export default App;
