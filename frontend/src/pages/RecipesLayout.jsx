import { Outlet } from "react-router-dom";
import VariantButtonRecipes from "./VariantButtonRecipes";

const RecipesLayout = () => {
  return (
    <>
      <VariantButtonRecipes />

      <Outlet />
    </>
  );
};

export default RecipesLayout;
