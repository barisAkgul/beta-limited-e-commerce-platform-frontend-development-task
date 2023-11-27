import React, { ReactNode } from "react";
import { Grid, Button, Box } from "@mui/material";
import colorConfigs from "~/configs/colorConfigs";

interface ProductListProps {
  children: ReactNode;
}

const ProductList: React.FC<ProductListProps> = ({ children }) => {
  return (
    <>
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
            "&:hover": {
              backgroundColor: colorConfigs.general.secondary,
            },
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
