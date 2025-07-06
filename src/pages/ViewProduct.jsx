import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addtoCart } from "../redux/cartSlice";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loadData = async () => {
    let api = `http://localhost:3000/nike?id=${id}`;

    let res = await axios.get(api);
    setProduct(res.data[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img
              src={product.image}
              alt={product.title}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          <Col md={6}>
            <h2>{product.title}</h2>
            <p className="text-muted">{product.brand}</p>
            <h4 className="text-success">₹{product.price}</h4>
            <p>{product.desc}</p>
            <div className="mt-4 d-flex gap-3">
              <Button
                variant="primary"
                onClick={() => {
                  const productInfo = {
                    id: product.id,
                    title: product.title,
                    description: product.desc,
                    price: product.price,
                    image: product.image,
                    brand: product.brand,
                    quantity: product.quantity,
                  };
                  dispatch(addtoCart(productInfo));
                }}
              >
                Add to Cart
              </Button>
              <Button variant="outline-secondary" onClick={() => navigate("/")}>
                Back to Shop
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewProduct;
