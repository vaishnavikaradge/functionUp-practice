import React, {Fragment, useState} from 'react'

function Form(){

    const [name, setName] = useState("Vaishnavi")

    function nameChange(event){

        setName(event.target.value)
    }

    function submission(){
        console.log("Hi, My name is ",{name})
    }

    return(

        <Fragment>
            <input
            
            className="input"
            placeholder="Add your name..."
            onChange={nameChange}
            
            />

            <button onClick={submission}>Submit</button>
            <h4>Hi, My name is {name}</h4>
        </Fragment>
    )


}

export default Form;