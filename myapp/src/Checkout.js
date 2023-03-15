import React from 'react'
import './Checkout.css'
import SubTotal from './SubTotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket,user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.featuredproductsusa.com/wp-content/uploads/2019/10/ocean_credit02-1024x256.png"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>

          {basket.map(item => (
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

      <div>
        <h2 className="checkout__right">
          <SubTotal/>
        </h2>
      </div>
    </div>
  )
}

export default Checkout
