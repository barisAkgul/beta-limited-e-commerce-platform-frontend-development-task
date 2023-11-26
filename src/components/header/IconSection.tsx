import { IconButton, Badge, Box } from "@mui/material";

//Icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

type Props = {};

const IconSection = (props: Props) => {
  return (
    <Box component="div" sx={{ display: "flex", gap: "12px" }}>
      <IconButton sx={{ backgroundColor: "rgb(243,245,249)" }}>
        <PersonOutlineOutlinedIcon sx={{ fontSize: "26px" }} />
      </IconButton>
      <Badge badgeContent={5} color="primary">
        <IconButton sx={{ backgroundColor: "rgb(243,245,249)" }}>
          <ShoppingBagOutlinedIcon sx={{ fontSize: "26px" }} />
        </IconButton>
      </Badge>
    </Box>
  );
};

export default IconSection;
