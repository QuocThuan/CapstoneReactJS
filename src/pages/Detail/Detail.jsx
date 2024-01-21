import React, { useEffect, useState } from "react";
import { getByIdPageDetail } from "./../../services/detail";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import RelateProduct from "../../Components/RelateProduct/RelateProduct";

const Detail = () => {
  return (
    <div>
      <ProductDetail />
      <RelateProduct />
    </div>
  );
};

export default Detail;
