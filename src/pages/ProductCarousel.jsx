import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/sass/home.scss";
const ProductCarousel = () => {
  return (
    <Carousel className="carousel-product">
      <Carousel.Item interval={1000} className="carousel-item">
        <div className="carousel-img">
          <img
            src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
            alt=""
          />
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="carousel-img">
          <img
            src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
            alt=""
          />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img">
          <img
            src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
            alt=""
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
