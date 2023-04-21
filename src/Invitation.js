import React from 'react'

function Invitation(props){
    const {subject, to, name, party, friends, location, from} = props;
    return(

        <div>
            <h3>Subject:{subject}</h3>
            <p>To: {to}</p>
            <p>Hi, {name}</p>
            <p>I am having a {party} next Friday at my home. Would you like come? It will be fun.
            lots of people from my school are coming.you know some of them - {friends}.</p>
            <p>my house id behind our school, near {location}.</p>
            <p>I hope you will come and see you soon.</p>
            <p>From,<br/>
            {from}</p>
        </div>
    )
}

export default Invitation