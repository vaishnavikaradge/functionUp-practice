
import './App.css';
import React from 'react';
import Invitation from './Invitation';
function App() {
  return (

    <Invitation
    subject = "Birthday party Invitation"
    to="jaGdish@gmail.com"
    name="jaGdish"
    party="birthday party"
    friends="Ritu, Saurabh, Kartik"
    location="Green field Avenu"
    from="jaGdish"

    />
  );
}

export default App;
