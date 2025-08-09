import React from 'react'
import {  Row, Col } from 'react-bootstrap'

import slider4 from "../../images/Vestibular.png";


const Silder = () => {
    
    return (
   
                <Row className="d-flex flex-row  align-items-center">
                    <Col sm={6} className="d-flex justify-content-center ">
                    <div className="d-inline">
                        <p className="slider-text">Develop Your Skills In a New And Unique</p>
                        <h3 className="slider-title">Explore a transformative approach to skill development on our online learning platform. Uncover a new realm of learning experiences and elevate your expertise in unique ways  </h3>
                    </div>
                    </Col>
                    <Col sm={6} className="d-flex justify-content-center ">
                    <div className='d-flex'>
                   <img
                        style={{ height: "396px", width: "413.53px" }}
                        className="d-flex"
                        src={slider4}
                        alt="First slide"
                    />
                   </div>
                    </Col>
                </Row>
            
    )
}

export default Silder
