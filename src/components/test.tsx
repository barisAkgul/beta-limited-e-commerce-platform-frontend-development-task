import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import useShoppingCart from "~/stores/shopping-cart-store";
import useSessionStore from "~/stores/session-store";

const ShoppingCart = () => {
  const { shoppingCart, updateCartItems } = useShoppingCart();
  const { sessionId } = useSessionStore();

  useEffect(() => {
    updateCartItems(sessionId || "");
  }, []);

  return (
    <div>
      <Typography variant="h4">Shopping Cart</Typography>
      {shoppingCart.length === 0 ? (
        <Typography>Your shopping cart is empty.</Typography>
      ) : (
        <ul>
          {Array.isArray(shoppingCart) ? (
            shoppingCart.map((product) => (
              <li key={product.productId}>
                <Box>
                  <Typography>{product.name}</Typography>
                  <Typography>Quantity: {product.quantity}</Typography>
                  <Typography>Price: ${product.price.toFixed(2)}</Typography>
                </Box>
              </li>
            ))
          ) : (
            <li>{shoppingCart}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
