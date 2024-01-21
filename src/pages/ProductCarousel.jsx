import React from "react";

const ProductCarousel = () => {
  return (
    <div>
      <div className="slideShow">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active row">
              <div className="carousel-content col-6">
                <div className="carousel-content-img w-75">
                  <img
                    src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-content-body col-4">
                  <h1>Product name</h1>
                  <p>Product description ....</p>
                  <button className="btn btn-warning">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content container w-75">
                <div className="carousel-content-img w-75">
                  <img
                    src="./assets/img/image 4.png "
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-content-body">
                  <h1>Product name</h1>
                  <p>Product description ....</p>
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content container w-75">
                <div className="carousel-content-img w-75">
                  <img
                    src="./assets/img/image 4.png "
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-content-body">
                  <h1>Product name</h1>
                  <p>Product description ....</p>
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon text-bg-dark p-2"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon text-bg-dark"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
