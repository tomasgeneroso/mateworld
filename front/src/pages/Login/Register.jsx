import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {Form, Button, Col, Row, Container} from 'react-bootstrap';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password:"",
    name: "",
    surname: "",
    birthday:"",
    address:"",
    postalCode:"",
    addressDetails:""
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", inputs);
      navigate("/login");
    }catch(err){
      setErr(err.response.data);
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col md={12} style={{textAlign:'center'}}>
          <Form className="m-2" >
            <h3 style={{textAlign:'center'}} className="m-4">REGISTER</h3>
            <Row>
              <Col>
                <Form.Group className="my-4"  controlId="formBasicEmail" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="username" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicPassword" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="Password" placeholder="Password" name="password" onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="my-4" controlId="formBasicName" >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="Name" placeholder="Name" name="name" onChange={handleChange}/>
                </Form.Group>
                
                <Form.Group className="my-4" controlId="formBasicSurname" >
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="Surname" placeholder="Surname" name="surname" onChange={handleChange}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="my-4" controlId="formBasicBirthday" >
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control type="Birthday" placeholder="Birthday" name="birthday" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicAddress" >
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="Address" placeholder="Address" name="address"onChange={handleChange}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="my-4" controlId="formBasicAddressDetails" >
                  <Form.Label>Address details</Form.Label>
                  <Form.Control type="AddressDetails" placeholder="Address details" name="addressDetails" onChange={handleChange}/>
                </Form.Group>
              
                <Form.Group className="my-4" controlId="formBasicPostalCode" >
                  <Form.Label>Postal code</Form.Label>
                  <Form.Control type="PostalCode" placeholder="Postal code" name="postalCode" onChange={handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            
            <Button variant="outline-success" type="submit" onClick={handleSubmit} >
              Submit
            </Button>
            {err && <p>{err}</p>}
            <Row className="my-2">
              <Col>
                <Form.Group className="mb-2 p-2 m-2" >
                  <Form.Label>You already have an account?</Form.Label> 
                  <Link to="/login" ><Form.Label style={{cursor:'pointer'}}>Login</Form.Label></Link>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;