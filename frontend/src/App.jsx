import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RecipesLayout from "./pages/RecipesLayout";
import Service from "./pages/Service";
import Equipment from "./pages/Equipment";
import Rules from "./pages/Rules";
import Desserts from "./pages/Desserts";
import Food from "./pages/Food";
import Drinks from "./pages/Drinks";
import Recipes from "./pages/Recipes";

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
