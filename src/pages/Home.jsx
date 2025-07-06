import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);

  const loadData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/nike");
      setProduct(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const myNav = useNavigate();

  const toViewProduct = (id) => {
    myNav(`/product/${id}`);
  };

  const brandCorousal = product.map((item) => (
    <Carousel.Item
      key={item.id}
      onClick={() => {
        toViewProduct(item.id);
      }}
    >
    
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <Carousel.Caption
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          padding: "10px 20px",
          borderRadius: "10px",
          bottom: "0px",
        }}
      >
        <h5>  {item.title}</h5>
        <p>
          {item.brand} — ₹{item.price}
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return (
    <>
      <h1>Shop by Brand</h1>
      <Carousel
        controls={true}
        indicators={false}
        interval={3000}
        fade={false}
        nextIcon={
          <span
            aria-hidden="true"
            style={{
              fontSize: "2.5rem",
              color: "black",
              padding: "10px",
            }}
          >
            ›
          </span>
        }
        prevIcon={
          <span
            aria-hidden="true"
            style={{
              fontSize: "2.5rem",
              color: "black",
              padding: "10px",
            }}
          >
            ‹
          </span>
        }
        style={{
          width: "100%",
          maxHeight: "500px",
        }}
      >
        {brandCorousal}
      </Carousel>
    </>
  );
};

export default Home;
