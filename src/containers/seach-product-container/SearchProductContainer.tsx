import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

import { getSearchProductListWithName } from "~/helpers/api/requests";
import { ProductListResponse } from "~/types/general";

//Component
import ProductList from "~/components/product-list/ProductList";
import ProductCardSkeleton from "~/components/common/skeleton/ProductCardSkeleton";
import ProductCard from "~/components/product-card/ProductCard";

type Props = { query: string };

const SearchProductContainer = ({ query }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [products, setProducts] = useState<ProductListResponse>([]);

  useEffect(() => {
    const fetchData = async (query: string) => {
      try {
        setLoading(true);
        setError(null);

        const response = await getSearchProductListWithName(query);
        setProducts(response);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(query);
  }, [query]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const productListContent =
    products.length > 0 ? (
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductList>
    ) : (
      <Typography>No results found.</Typography>
    );

  return (
    <Box paddingX={2}>
      <Typography
        variant="h5"
        fontWeight={700}
        color="rgb(45, 52, 68)"
        paddingBottom="8px"
      >
        Search Results for <span style={{ color: "#FC1503" }}>{query}</span>
      </Typography>

      {loading ? (
        <ProductList>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </ProductList>
      ) : (
        productListContent
      )}
    </Box>
  );
};

export default SearchProductContainer;
