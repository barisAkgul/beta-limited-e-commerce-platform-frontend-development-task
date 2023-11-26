import React from "react";

import { getProductsList } from "~/helpers/api/requests";
import useFetch from "~/hooks/useFetch";
import ProductCard from "~/components/product-card/ProductCard";
import ProductList from "~/components/product-list/ProductList";
import ProductCardSkeleton from "~/components/common/skeleton/ProductCardSkeleton";

const ProductListContainer: React.FC = () => {
  const { response, error, loading } = useFetch(getProductsList);

  if (error) {
    console.error("Error:", error);
  }

  return (
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
  );
};

export default ProductListContainer;
