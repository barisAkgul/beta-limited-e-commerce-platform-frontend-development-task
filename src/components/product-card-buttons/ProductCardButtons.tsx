import { useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";

//Icons
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

//Stores
import useShoppingCart from "~/stores/shopping-cart-store";
import useSessionStore from "~/stores/session-store";
import { IShoppingCartItemProps } from "~/types/general";

type Props = {
  id: string;
};

const ProductCardButtons = ({ id }: Props) => {
  const { sessionId } = useSessionStore();
  const {
    updateCartItems,
    handleAddToCart,
    handleRemoveFromCart,
    shoppingCart,
  } = useShoppingCart();

  const cartItemCount =
    (Array.isArray(shoppingCart) &&
      shoppingCart
        .filter(
          (item): item is IShoppingCartItemProps => typeof item !== "string"
        )
        .find((item) => item.productId === id)?.quantity) ||
    0;

  useEffect(() => {
    updateCartItems(sessionId || "");
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "36px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: cartItemCount < 1 ? "flex-end" : "space-between",
      }}
    >
      {cartItemCount > 0 && (
        <>
          <Button
            onClick={() => handleRemoveFromCart(id, sessionId || "")}
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
            {cartItemCount}
          </Typography>
        </>
      )}
      <Button
        onClick={() => handleAddToCart(id, sessionId || "")}
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
