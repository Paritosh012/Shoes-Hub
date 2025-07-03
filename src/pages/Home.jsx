import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cardtSlice";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  let nav = useNavigate();

  const loadData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setMyData(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredData =
    selectedBrand === "All"
      ? myData
      : myData.filter(
          (product) =>
            product.brand.toLowerCase() === selectedBrand.toLowerCase()
        );

  const viewProd = (id) => {
    nav(`/product/${id}`);
  };

  const dispatch = useDispatch();

  const filteredProducts = filteredData.map((product) => (
    <Card key={product.id} style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Category: {product.category}
          <br />
          Brand: {product.brand}
          <br />
          Price: ₹{product.price}
        </Card.Text>
        <Button
          variant="primary"
          className="me-2"
          onClick={() => viewProd(product.id)}
        >
          View Product
        </Button>
        <Button
          variant="success"
          onClick={() => {
            dispatch(
              addtoCart({
                id: product.id,
                title: product.title,
                description: product.description,
                category: product.category,
                price: product.price,
                image: product.image,
              })
            );
          }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <h1 align="center">Shop by Brands</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <select
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand}
        >
          <option value="All">All Brands</option>
          <option value="Nike">Nike</option>
          <option value="Puma">Puma</option>
          <option value="Adidas">Adidas</option>
          <option value="Redbook">Redbook</option>
          <option value="Campus">Campus</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredProducts}
      </div>
    </>
  );
};

export default Home;
