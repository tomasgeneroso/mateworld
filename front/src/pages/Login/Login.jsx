import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {Form, Button, Col, Row, Container} from 'react-bootstrap';

function Login() {
  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  })

  const[err,setErr] = useState(null)
  const navigate = useNavigate()

  const {login} = useContext(AuthContext)

  const handleChange = (e) =>{
    e.preventDefault();
    setInputs((prev) => ({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      await login(inputs)
      navigate("/")
    } catch (error) {
      console.log("🚀 ~ file: Login.jsx:30 ~ handleSubmit ~ error:", error)
      setErr(error.response.data)
      
    }
  }

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col md={12} style={{textAlign:'center'}}>
          <Form className="m-2" >
            <h3 style={{textAlign:'center'}} className="m-4">LOG IN</h3>
            <Form.Group className="my-4"  controlId="formBasicEmail" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="username" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>
            
            <Button variant="outline-success" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            {err && <p>{err}</p>}
            <Row className="my-2">
              <Col>
                <Form.Group className="mb-2 p-2 m-2">
                  <Link to="/login" ><Form.Label style={{cursor:'pointer'}}>Forgot your password?</Form.Label></Link>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2 p-2 m-2" >
                  <Link to="/register" ><Form.Label style={{cursor:'pointer'}}>Create new account</Form.Label></Link>
                </Form.Group>
              </Col>
            </Row>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login