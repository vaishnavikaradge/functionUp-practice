import React, {useRef} from 'react'

function UseRef(){

    const inputRef= useRef(null);

    const pickTheFile = () => {

        
        inputRef.current.click()
        
    }


    return(
        <div>
        
        <button onClick={pickTheFile}>Pick the file</button>
        <input type="file" ref={inputRef} style={{display:"none"}}/>
        
        </div>
    )
}

export default UseRef;
