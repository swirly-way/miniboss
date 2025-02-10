import { Outlet } from "react-router-dom";
import VariantButtonRecipes from "./RecipesNavBar";

export default function Layout() {
  return (
    <>
      <VariantButtonRecipes />

      <Outlet />
    </>
  );
}
