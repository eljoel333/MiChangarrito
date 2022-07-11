
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import './NavBar.css'
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link className="colorA" to="/">
            <h2>Bike StoReact</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-md-center">
          <Nav className="me-auto">
         
              <NavLink
                to="/category/montaña"
                className={({ isActive }) =>
                  isActive ? "nav-link colorA" : "nav-link colorA"
                }
              >
                Montaña
              </NavLink>
          
              <NavLink
                to="/category/ruta"
                className={({ isActive }) =>
                  isActive ? "nav-link colorA" : "nav-link colorA"
                }
              >
                Ruta
              </NavLink>
            
              <NavLink
                to="/category/ciudad"
                className={({ isActive }) =>
                  isActive ? "nav-link colorA" : "nav-link colorA"
                }
              >
                Ciudad
              </NavLink>
            
           
              <NavLink
                to="/category/electrica"
                className={({ isActive }) =>
                  isActive ? "nav-link colorA" : "nav-link colorA"
                }
              >
                Eléctricas
              </NavLink>
          
              <NavLink
                to="/category/equipo"
                className={({ isActive }) =>
                  isActive ? "nav-link colorA" : "nav-link colorA"
                }
              >
                Equipo
              </NavLink>
          
          </Nav>
         
        </Navbar.Collapse>
        <Navbar.Brand>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
          </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
