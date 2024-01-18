import React, { useEffect, useState } from "react";
import { getByIdPageDetail } from "./../../util/detail";

const RelateProduct = () => {
  const [productRelate, setProductRelate] = useState([]);

  useEffect(() => {
    getByIdPageDetail
      .getById()
      .then((res) => {
        console.log(res);
        setProductRelate(res.data.content.relatedProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(productRelate);
  return (
    <div className="container max-w-screen-xl mt-5">
      <h2 className="fs-2 fw-medium mb-5 text-center">- Relate Product -</h2>
      <div className="mb-4">
        <div className="row">
          {productRelate.map((item, index) => {
            return (
              <div className="col-4">
                <div class="card ">
                  <div className="d-flex justify-content-center">
                    <img
                      src={item.image}
                      class="card-img-top w-75  "
                      alt="..."
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                    <a href="#" class="btn bg-warning w-50 py-3">
                      Buy Now
                    </a>
                    <a href="#" class="btn bg-light w-50 fw-semibold fs-6 py-3">
                      {item.price}$
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelateProduct;
