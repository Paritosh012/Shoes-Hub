import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

const Search = () => {
  const { txtval } = useParams();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      let api = `http://localhost:3000/all?title=${txtval}`;
      let res = await axios.get(api);
      setResults(res.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, [txtval]);

  const ans = results.map((item) => {
    return (
      <>
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title> {item.title} </Card.Title>
            <Card.Text>{item.decs}</Card.Text>
            <Card.Text>Price : {item.price}</Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                navigate(`/product/${item.id}`);
              }}
            >
              View Product
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  });

  return <>
  
  <div>
    {ans}
  </div>
  
  </>;
};

export default Search;
