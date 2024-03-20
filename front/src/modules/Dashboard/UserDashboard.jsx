import React from "react";
import Profile from "./components/Profile/Profile";
import Shipments from "./components/Shipments/Shipments";
import { Container, Row } from "react-bootstrap";
export default function UserDashboard(){
  
        return(
            <>
                <Container>
                    <Row className="mt-2 mb-2">
                        <Shipments/>
                    </Row>
                    <Row className="mt-2 mb-2">
                        <Profile/>
                    </Row>
                        
                </Container>
            </>
        )
   
}

