import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavsParams, useStore} from "../store/storefavs";


function navbarComp() {
  const {favorites} = useStore<null | FavsParams>();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">TOP SECRET </Navbar.Brand>
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
