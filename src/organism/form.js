import {useState} from 'react';
import Button from '../atom/button'

function LuckyNumber(){

    const [number, setNumber] = useState(0)
    const [attempt, setAttempt] = useState(0)
    const [message, setMessage] = useState("")
    const luckyNumber =7
   
    function matchName(event){

        setNumber(event.target.value)
        
    }

    function submitBtn(){
        setAttempt(attempt+1)
        
        if(number<luckyNumber){
           
            setMessage("You guessed a smaller number.")
        
        }else if(number>luckyNumber){
           
            setMessage("You gussed a bigger number.")
            
        }else{

            setMessage("Congratularions! You gussed it right.")
            
        }
            

        
    }
    
    return(
        <div className="guess">

            <h3>The number is between 0 to 10 Number={number} &nbsp; Attempt={attempt}</h3>
            <input className="input" placeholder="Guess lucky number..." onChange={matchName} type="number"/>
            <Button btnStyle="Match Number..." clickFunction={submitBtn}/>
            <p>{message}</p>
        
        </div>
    )

}

export default LuckyNumber;