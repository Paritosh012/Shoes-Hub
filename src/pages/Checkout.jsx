import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const CartData = useSelector((state) => state.mycart.cart);
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    paymentMethod: "UPI",
  });

  const netAmount = CartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key] === "" && key !== "address2") {
        alert(`Please fill the ${key} field`);
        return;
      }
    }

    // Save to localStorage
    localStorage.setItem("checkoutData", JSON.stringify(formData));

    // Show toast and redirect after short delay
    setShowToast(true);
    setTimeout(() => navigate("/paydone"), 1500);
  };

  return (
    <Container
      className="my-5"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="mb-4">Checkout</h2>
        <h5 className="text-success mb-4">Total Payable: ₹{netAmount}</h5>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                value={formData.address1}
                onChange={(e) =>
                  setFormData({ ...formData, address1: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 2 (Optional)</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, etc"
                value={formData.address2}
                onChange={(e) =>
                  setFormData({ ...formData, address2: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Select
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              >
                <option value="">Select State</option>
                <option>Bhopal</option>
                <option>Indore</option>
                <option>Chhindwara</option>
                <option>Jabalpur</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Zip / Postal Code</Form.Label>
              <Form.Control
                value={formData.zip}
                onChange={(e) =>
                  setFormData({ ...formData, zip: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <div>
                {["UPI", "Credit Card", "Debit Card", "COD"].map((method) => (
                  <Form.Check
                    inline
                    type="radio"
                    name="paymentMethod"
                    key={method}
                    label={method}
                    value={method}
                    checked={formData.paymentMethod === method}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        paymentMethod: e.target.value,
                      })
                    }
                  />
                ))}
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="success" type="submit" className="mt-3">
          Place Order
        </Button>
      </Form>

      {/* Toast Notification */}
      <ToastContainer position="top-center" className="mt-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={1200}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">
            ✅ Order placed successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Checkout;
