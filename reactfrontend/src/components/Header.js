import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function Header() {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
   setAuth({
     ...auth,
     user: null,
     token: ''
   })
   localStorage.removeItem('auth');
 }

  return (
    <nav className="navbar">
      <Link className="navbar-brand">Brand Name</Link>
      <ul>
           <li>
              <NavLink to='/createEvent'>Create Events</NavLink>
            </li>
            <li>
              <NavLink>likes</NavLink>
            </li>
            <li>
              <NavLink>Ticket</NavLink>
            </li>
            <li>
              <NavLink>vanshikatomar3110@gmail.com</NavLink>
              <ul className="submenu">
                 <li>
                    <Link onClick={handleLogout} to='/'>Logout</Link>
                 </li>
              </ul>
            </li>
      </ul>
    </nav>
  );
}
