import './App.css'
import Header from './Header.js'
import Home from './Home.js'
import { Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51MlAAGSAenbqRi8XIrHcGAinp1lyfd4zcZFCfdx1IztV3AbVHYrbTsRjgnuoSDaTOKdy9C7GLkHW2OZgEY3Bwxxl00tXs0xqon',
)

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // will run only once the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log('The USER IS >>>>', authUser)

      if (authUser) {
        // the user just / was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
    })
  }, [])
  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route path="/login" element={<Login />} />






          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                {' '}
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
