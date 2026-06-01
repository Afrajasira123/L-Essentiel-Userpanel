import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51SxhIzA1u9rQ5nvDYn2Zi4plSG0bOMw59y0w8qmpoqbRE088CIhL552BUsb26pSZDFbNic3RlS9evREhFFQKFJK700A4qVsVA5",
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/L-Essentiel">
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  </StrictMode>,
);
