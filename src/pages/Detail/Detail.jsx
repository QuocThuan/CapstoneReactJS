import React, { useEffect, useState } from "react";
import { getByIdPageDetail } from "./../../util/detail";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import RelateProduct from "../../components/RelateProduct/RelateProduct";

const Detail = () => {
  return (
    <div>
      <ProductDetail />
      <RelateProduct />
    </div>
  );
};

export default Detail;
