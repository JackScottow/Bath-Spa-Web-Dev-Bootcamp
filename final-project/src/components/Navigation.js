import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import genreList from "../Data/Genres";
import "../Css/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faCartShopping, faVideo, faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Navigation({ basket }) {
  let basketQty = 0;
  let basketPrice = 0;
  basket.forEach((item) => {
    basketQty += item.qty;
    basketPrice += item.qty * item.price;
  });

  return (
    <>
      <Navbar expand="md" variant="dark" className="colorNav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-3" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="px-5">
              <FontAwesomeIcon icon={faHouseChimney} />
              &nbsp;Home
            </Nav.Link>
            <NavDropdown
              className="px-5"
              bg="dark"
              variant="dark"
              href="/genres"
              id="basic-nav-dropdown"
              title={[<FontAwesomeIcon icon={faVideo} />, " Movies"]}
            >
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
              trigger={["hover", "hover"]}
              key="bottom"
              placement="bottom"
              overlay={
                <Popover id="popover-positioned-top">
                  <Popover.Body>
                    {basket.length > 0
                      ? basket.map((item) => (
                          <div className="basket-popover">
                            <div>{item.title}</div>
                            <div>
                              £{item.price} x {item.qty}
                            </div>
                          </div>
                        ))
                      : "Basket is empty"}
                    <div className="basket-popover-total">Total - £{basketPrice.toFixed(2)}</div>
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link className="px-5" href="/basket">
                <FontAwesomeIcon icon={faCartShopping} />
                &nbsp; Basket {basketQty > 0 ? `[${basketQty} - £${basketPrice.toFixed(2)}]` : ""}
              </Nav.Link>
            </OverlayTrigger>
            <Nav.Link className="px-5" href="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
