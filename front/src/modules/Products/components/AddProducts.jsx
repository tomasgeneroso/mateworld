import React, {useState} from "react";
import {Container, Form, Button, InputGroup, FormControl, Row} from 'react-bootstrap'
import axios from 'axios'
const AddProducts=()=>{
    const [formData,setFormData]=useState(
        {
            brand: '',
            name: '',
            quantity: {amount: 0,unity: ''},
            description: '',
            price: '',
            stock: {available: true,amount: 0},
            color: '',
            material: '',
            insulation: '',
            fabricated: '',
            photo: ''
        }
    )

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
    const handleStockChange=(e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            stock: {
                ...formData.stock,
                [name]: value
            }
        });
    }
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData.stock, [name]: checked });
    }
    const handleQuantityChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            quantity: {
                ...formData.quantity,
                [name]: value
            }
        });
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            console.log('Form submitted:', formData);
            await axios.post('http://localhost:8081/admin/addproduct',formData,{headers:{"content-type": "application/json"}})
        } catch (error) {
            console.log("🚀 ~ file: AddProducts.jsx:35 ~ handleSubmit ~ error:", error)
            return error
        }
    }

    return(
        <Container className="d-flex justify-content-center align-items-center">
            <Row className="p-3">
                <h3 style={{textAlign:'center'}}>ADD PRODUCT</h3>
                <Form onSubmit={handleSubmit} className="p-3">
                    <Form.Group controlId="brand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" name="brand" value={formData.brand} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange}/>
                    </Form.Group>
                
                    <Form.Group controlId="quantity">
                        <Form.Label>Quantity</Form.Label>
                        <InputGroup>
                            <FormControl type="number" name="amount" value={formData.quantity.amount} onChange={handleQuantityChange} />
                            <InputGroup.Text>amount</InputGroup.Text>
                            <FormControl type="text" name="unity" value={formData.quantity.unity} onChange={handleQuantityChange} />
                            <InputGroup.Text>unity</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={formData.description} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" value={formData.price} onChange={handleChange}/>
                    </Form.Group>
                
                    <Form.Group controlId="stock">
                    <Form.Label>Stock</Form.Label>
                        <InputGroup>
                            <InputGroup.Checkbox name="available" checked={formData.stock.available} onChange={handleCheckboxChange}/>
                        </InputGroup>
                        <InputGroup>
                            <FormControl type="number" name="amount" value={formData.stock.amount} onChange={handleStockChange} />
                        </InputGroup>
                    </Form.Group>
                
                    <Form.Group controlId="color">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" name="color" value={formData.color} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="material">
                        <Form.Label>Material</Form.Label>
                        <Form.Control type="text" name="material" value={formData.material} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="insulation">
                        <Form.Label>Insulation</Form.Label>
                        <Form.Control type="text" name="insulation" value={formData.insulation} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="fabricated">
                        <Form.Label>Fabricated</Form.Label>
                        <Form.Control type="text" name="fabricated" value={formData.fabricated} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="photo">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="text" name="photo" value={formData.photo} onChange={handleChange}/>
                    </Form.Group>

                    
                        <Button variant="outline-success" className="mt-4"  style={{ alignSelf: 'center' }} type="submit">
                            Submit
                        </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default AddProducts