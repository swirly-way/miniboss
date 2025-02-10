import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function VariantButtonRecipes() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group" fullWidth>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/Recipes/Food" style={{ width: "100%" }}>
            <Button fullWidth>Food</Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/Recipes/Drinks" style={{ width: "100%" }}>
            <Button fullWidth>Drinks</Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/Recipes/Desserts" style={{ width: "100%" }}>
            <Button fullWidth>Desserts</Button>
          </Link>
        </Box>
      </ButtonGroup>
    </Box>
  );
}
