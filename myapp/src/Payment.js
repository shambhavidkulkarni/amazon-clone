import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import SubTotal from './SubTotal'
import axios from './axios';
import { getBasketTotal } from './reducer'

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()

  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate();

  const [succeeded, setSuceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    

    const getClientSecret = async () => {
        const response = await axios({
            method:"post",
            // stripe expects the total in a currencies subunits
            url:`/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }
  },[basket])


  const handleSubmit = async(event) => {
    // do all fancy stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) => {
        // paymentIntent = payment confirmation

        setSuceeded(true)
        setError(null)
        setProcessing(false)
        navigate('/orders', { replace: true });    
    }) 
  }

  const handleChange = (event) => {
    // Listen for changes in CardEolement
    // and display any errors as the customer typed their card details

    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>

            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
