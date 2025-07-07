import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [productNike, setProductNike] = useState([]);
  const [productPuma, setProductPuma] = useState([]);
  const [productAddidas, setProductAddidas] = useState([]);
  const [productRedChief, setProductRedChief] = useState([]);

  const loadData = async () => {
    try {
      const [nikeRes, pumaRes, addidasRes,redChiefRes] = await Promise.all([
        axios.get("http://localhost:3000/nike"),
        axios.get("http://localhost:3000/puma"),
        axios.get("http://localhost:3000/addidas"),
        axios.get("http://localhost:3000/redchief"),
      ]);
      setProductNike(nikeRes.data);
      setProductPuma(pumaRes.data);
      setProductAddidas(addidasRes.data);
      setProductRedChief(redChiefRes.data);
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
  const BrandCarousel = ({ items, brandImage, brandName }) => (
    <>
      <h1>
        Match Your Outfit With
        <img
          src={brandImage}
          alt={brandName}
          style={{ marginLeft: "30px", width: "150px", height: "80px" }}
        />
      </h1>
      <Carousel
        controls
        indicators={false}
        interval={3000}
        fade={false}
        nextIcon={
          <span style={{ fontSize: "2.5rem", color: "black", padding: "10px" }}>
            ›
          </span>
        }
        prevIcon={
          <span style={{ fontSize: "2.5rem", color: "black", padding: "10px" }}>
            ‹
          </span>
        }
        style={{ width: "100%", maxHeight: "500px" }}
      >
        {items.map((item) => (
          <Carousel.Item key={item.id} onClick={() => toViewProduct(item.id)}>
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
              <h5>{item.title}</h5>
              <p>
                {item.brand} — ₹{item.price}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );

  return (
    <>
      <BrandCarousel
        items={productNike}
        brandImage="./nike.svg"
        brandName="Nike"
      />
      <BrandCarousel
        items={productPuma}
        brandImage="./puma.png"
        brandName="Puma"
      />
      <BrandCarousel
        items={productAddidas}
        brandImage="./addidas.png"
        brandName="Addidas"
      />
      <BrandCarousel
        items={productRedChief}
        brandImage="./redchief.png"
        brandName="Red Chief"
      />
    </>
  );
};

export default Home;
