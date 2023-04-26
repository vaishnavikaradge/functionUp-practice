import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function increase(){
    const updatedCount = count+1
    setCount(updatedCount)
  }

  function decrease(){
    const newCount = count-1
    if(newCount < 0){
      return 0;
    }
    setCount(newCount)
    
  }


  return (
    <div className="App">

      <h4>Count is:</h4>
      <h4>{count}</h4>

      <button onClick={increase}>

        Increase The Count
      
      </button>  

      <button onClick={decrease}>

        Decrease The Count

      </button>
    </div>
  );
}

export default App;
