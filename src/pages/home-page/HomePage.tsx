import React from "react";
import ShoppingCart from "~/components/test";
import ProductListContainer from "~/containers/product-list-container/ProductListContainer";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <ProductListContainer />
    </>
  );
};

export default HomePage;
