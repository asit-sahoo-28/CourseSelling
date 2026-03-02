
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51SGsaABxfzR5vfZVaOOk8pbplagRMoVc9t5vH78mAn1C9uGS4GCWJC1VS4xeLETXQrcZkUaIMgrMIp2116LzqoMx00viAD99BS");

createRoot(document.getElementById('root')).render(

   <Elements  stripe={stripePromise}>
          <BrowserRouter>
             <App />
          </BrowserRouter>
  </Elements>
)
