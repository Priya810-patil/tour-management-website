import React, { useState } from 'react';
import './PaymentPage.css';


const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handlePayment = () => {
    console.log('Payment Details:', { cardNumber, expiryDate, cvv, name, });
  };


  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);


  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // You can replace this with an actual API call using a library like Axios or Fetch
      // For demonstration purposes, we're using a setTimeout to simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPaymentStatus('success');
    } catch (error) {
      setPaymentStatus('error');
    }
    console.log(`Selected Payment Method: ${selectedPaymentMethod}`);
  };

  return (
    <div className="payment-container">
      <h1 style={{ textalign: "center" }}>Payment Page</h1>
      {paymentStatus === 'success' ? (
        <div className="payment-status success">
          Payment successful! Thank you for your purchase.
        </div>
      ) : paymentStatus === 'error' ? (
        <div className="payment-status error">
          Payment failed. Please try again later.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="payment-form">

          <div className="radio-group" style={{ margin: "5px" }} >
            <lable>How would You Like to Pay!</lable>
            <label style={{ border: "1px solid grey", margin: "10px", padding: "10px" }}  >
              <input type="radio" name="paymentMethod" value="visa" checked={selectedPaymentMethod === 'visa'} onChange={handlePaymentMethodChange} required />
              Visa Card </label>

            <label style={{ border: "1px solid grey", margin: "10px", padding: "10px" }}  >
              <input type="radio" name="paymentMethod" value="paypal" checked={selectedPaymentMethod === 'paypal'} onChange={handlePaymentMethodChange} required />
              PayPal </label>
          </div>
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} maxlength="16" required />

          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="month" id="expiryDate" value={expiryDate} placeholder='MM/YYYY' onChange={(e) => setExpiryDate(e.target.value)} required />

          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} maxlength="4" required />

          <label htmlFor="name">Name on Card</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <ul class="nav nav-pills nav-stacked">
            <li class="active"><a href="#"><span class="badge pull-right"><span class="glyphicon glyphicon-usd"></span>4200</span> Final Payment</a>
            </li>
          </ul>
          <button className='submitpay' onClick={handlePayment}>Pay Now!</button>

        </form >
      )}
    </div>
  );
};

export default PaymentPage;
