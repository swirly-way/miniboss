import { Outlet } from "react-router-dom";
import VariantButtonRecipes from "./RecipesNavBar";

const RecipesLayout = () => {
  return (
    <>
      <VariantButtonRecipes />

      <Outlet />
    </>
  );
};

export default RecipesLayout;
