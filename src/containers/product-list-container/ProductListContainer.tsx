import React from "react";

import { getProductsList } from "~/helpers/api/requests";
import useFetch from "~/hooks/useFetch";
import ProductCard from "~/components/product-card/ProductCard";
import ProductList from "~/components/product-list/ProductList";

const ProductListContainer: React.FC = () => {
  const { response, error, loading } = useFetch(getProductsList);

  if (loading) {
    console.log("loading:");
  }

  if (error) {
    console.error("Error:", error);
  }

  if (response) {
    console.log("Data:", response);
  }

  return (
    <ProductList>
      {response?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductList>
  );
};

export default ProductListContainer;
