import React from "react";
import { Col, Row } from "react-bootstrap";

import CardShowcase from './CardShowcase.jsx'

const CarouselShowcase=()=>{
    
    return(
        <Row style={{padding:"15px"}}>
            <Col xs={6} md={2} style={{padding:"15px"}}>
                filtro
            </Col>
            <Col xs={12} md={10} style={{padding:"15px"}}>
                <ul style={{listStyle: 'none'}}>
                    <li style={{listStyle: 'none'}}> 
                        <CardShowcase/>
                    </li>
                </ul>
            </Col>
        </Row>
    );
}

export default CarouselShowcase