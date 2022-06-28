
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <h3>Mi Changarrito</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                to="/category/celular"
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                Celular
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/category/tablet"
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                Tablet
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/category/notebook"
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                Notebook
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
