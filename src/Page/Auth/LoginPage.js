import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {

  return (
    <Container style={{ minHeight: "500px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login fon">Login </label>
          <input
           
            placeholder="Email"
            type="email"
            className="user-input my-3 text-center mx-auto"
          />
          <input
           
            placeholder=" Password"
            type="password"
            className="user-input text-center mx-auto"
          />
          <button  className="btn-login mx-auto mt-4">
            Login{" "}
          </button>
         
          <label className="mx-auto fon  my-4">
         
            Don't have an account ?   
          <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="mx-3  text-success">
              Sign Up
              </span>
            </Link>
          </label>
          <label className="mx-auto fon ">
          Forget Password  ?
            <Link to="/user/forget-password" style={{ textDecoration: "none" }}>
              <span
                style={{ cursor: "pointer" }}
                className="fon  mx-2 text-danger"
              >
                 Reset Password
         
              </span>
            </Link>
          </label>
        </Col>
      </Row>
     
    </Container>
  );
};

export default LoginPage;
