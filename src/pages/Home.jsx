import React, { useEffect, useState, useDispatch, useSelector } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [arrProduct, setArrProduct] = useState([]);
  console.log("arrProduct", arrProduct);
  const getAllProductAPI = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    setArrProduct(res.data.content);
  };

  useEffect(() => {
    //gọi api trong useEffect didmount
    getAllProductAPI();
  }, []);
  return (
    <div>
      {/* <Carousel>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <div className="container">
        <h3>Home</h3>
        <div className="row">
          {arrProduct?.map((prod) => {
            return (
              <div className="col-md-4 mt-2" key={prod.id}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/detail/${prod.id}`}
                  className="card"
                >
                  <img src={prod.image} alt="..." />
                  <div className="card-body">
                    <h5>{prod.name}</h5>

                    <NavLink className="btn btn-dark" to={`/detail/${prod.id}`}>
                      Buy now
                    </NavLink>
                    <NavLink className="btn btn-primary mx-3">
                      {prod.price}
                    </NavLink>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
