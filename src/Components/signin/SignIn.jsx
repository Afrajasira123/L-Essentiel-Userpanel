import React, { useState, useEffect } from "react";
import WelcomeCarousal from "./WelcomeCarousal";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignUp
      ? "http://localhost:3000/api/v1/auth/register"
      : "http://localhost:3000/api/v1/auth/login";

    const payload = isSignUp
      ? {
        username: formData.username,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      }
      : {
        email: formData.email,
        password: formData.password,
      };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // IMPORTANT for cookie
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || data.message || "Authentication failed");
        return;
      }

      alert(data.message);

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.dispatchEvent(new Event("auth-change"));
      }

      if (!isSignUp) {
        navigate("/");
      } else {
        setIsSignUp(false); // back to sign in after register
      }
    } catch (error) {
      console.error(error);
      alert("Server not reachable");
    }
  };

  return (
    <div className="bg-purple-100 h-screen flex ">
      <div className="overflow-hidden">
        <WelcomeCarousal />
      </div>

      <div className="flex items-center ">
        <div className="shadow-xs shadow-amber-900 h-[600px] w-[550px] rounded-sm tracking-widest p-10 ">
          <p className="text-2xl font-bold flex justify-center mb-10">
            {isSignUp ? "SIGN UP" : "SIGN IN"}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col ">
            {isSignUp && (
              <>
                <label className="text-sm mb-3 font-semibold">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="text-sm h-8 w-100 shadow-md rounded-sm mb-5 outline-none bg-transparent"
                />

                <label className="text-sm mb-3 font-semibold">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="text-sm h-8 w-100 shadow-md rounded-sm mb-6 outline-none bg-transparent"
                />
              </>
            )}

            <label className={`mb-3 font-semibold ${isSignUp ? "text-sm" : "text-lg"}`}>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`text-sm w-100 shadow-md rounded-sm mb-6 outline-none bg-transparent ${isSignUp ? "h-8" : "h-10"
                }`}
            />

            <label className={`mb-3 font-semibold ${isSignUp ? "text-sm" : "text-lg"}`}>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`text-sm w-100 shadow-md rounded-sm mb-6 outline-none bg-transparent ${isSignUp ? "h-8" : "h-10"
                }`}
            />

            <div className={`flex gap-20 ${isSignUp ? "mt-3 mb-5" : "mt-10 mb-15"}`}>
              <button
                type="submit"
                className="shadow-lg py-2 w-40 font-medium rounded-sm hover:bg-purple-200"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </button>

              {!isSignUp && (
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="shadow-lg py-2 w-40 font-medium rounded-sm hover:bg-purple-200"
                >
                  Sign Up
                </button>
              )}

              {isSignUp && (
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="shadow-lg py-2 w-40 font-medium rounded-sm hover:bg-purple-200"
                >
                  Back to Sign In
                </button>
              )}
            </div>

            <p className={`${isSignUp ? "text-sm" : "text-md"}`}>
              {isSignUp
                ? "Already have an account? Sign in instead."
                : "If not a user, please sign up to register your address."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
