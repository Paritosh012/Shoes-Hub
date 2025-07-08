import axios from "axios";
import { useEffect, useState } from "react";
import "./Nike.css"; // You can keep the same CSS for Puma too
import { useNavigate } from "react-router-dom";

const Puma = () => {
  const [puma, setPuma] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/puma`) // ✅ use the correct endpoint
      .then((res) => {
        setPuma(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Puma products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="nike-loading">Loading...</p>;

  const ans = puma.map((item) => (
    <div
      className="nike-card"
      key={item.id}
      onClick={() => navigate(`/product/${item.id}`)}
    >
      <img src={item.image} alt={item.title} loading="lazy" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </div>
  ));

  return <div className="nike-container">{ans}</div>;
};

export default Puma;
