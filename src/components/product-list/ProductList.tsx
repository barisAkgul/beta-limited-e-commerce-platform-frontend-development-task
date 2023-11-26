import React, { ReactNode } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

interface ProductListProps {
  children: ReactNode;
}

const ProductList: React.FC<ProductListProps> = ({ children }) => {
  return (
    <>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white", fontSize: "28px" }}
      >
        <span style={{ color: "rgb(45,52,68)" }}>Pears, apple,quinces</span>
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Grid
            container
            spacing={4}
            sx={{
              paddingRight: { xs: "0", sm: "0", md: "24px" },
              minHeight: "45vh",
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
      <Box
        component={"div"}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          type="submit"
          sx={{
            marginTop: "30px",
            p: "6px 16px",
            backgroundColor: "rgb(210, 63, 87);",
            color: "#fff",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
          aria-label="search"
        >
          Load More...
        </Button>
      </Box>
    </>
  );
};

export default ProductList;
