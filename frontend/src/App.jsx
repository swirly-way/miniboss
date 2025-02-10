import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RecipesLayout from "./pages/Recipes/RecipesLayout";
import Service from "./pages/Service/Service";
import Equipment from "./pages/Equipment/Equipment";
import Rules from "./pages/Rules/Rules";
import Desserts from "./pages/Recipes/Desserts";
import Food from "./pages/Recipes/Food";
import Drinks from "./pages/Recipes/Drinks";
import Recipes from "./pages/Recipes/Recipes";

// Everything converges here. App will be rendering the router which will be handling what the page will look like.
// Everytime a path is followed a component is served as a page. There is no page reloading just a new component being placed thanks to React Router.
// Here you can see a Router being declared and scoped on lines 23-39 we then wrap the routes in <routes></routes>
// We then define each path way in a linear way, anything wrapped within a <Route></Route> will build upon their "parent" in that route block.
// Router works by using the path and matching it to a component. When setting up a new path route it is necessary to supply a Layout for itself and
// its child components nested in its path. The layout can be seen as the skeleton of what will be displayed, in this case a navbar and the componentes to be rendered.
// As seen on line 30 we need to give the parent component of the route with an "index element" which will be the component that the route will display by default.
// It is only used once like that with "index element".
// And that how the whole app is being rendered as part of a navbar handling the URL paths and serving the component to be rendered matching that path.

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Recipes" element={<RecipesLayout />} />
            <Route path="Service" element={<Service />} />
            <Route path="Equipment" element={<Equipment />} />
            <Route path="Rules" element={<Rules />} />
            <Route path="/Recipes" element={<RecipesLayout />}>
              <Route index element={<Recipes />} />
              <Route path="Food" element={<Food />} />
              <Route path="Drinks" element={<Drinks />} />
              <Route path="Desserts" element={<Desserts />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
