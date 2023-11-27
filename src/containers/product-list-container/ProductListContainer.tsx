import React from "react";
import { Typography } from "@mui/material";

import useFetch from "~/hooks/useFetch";
import { getProductsList } from "~/helpers/api/requests";

//Components
import ProductCard from "~/components/product-card/ProductCard";
import ProductList from "~/components/product-list/ProductList";
import ProductCardSkeleton from "~/components/common/skeleton/ProductCardSkeleton";

const ProductListContainer: React.FC = () => {
  const { response, error, loading } = useFetch(getProductsList);

  if (error) {
    console.error("Error:", error);
  }

  return (
    <>
      {" "}
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white", fontSize: "28px" }}
      >
        <span style={{ color: "rgb(45,52,68)" }}>Pears, apple, quinces</span>
      </Typography>
      <ProductList>
        {loading ? (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : (
          <>
            {response?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </>
        )}
      </ProductList>
    </>
  );
};

export default ProductListContainer;
