// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Login from './components/pages/Login';
import Codigocontrol from './components/pages/Codigocontrol'
import Clientecontrol from './components/pages/Clientecontrol'
import Vcontrol from './components/pages/Vcontrol';
import Scontrol from './components/pages/Scontrol';
import Pcontrol from './components/pages/Pcontrol';
import Home from './components/pages/Home'
import { useState } from 'react';

function App() {
  
  const [username, setUsername] = useState(''); 
  console.log(username); 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/"               element = {!username? <Login/>:<Home/>} />
        <Route path = "/Vcontrol"       element = {!username? <Login/>:<Vcontrol/>} />
        <Route path = "/Pcontrol"       element = {!username? <Login/>:<Pcontrol/>} />
        <Route path = "/Scontrol"       element = {!username? <Login/>:<Scontrol/>} />
        <Route path = "/Codigocontrol"  element = {!username? <Login/>:<Codigocontrol/>} />
        <Route path = "/Clientecontrol" element = {!username? <Login/>:<Clientecontrol/>} />
      </Routes>
    </div>
  );
}

export default App;