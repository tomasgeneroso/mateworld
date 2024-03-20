import React from 'react'

import { Container, ListGroup } from 'react-bootstrap';


const ProductList = ({ products }) => {
  return (
    <Container>
      <ListGroup style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {products.map((product, index) => (
          <ListGroup.Item key={index}> {product} </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
  
  export default ProductList;
