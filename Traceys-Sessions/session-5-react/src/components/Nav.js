import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ page, text }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={page}>
              <button>{text}</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
