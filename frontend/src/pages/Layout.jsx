import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="topNavBar h-[3%] bg-blue-900">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/Service">Service</Link>
          </li>
          <li>
            <Link to="/Equipment">Equipment</Link>
          </li>
          <li>
            <Link to="/Rules">Rules</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
