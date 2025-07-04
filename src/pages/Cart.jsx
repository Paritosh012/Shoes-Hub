import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

const Cart = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4">Your Shopping Cart</h2>

      <Row className="mb-4">
        <Col md={8}>
          {[1, 2].map((item, idx) => (
            <Card key={idx} className="mb-3 p-3 shadow-sm">
              <Row className="align-items-center">
                <Col md={3}>
                  <img
                    src="/your-image-path.avif"
                    alt="Product"
                    className="img-fluid rounded"
                  />
                </Col>
                <Col md={6}>
                  <h5 className="mb-1">Product Title</h5>
                  <p className="text-muted mb-2">Brand Name</p>
                  <p className="text-success fw-semibold">₹ Price</p>
                </Col>
                <Col md={3} className="text-md-end text-center">
                  <Form.Control
                    type="text"
                    placeholder="Enter quantity..."
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                  <Button variant="danger" size="sm">
                    <i className="fa-solid fa-trash-can me-1"></i> Remove
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <h5 className="mb-3">Summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>₹ Total</span>
            </div>
            <hr />
            <Button variant="success" className="w-100">
              Proceed to Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
