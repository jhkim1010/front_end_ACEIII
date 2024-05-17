import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import userContext from './store/useUserState';

import './Navbar.css'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const { user } = useContext(userContext);
  console.log(user); 

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
        <div className='logincheck'><h5>{user.username}</h5></div>
        <span>${user.user_id}</span>
        {/* <span>${user.company_id}</span> */}
      </ul>
    </nav>
  )
}
