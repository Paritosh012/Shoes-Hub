import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Increase, Decrease, removeItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const CartData = useSelector((state) => state.mycart.cart);
  const navigate = useNavigate();

  let netAmount = 0;

  const ans = CartData.map((key) => {
    netAmount += key.price * key.quantity;
    return (
      <>
        <tr>
          <td>
            <img
              style={{ width: "7rem", height: "15vh" }}
              src={key.image}
              alt={key.title}
            />
          </td>
          <td> {key.title} </td>
          <td> {key.brand} </td>
          <td> {key.price} </td>
          <td>
            <i
              style={{ marginRight: "20px", cursor: "pointer" }}
              onClick={() => {
                dispatch(Increase({ id: key.id }));
              }}
              className="fa-solid fa-plus"
            ></i>
            {key.quantity}
            <i
              style={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={() => {
                dispatch(Decrease({ id: key.id }));
              }}
              class="fa-solid fa-minus"
            ></i>
            <Button
              style={{ marginLeft: "10px" }}
              variant="primary"
              onClick={() => {
                dispatch(removeItem({ id: key.id }));
              }}
            >
              Remove
            </Button>
          </td>
          <td>{key.price * key.quantity}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <h2>Total Amount : {netAmount} </h2>
        <Button
          variant="warning"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          CheckOut
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};

export default Cart;
