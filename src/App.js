import Fragement from 'react'
import ReactLogo from './ReactLogo.js';
import './App.css';
import ReactFeatures from './ReactFeatures.js'
import Button from './Button.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactFeatures/>
        <Button/>
      </header>
    </div>
  );
}

export default App;
