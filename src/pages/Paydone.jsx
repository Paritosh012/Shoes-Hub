import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Paydone = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState({
    orderId: Math.random().toString(36).substr(2, 9).toUpperCase(),
    amount: localStorage.getItem("totalAmount") || "0",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });
  const navigate = useNavigate();
   const CartData = useSelector((state) => state.mycart.cart);

    const netAmount = CartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    // Simulate payment processing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    localStorage.removeItem("cartItems"); // Assuming you store cart items in localStorage
    localStorage.removeItem("totalAmount"); // Clear total amount after payment
  }, []);

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleViewOrders = () => {
    navigate("/orders"); // Assuming you have an orders page
  };

  if (isLoading) {
    return (
      <div className="payment-success-container">
        <div className="payment-success-card">
          <div className="payment-loading">
            <div className="payment-spinner"></div>
            <h3>Processing Payment...</h3>
            <p>Please wait while we confirm your transaction</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-success-container">
      {/* Confetti Animation */}
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>

      <div className="payment-success-card">
        <div className="success-icon-container">
          <div className="success-icon">
            <i className="fas fa-check"></i>
          </div>
        </div>

        <h1 className="payment-success-title">Payment Successful!</h1>
        <p className="payment-success-message">
          Thank you for your purchase. Your order has been confirmed and will be
          processed shortly.
        </p>

        <div className="payment-success-details">
          <h5>Order Details:</h5>
          <p>
            Order ID:{" "}
            <span className="detail-value">#{orderDetails.orderId}</span>
          </p>
          <p>
            Amount: <span className="detail-value">₹{netAmount}</span>
          </p>
          <p>
            Date: <span className="detail-value">{orderDetails.date}</span>
          </p>
          <p>
            Time: <span className="detail-value">{orderDetails.time}</span>
          </p>
        </div>

        <div className="payment-success-actions">
          <Button
            className="btn-continue-shopping"
            onClick={handleContinueShopping}
          >
            <i className="fas fa-shopping-bag me-2"></i>
            Continue Shopping
          </Button>
          <Button className="btn-view-orders" onClick={handleViewOrders}>
            <i className="fas fa-receipt me-2"></i>
            View Orders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Paydone;
