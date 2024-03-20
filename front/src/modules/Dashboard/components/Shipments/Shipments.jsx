import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductList from './components/PucharsedProducts'
export default function Shipments(){
    const products = [
        'Producto 1',
        'Producto 2',
        'Producto 3',
        'Producto 4',
        'Producto 5',
      ];    
        return(
            <>
                <Container> 
                    <Row className="mt-2 mb-2">
                        
                        <h3 className="text-center">YOUR ORDER</h3>
                        <h6 className="mt-2 mb-2">Shipment code: <span>XXXXX</span></h6>
                        <h6>Follow your order in <span>https//:www.urlshipmententerprise.com/asdasdf</span></h6>
                        <div>
                            <h1>Products</h1>
                            <ProductList products={products} />
                        </div>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </>
        )
   
}
