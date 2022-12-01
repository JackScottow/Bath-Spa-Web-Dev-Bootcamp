import { Outlet, Link } from "react-router-dom";

const Layout = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={!isDarkMode ? "container" : "container dark"}>
      <button onClick={toggleDarkMode}>{isDarkMode ? "Toggle Dark Mode" : "Toggle Light Mode"}</button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
