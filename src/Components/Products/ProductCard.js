import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import prod1 from "../../images/prod1.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';
const ProductCard = () => {
    return (
        <Col xs="6" sm="6" md="4" lg="3" className="d-flex">

            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "405px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                <Link to="/products/:id" style={{ textDecoration: 'none' }}>
                <Card.Img
            style={{
              height: "208px",
              width: "90%",
              marginLeft: "15px",
              marginTop: "20px",
              display: "flex",
            }}
            src={prod1}
          />
                </Link>
              
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">

                        Beginner’s Guide to Design
                        <p className='fs-6' style={{color:"#646464"}}>
                        By Ronald Richards
                        </p>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <Row className="d-flex justify-content-between ">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">(1500 Ratings)</div>
                                
                            </div>
                            <div className='fs-7 my-2'>
                                22 Total Hours. 155 Lectures. Beginner
                                </div>
                            <div className="d-flex">
                                <div className="card-price">149.9$</div>
                               <div className='text-end w-100'>
                               <img
                        src={favoff}
                        alt=""
                        className="text-center"
                        style={{
                            height: "24px",
                            width: "26px",
                        }}
                    />
                               </div>
                               
                            </div>
                        </Row>
                    </Card.Text>
                </Card.Body>
               
            </Card>
        </Col>
    )
}

export default ProductCard
