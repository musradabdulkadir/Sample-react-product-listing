import { useState } from "react";
import "./css/App.css";
import Product from "./components/Product";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [products, setProducts] = useState([
    {
      title: "Headset",
      image:
        "https://imgs.search.brave.com/6qCVNhP7UmMSemfv3OEKLQldHV1NzQAoqfJRRwO-ARM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/Nzc4LzQ1MC9zbWFs/bC9zdHlsaXNoLWJs/YWNrLWhlYWRwaG9u/ZXMtb24tdmlicmFu/dC1vcmFuZ2UtYmFj/a2dyb3VuZC1wcm9k/dWN0Z3JhcGh5LXBo/b3RvLmpwZw",
      price: 1500,
    },
    {
      title: "Camera",
      image:
        "https://imgs.search.brave.com/c5bO-gJEWFGZAhndor5yvbCNYlnxFnEBqInQkHCWr8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ncmFw/aGljZGVzaWduZXll/LmNvbS9pbWFnZXMv/Q2Fub24tRU9TLVI1/LmpwZw",
      price: 155500,
    },
    {
      title: "Cycle",
      image:
        "https://imgs.search.brave.com/urU_Es8sx3P2Bz_PBApgTGPhELZ2q1vQU62AB6TzTb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaG9v/c2VteWJpY3ljbGUu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL2YzaV81/MDAweC5qcGc_dj0x/NzcyNTM2MjIy",
      price: 15000,
    },
    {
      title: "Headset",
      image:
        "https://imgs.search.brave.com/6qCVNhP7UmMSemfv3OEKLQldHV1NzQAoqfJRRwO-ARM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/Nzc4LzQ1MC9zbWFs/bC9zdHlsaXNoLWJs/YWNrLWhlYWRwaG9u/ZXMtb24tdmlicmFu/dC1vcmFuZ2UtYmFj/a2dyb3VuZC1wcm9k/dWN0Z3JhcGh5LXBo/b3RvLmpwZw",
      price: 1500,
    },
    {
      title: "Camera",
      image:
        "https://imgs.search.brave.com/c5bO-gJEWFGZAhndor5yvbCNYlnxFnEBqInQkHCWr8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ncmFw/aGljZGVzaWduZXll/LmNvbS9pbWFnZXMv/Q2Fub24tRU9TLVI1/LmpwZw",
      price: 155500,
    },
    {
      title: "Cycle",
      image:
        "https://imgs.search.brave.com/urU_Es8sx3P2Bz_PBApgTGPhELZ2q1vQU62AB6TzTb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaG9v/c2VteWJpY3ljbGUu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL2YzaV81/MDAweC5qcGc_dj0x/NzcyNTM2MjIy",
      price: 15000,
    },
  ]);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <h1>Products</h1>
        <Row >
          {products.map((product, index) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Product data={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;
