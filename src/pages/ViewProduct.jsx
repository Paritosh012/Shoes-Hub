import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addtoCart } from "../redux/cartSlice";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      setLoading(true);
      let res;
      res = await axios.get(`http://localhost:3000/nike?id=${id}`);
      if (res.data.length > 0) {
        setProduct(res.data[0]);
        setLoading(false);
        return;
      }
      res = await axios.get(`http://localhost:3000/puma?id=${id}`);
      if (res.data.length > 0) {
        setProduct(res.data[0]);
        setLoading(false);
        return;
      }
      res = await axios.get(`http://localhost:3000/adidas?id=${id}`);
      if (res.data.length > 0) {
        setProduct(res.data[0]);
        setLoading(false);
        return;
      }
      res = await axios.get(`http://localhost:3000/redchief?id=${id}`);
      if (res.data.length > 0) {
        setProduct(res.data[0]);
        setLoading(false);
        return;
      }
      alert("Product not found in any brand.");
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddToCart = () => {
    const productInfo = {
      id: product.id,
      title: product.title,
      description: product.desc,
      price: product.price,
      image: product.image,
      brand: product.brand,
      quantity: product.quantity,
    };

    if (!added) {
      dispatch(addtoCart(productInfo));
      setAdded(true);
    } else {
      navigate("/cart");
    }
  };

  if (loading) {
    return (
      <div className="view-product-container">
        <div className="product-loading">
          <div className="spinner"></div>
          <p>Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="view-product-container">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <div className="product-image">
              <img
                src={product.image}
                alt={product.title}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Col>

          <Col md={6}>
            <div className="product-details">
              <h2>{product.title}</h2>
              <p className="product-brand">{product.brand}</p>
              <h4 className="product-price">₹{product.price}</h4>
              <p className="product-description">{product.desc}</p>

              <div className="product-actions">
                <Button
                  className={`btn-add-to-cart ${
                    added ? "btn-success-animation" : ""
                  }`}
                  onClick={handleAddToCart}
                >
                  {added ? "Go to Cart" : "Add to Cart"}
                </Button>
                <Button
                  className="btn-back-to-shop"
                  onClick={() => navigate("/")}
                >
                  Back to Shop
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewProduct;
