
import './App.css'
import NavBar from './component/navbar/NavBar';
import {Route, Routes} from 'react-router-dom';
import Home from './component/home/home';
import Register from './component/register/Register';
import AboutUs from './component/about/AboutUs';
import Login from './component/login/Login';
import Delete from './component/molecule/Delete';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Login' element={<Login/>}/>
      
      </Routes>
      <Delete/>

      
    </div>
  );
}

export default App;
