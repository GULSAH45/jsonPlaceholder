import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore} from "../store/storefavs";


function navbarComp() {
  const {favorites: favorites} = useStore();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Json Placeholder</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to={"/home"} href="#home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/users"} href="#features">
            Users
          </Nav.Link>
          <Nav.Link as={Link} to={"/favs"} href="#pricing">
             Favs({favorites.length})
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default navbarComp;
