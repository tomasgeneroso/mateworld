import React, { useState } from 'react'
import {Row,Col,Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'

const CardShowcase=()=>{
    
    const [product,setProduct]=useState()
    
    useEffect(() => {
        const fetchResults = async () => {
            
        try {
            const response = await axios.get('http://localhost:8080');
            console.log("🚀 ~ file: CardShowcase.jsx:14 ~ fetchResults ~ response:", response)
        
        } catch (error) {
            console.error(error);

        }
    };
        fetchResults();
    }, []);
    return(
        
        <Link to="/">
            <Row>
                <Col md={4}>
                    <img alt="termo" src={require(`./images/termo.jpg`)} height={'200px'} width={'200px'}></img>        
                </Col>    
                <Col  className="DescripProdContainer" >   
                    <Row>
                        <Col>
                        
                        <Row md={4} style={{padding:'10px'}}>
                            <Table className="DescripProdContainer" style={{textDecoration:'none'}} borderless size="sm">
                                <tbody style={{textDecoration:'none'}}  >
                                    <tr style={{fontSize:'16px',textDecoration:'none'}}>
                                    <td>Title</td>
                                    <td>Trademark</td>
                                    <td>Capacity</td>
                                    </tr>
                                    <tr style={{fontSize:'14px'}}>
                                    <td>ProductTitle</td>
                                    <td>ProductTrademark</td>
                                    <td>ProductCapacity</td>                                
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row md={4} style={{padding:'10px'}}>
                            <Table className="DescripProdContainer" borderless size="sm">
                                <tbody >
                                    <tr style={{fontSize:'16px'}}>                        
                                        <td>Color</td>
                                        <td>Material</td>
                                        <td>Insulation</td>
                                    </tr>

                                    <tr style={{fontSize:'14px'}}>
                                    
                                        <td>ProductColor</td>
                                        <td>ProductMaterial</td>
                                        <td>InsulationType</td>

                                    </tr>
                                
                                </tbody>
                            </Table>
                        </Row>
                        </Col>    
                        <Col md={2} >
                            <h3>$ XX</h3>
                            <button type="submit" onClick={e=>setProduct(e)} >BUY</button>
                        </Col> 
                    </Row>
                </Col>
            </Row>
        </Link>
        
    )
}

export default CardShowcase