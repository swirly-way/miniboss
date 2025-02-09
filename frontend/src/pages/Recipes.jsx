import VariantButtonGroup from "./VariantButtonRecipes";

const Recipes = () => {
  return (
    <div className="recipes-container p-4 m-2 w-1/2">
      <h1 className="header h-[5%] bg-blue-900">Recipes</h1>
      <div className="home-content h-[95%] bg-green-300">
        <div className="info-content h-[20%]">
          <h1>Hey you</h1>
          <p>
            Remember to always wash your hands, be careful and ask questions if
            you`re not sure.
          </p>
        </div>
        <div className="navbuttons h-[80%]">
          <h1>Stuff to do.</h1>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
