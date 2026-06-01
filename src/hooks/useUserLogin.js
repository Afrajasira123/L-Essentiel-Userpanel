import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../utils/baseUrl";

const useUserLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/auth/login`, data, {
        withCredentials: true,
      });
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const register = async (data) => {
    setLoading(true);
    try {
      await axios.post(`${base_url}/auth/register`, data, {
        withCredentials: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, login, register };
};

export default useUserLogin;
