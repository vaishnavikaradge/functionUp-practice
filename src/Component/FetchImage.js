import React, {useState, useEffect} from 'react'



function DogImage(){

    const [image, setImage] = useState('')
    

  useEffect(() =>{

    async function fetchDogImage(){

        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImage(data.message);
    }
    fetchDogImage();
  },[]);
   



return(

    
    <img src={image} alt="random Dog img"/>
    
);

}

export default DogImage;