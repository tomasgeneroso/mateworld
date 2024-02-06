import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand style={{ paddingRight: '40px' }} className='col-4' href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Form className="d-flex col-4">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search" />
              <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Collapse className='md-2' id="navbarScroll">
            <Nav
              className=" my-2"
              style={{ maxHeight: '100px' , marginLeft:'40%'}}
              navbarScroll
            >   
              {/*SACAR CUANDO SE LOGUEE */}
              <Nav.Link style={{ paddingLeft: '30px' }} href="/login">LOGIN</Nav.Link>
              
              <Nav.Link style={{ paddingLeft: '30px' }} href="#action2"><span className="material-icons"></span></Nav.Link> 
              {/*PONER CONTADOR DE PRODUCTOS */}
              
              {/*CUANDO ESTA LOGUEADO MOSTRAR EL PROFILE  */}
              <NavDropdown style={{ paddingLeft: '30px' }} title="MY PROFILE" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My shipment</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary bg-light">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 "
              style={{ maxHeight: '100px', textAlign:'center', backgroundColor:'' }}
              navbarScroll
            >
              <Nav.Link style={{ paddingLeft: '30px' }} href="Showcase">THERMOS</Nav.Link>
              <Nav.Link style={{ paddingLeft: '30px' }} href="Showcase">PORONGOS</Nav.Link>
              <Nav.Link style={{ paddingLeft: '30px' }} href="#action4">BOMBILLAS</Nav.Link>
              <Nav.Link style={{ paddingLeft: '30px' }} href="#action4">YERBAS</Nav.Link>
              <Nav.Link style={{ paddingLeft: '30px' }} href="#action2">ACCESORIOS</Nav.Link>
              <Nav.Link style={{ paddingLeft: '30px' }} href="#action2">REDES Y CONTACTO</Nav.Link> {/*salto al footer*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;