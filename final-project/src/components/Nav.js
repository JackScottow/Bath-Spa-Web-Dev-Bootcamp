import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Nav() {
  return (
    <>
      <nav className="nav-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Nav;
