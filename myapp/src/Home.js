import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./bg1.jpg" alt="img" />

        <div className="home__row">
          <Product 
          id="12321341"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, 13 September 2011"
          price={29.99}
          image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          rating={5}
          />
          <Product 
          id="49538094"
          title="Kenwood Artisan Series 5KSM150PSDER 300 kMix Stand Mixer - Watt Tilt Head Stand Mixer 4.8 Litre - Empire Red"
          price={239.0}
          image="https://m.media-amazon.com/images/I/718AazQG7kL._SX522_.jpg"
          rating={4}

          />
        </div>
        <div className="home__row">
          <Product 
          id="4903850"
          title="Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution"
          price={199.99} 
          image="https://m.media-amazon.com/images/I/61uUuRZ8yuL._SY450_.jpg"
          rating={3}
        />
          <Product 
          id="23445930"
          title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
          price={98.99}
          image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX522_.jpg"
          rating={4}/>
          <Product 
          id="3254354345"
          title="New Apple iPad Pro(12.9-inch) Apple 2021 iPad Mini with A15 Bionic chip (Wi-Fi, 64GB) - Space Grey (6th Generation)"
          price={598.99}
          image="https://th.bing.com/th/id/OIP.vpOEDW5QnWc_nk0MGfWgdgHaG7?w=187&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          rating={4}/>
        </div>
        <div className="home__row">
        <Product id="90829332"
              title="Acer Nitro Vg270 S 27 Inch (68.58 Cm) LCD 1920 x 1080 Pixels Monitor with LED Backlight Full Hd IPS Gaming I 0.5 Ms Response Time I 165Hz Refresh Rate I HDR 10 I AMD Radeon Free Sync I (Black)"
              price={1094.98}
              image="https://i.gadgets360cdn.com/large/samsung_odyssey_neo_g9_1627375145394.jpg" 
              rating={4}/>

        </div>
      </div>
    </div>
  )
}

export default Home
