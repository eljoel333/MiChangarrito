
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
            <h3>Bike StoReact</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-md-center">
          <Nav className="me-auto">
          <Nav.Link className="colorA">
              <NavLink
                to="/category/montaña"
                className={({ isActive }) =>
                  isActive ? "ActiveOption colorA" : "Option colorA"
                }
              >
                Montaña
              </NavLink>
            </Nav.Link> <Nav.Link className="colorA">
              <NavLink
                to="/category/ruta"
                className={({ isActive }) =>
                  isActive ? "ActiveOption colorA" : "Option colorA"
                }
              >
                Ruta
              </NavLink>
            </Nav.Link> <Nav.Link className="colorA">
              <NavLink
                to="/category/ciudad"
                className={({ isActive }) =>
                  isActive ? "ActiveOption colorA" : "Option colorA"
                }
              >
                Ciudad
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/category/electrica"
                className={({ isActive }) =>
                  isActive ? "ActiveOption colorA" : "Option colorA"
                }
              >
                Eléctricas
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/category/equipo"
                className={({ isActive }) =>
                  isActive ? "ActiveOption colorA" : "Option colorA"
                }
              >
                Equipo
              </NavLink>
            </Nav.Link>
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
