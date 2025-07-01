import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: "250px", objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <h5 className="mt-auto">${product.price}</h5>
        <Button
          as={Link}
          to={`/product/${product.id}`}
          variant="dark"
          className="mt-2"
        >
          View Product
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
