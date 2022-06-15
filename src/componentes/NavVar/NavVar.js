import OptionsMenu from "../NavVar/MenuList";
import { Link,NavLink } from "react-router-dom";
import {useState, createContext, useContext  }from 'react';

export default function NavBar() {

  
// const CatContext = createContext();

// const [cat, setCat] = useState('');


  return (
    <>
      <nav className="NavbarItems">
        <Link to='/'>
          <h1>ECommerce</h1>
        </Link>

        <ul className="nav-menu">
          {OptionsMenu.map((item, index) => {
            return (
              <li key={index} categoria = {item.categoria}>
               
              

              <NavLink to={item.url} className={item.className} > {item.titulo}  </NavLink>

              </li>

            );
          })}
        </ul>
        <h1 className="navbar-logo">
          Mi Changarrito <i className="fa fa-solid fa-cart-arrow-down"></i>
        </h1>
        <div className="menu-icon">
          <i className="fas fa-bar"></i>
        </div>
      </nav>
    </>
  );
}
