import axios from "axios";
import { useEffect, useState } from "react";
import "./Nike.css"; // Same CSS for layout
import { useNavigate } from "react-router-dom";

const Adidas = () => {
  const [adidas, setAdidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/adidas")
      .then((res) => {
        setAdidas(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Adidas products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="nike-loading">Loading...</p>;

  return (
    <div className="nike-container">
      {adidas.map((item) => (
        <div
          className="nike-card"
          key={item.id}
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <img src={item.image} alt={item.title} loading="lazy" />
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Adidas;
