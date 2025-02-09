import { Outlet, Link } from "react-router-dom";

const RecipesLayout = () => {
  return (
    <>
      <nav className="topNavBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/Recipes/Food">Food</Link>
          </li>
          <li>
            <Link to="/Recipes/Drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/Recipes/Desserts">Desserts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default RecipesLayout;
