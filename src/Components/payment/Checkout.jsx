import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/baseUrl";

export default function Checkout() {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!stripe || !elements) {
    return <p className="text-center mt-20">Loading payment form...</p>;
  }

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        `${base_url}/payment/create-intent`,
        {},
        { withCredentials: true },
      );

      const result = await stripe.confirmCardPayment(res.data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
        setLoading(false);
        return;
      }

      if (result.paymentIntent.status === "succeeded") {
        await axios.post(
          `${base_url}/order/confirm`,
          { paymentId: result.paymentIntent.id },
          { withCredentials: true },
        );

        alert("Payment successful 🎉");
        navigate("/orders");
      }
    } catch (err) {
      setError("Payment failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-20 border rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>

      <CardElement />

      {error && <p className="text-red-500 mt-3">{error}</p>}

      <button
        onClick={handlePayment}
        disabled={loading}
        className="cursor-pointer mt-6 w-full rounded-xl bg-black py-3 text-white font-medium hover:bg-neutral-900"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
