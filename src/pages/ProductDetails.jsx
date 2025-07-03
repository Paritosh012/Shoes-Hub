import axios from "axios";
import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  Badge,
} from "react-bootstrap";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const loadProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error("Error loading product", err);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  return (
    <>
      <Container className="my-5 p-4 shadow-sm rounded bg-white border">
        {product && product.id ? (
          <Row className="align-items-center">
   
            <Col md={6}>
              <Carousel variant="dark" className="border rounded p-2 shadow-sm">
                {(product.images || [product.image]).map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <Image
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      fluid
                      className="d-block mx-auto"
                      style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>


            <Col md={6}>
              <h2 className="fw-bold">{product.title}</h2>
              <p className="text-muted mb-2">
                Brand: <span className="text-dark">{product.brand}</span>
              </p>
              <p>
                Category:{" "}
                <Badge bg="info" className="text-uppercase">
                  {product.category}
                </Badge>
              </p>
              <h3 className="text-danger">₹{product.price}</h3>

              <p className="text-warning mb-1">
                ⭐ {product.rating || 4.5} | 1,200 reviews
              </p>
              <p className={product.stock > 0 ? "text-success" : "text-danger"}>
                {product.stock > 0 ? "In stock" : "Out of stock"}
              </p>

              <Form className="my-3">
                <Form.Group
                  controlId="quantity"
                  className="d-flex align-items-center"
                >
                  <Form.Label className="me-2 mb-0">Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="w-25"
                  />
                </Form.Group>
              </Form>

              <Button variant="success" size="lg" className="me-3">
                Add to Cart
              </Button>
              <Button variant="secondary" onClick={() => navigate("/")}>
                Back to Home
              </Button>

              <div className="mt-4">
                <h5>Description</h5>
                <p>
                  {product.description ||
                    "No description available for this product."}
                </p>
              </div>
            </Col>
          </Row>
        ) : (
          <h4 className="text-center py-5">Loading Product Details...</h4>
        )}
      </Container>
      <Container className="my-5 p-4 shadow-sm rounded bg-white border">

      </Container>
    </>
  );
};

export default ProductDetails;
