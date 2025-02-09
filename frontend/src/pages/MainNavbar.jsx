import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const VariantButtonLayout = () => {
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
          <Link to="/" style={{ width: "100%" }}>
            <Button fullWidth>Home</Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/Recipes" style={{ width: "100%" }}>
            <Button fullWidth>Recipes</Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/Service" style={{ width: "100%" }}>
            <Button fullWidth>Service</Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/Equipment" style={{ width: "100%" }}>
            <Button fullWidth>Equipment</Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/Rules" style={{ width: "100%" }}>
            <Button fullWidth>Rules</Button>
          </Link>
        </Box>
      </ButtonGroup>
    </Box>
  );
};

export default VariantButtonLayout;
