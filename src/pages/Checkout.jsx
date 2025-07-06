import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const CartData = useSelector((state) => state.mycart.cart);
  const navigate = useNavigate();

  let netAmount = 0;

  const ans = CartData.map((key) => {
    netAmount += key.price * key.quantity;
  });
  return (
    <>
      <Form
        onSubmit={() => {
          navigate("/paydone");
        }}
      >
        <h1>Total Payable Amount : {netAmount}</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="Mail" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="Password"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUniqueId">
            <Form.Label>Unique ID</Form.Label>
            <Form.Control type="text" placeholder="Unique ID" name="UniqueID" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" name="Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            name="Address2"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control name="City" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." name="State">
              <option>Choose...</option>
              <option>Bhopal</option>
              <option>Chhindwara</option>
              <option>Indore</option>
              <option>Jabalpur</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control name="Zip" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="Submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Checkout;
