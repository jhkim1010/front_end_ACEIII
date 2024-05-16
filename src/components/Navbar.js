import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <nav >
      <Link className='title' to="/">onLine ACE III 0.1</Link>
      <div className='menu' 
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen? "open": ""}>
        <li><NavLink to="/Vcontrol">VControl</NavLink></li>
        <li><NavLink to="/Pcontrol">PControl</NavLink></li>
        <li><NavLink to="/Scontrol">SControl</NavLink></li>
        <li><NavLink to="/Codigocontrol">Codigo Control</NavLink></li>
        <li><NavLink to="/Clientecontrol">Cliente Control</NavLink></li>
        {/* <li><Link to="/Scontrol">SControl</Link></li> */}
      </ul>
      <ul>
        <div className='logincheck'><h5>LogIn</h5></div>
      </ul>
    </nav>
  )
}
