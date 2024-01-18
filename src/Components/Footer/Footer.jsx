import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div>
      <MDBFooter bgColor="light" className="text-center text-lg-left">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="4" md="6" className="mb-4 mb-md-0 text-start">
              <h5 className="text-uppercase">GET HELP</h5>

              <ul className="list-unstyled mb-0 ">
                <li>
                  <a href="#!" className="text-dark">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Nike
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Adidas
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Contact
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4 mb-md-0 text-start">
              <h5 className="text-uppercase">SUPPORT</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">
                    About
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Phone
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4 mb-md-0 text-start">
              <h5 className="text-uppercase">REGISTER</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Login
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright{" "}
          <p className="text-dark d-inline-block">All Rights Reserved</p>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
