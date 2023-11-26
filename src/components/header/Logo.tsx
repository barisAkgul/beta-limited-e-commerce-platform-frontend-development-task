import { Box } from "@mui/material";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <img src="/logo.png" style={{ height: "50px" }} />
    </Box>
  );
};

export default Logo;
