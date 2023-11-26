import React, { useState } from "react";
import { Typography, Button, Box } from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

type Props = {};

const ProductCardButtons = (props: Props) => {
  const [cartItems, setCartItems] = useState<number>(1);
  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "36px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: cartItems < 1 ? "flex-end" : "space-between",
      }}
    >
      {cartItems > 0 && (
        <>
          <Button
            // onClick={handleRemoveFromCart}
            sx={{
              backgroundColor: "inherit",
              border: "1px solid rgb(210,63,87) ",
              minWidth: "20px",
              padding: "1px 2px ",
            }}
          >
            <RemoveOutlinedIcon sx={{ color: "rgb(210,63,87)" }} />
          </Button>
          <Typography
            sx={{
              fontWeight: "500",
            }}
          >
            {cartItems}
          </Typography>
        </>
      )}
      <Button
        // onClick={handleAddToCart}
        sx={{
          backgroundColor: "inherit",
          border: "1px solid rgb(210,63,87) ",
          minWidth: "20px",
          padding: "1px 2px",
        }}
      >
        <AddOutlinedIcon sx={{ color: "rgb(210,63,87)" }} />
      </Button>
    </Box>
  );
};

export default ProductCardButtons;
