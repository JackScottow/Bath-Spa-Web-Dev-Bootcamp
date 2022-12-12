import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import genreList from "../Data/Genres";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-3" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="px-5">
              Home
            </Nav.Link>
            <NavDropdown className="px-5" bg="dark" variant="dark" href="/genres" title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="/popular" style={{ textAlign: "center" }}>
                Popular
              </NavDropdown.Item>
              {genreList.map((genre) => (
                <NavDropdown.Item className="p-0" href={`/genre/${genre.name}`} style={{ height: "max-content", textAlign: "center" }} key={genre.id}>
                  {genre.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link className="px-5" href="#checkout">
              Checkout
            </Nav.Link>
            <Nav.Link className="px-5" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
