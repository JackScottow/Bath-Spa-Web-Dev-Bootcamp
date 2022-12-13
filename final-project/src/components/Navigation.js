import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import genreList from "../Data/Genres";

function Navigation({ basket }) {
  let basketQty = 0;
  basket.forEach((item) => {
    basketQty += item.qty;
  });

  return (
    <>
      <Navbar expand="md" variant="dark" className="colorNav">
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
            <OverlayTrigger
              trigger="hover"
              key="bottom"
              placement="bottom"
              overlay={
                <Popover id="popover-positioned-top">
                  <Popover.Header as="h3">Basket</Popover.Header>
                  <Popover.Body>
                    {basket.map((item) => (
                      <div>
                        {item.title} - £{item.price} x {item.qty}
                      </div>
                    ))}
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link className="px-5" href="/basket">
                Basket ({basketQty})
              </Nav.Link>
            </OverlayTrigger>
            <Nav.Link className="px-5" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
