import React from "react";
import {Container, Row} from 'react-bootstrap'
import ProfileKey from "./ProfileKeys";
export default function Profile(){
  
        return(
            <>
                <Container className="border-top ">
                    <Row>
                        <h2 className="text-center">PROFILE</h2>
                        {/*Iterrar las key por cada data del user: name, password x2, */}
                        <ProfileKey/>
                    </Row>
                </Container>
            </>
        )
   
}
