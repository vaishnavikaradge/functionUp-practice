import React from 'react';
import Card from './profile'
import './App.css';


const App=()=> {
  return(
      <div className= "App">

 <card 
        
          image="https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos_Barcelona_Corporate_Headshot_Iberent_3.jpg"
          designation= "UI/UX DESIGNER"
          name= "Jhon"
          jobDescription= "lorem ipsum sit amet,consectetur adipiscing elit. "
      />

      <card  
          image="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"
          designation= "UI/UX DESIGNER"
          name="Bobby"
          jobDescription= "lorem ipsum sit amet,consectetur adipiscing elit."
      />
      
      <card   
          image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          designation= "UI/UX DESIGNER"
          name= "Samrudhi"
          jobDescription= "lorem ipsum sit amet,consectetur adipiscing elit. "
      />
  </div>
  );
};
export default App;


  
