import { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const [txtData, setTxtData] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${txtData}`);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <i className="fa-brands fa-stripe-s"></i> Shoe-Hub
        </Navbar.Brand>
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
        
        <Form.Control
          type="text"
          value={txtData}
          onChange={(e) => setTxtData(e.target.value)}
          placeholder="Search"
          className=" mr-sm-2"
          style={{ width: "50vw", marginLeft: "25px" }}
        />
        <Button
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/signup">
          Login
        </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
