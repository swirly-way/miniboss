import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Service from "./pages/Service";
import Equipment from "./pages/Equipment";
import Rules from "./pages/Rules";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Recipes" element={<Recipes />} />
            <Route path="Service" element={<Service />} />
            <Route path="Equipment" element={<Equipment />} />
            <Route path="Rules" element={<Rules />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
