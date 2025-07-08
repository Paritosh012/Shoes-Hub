import axios from "axios";
import { useEffect, useState } from "react";
import "./Nike.css";
import { useNavigate } from "react-router-dom";

const Nike = () => {
  const [nike, setNike] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/nike`)
      .then((res) => {
        setNike(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Nike products:", error);
        setLoading(false);
      });
  }, []);

  const ans = nike.map((item) => (
    <div
      className="nike-card"
      key={item.id}
      onClick={() => {
        navigate(`/product/${item.id}`);
      }}
    >
      <img src={item.image} alt={item.title} loading="lazy" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </div>
  ));

  return <div className="nike-container">{ans}</div>;
};

export default Nike;
