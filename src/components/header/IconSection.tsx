import { IconButton, Badge, Box } from "@mui/material";

//Icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import useShoppingCart from "~/stores/shopping-cart-store";
import { countDistinctProducts } from "~/helpers/utils/general";

const IconSection = () => {
  const { shoppingCart } = useShoppingCart();
  const distinctProductCount = countDistinctProducts(shoppingCart);
  return (
    <Box component="div" sx={{ display: "flex", gap: "12px" }}>
      <IconButton sx={{ backgroundColor: "rgb(243,245,249)" }}>
        <PersonOutlineOutlinedIcon sx={{ fontSize: "26px" }} />
      </IconButton>
      <Badge badgeContent={distinctProductCount} color="primary">
        <IconButton sx={{ backgroundColor: "rgb(243,245,249)" }}>
          <ShoppingBagOutlinedIcon sx={{ fontSize: "26px" }} />
        </IconButton>
      </Badge>
    </Box>
  );
};

export default IconSection;
