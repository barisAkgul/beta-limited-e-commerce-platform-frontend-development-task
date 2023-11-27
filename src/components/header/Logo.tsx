import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <Link to="/">
        <img src="/logo.png" style={{ height: "50px" }} alt="Logo" />
      </Link>
    </Box>
  );
};

export default Logo;
