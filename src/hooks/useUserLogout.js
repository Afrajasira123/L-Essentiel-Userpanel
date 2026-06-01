import axios from "axios";
import { useNavigate } from "react-router-dom";
import { base_url } from "../utils/baseUrl";
import { toast } from "react-toastify";

const useUserLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(`${base_url}/auth/logout`, {}, { withCredentials: true });
      localStorage.removeItem("user");
      window.dispatchEvent(new Event("auth-change"));
      toast.success("Logged out successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error || "Logout failed");
    }
  };

  return { logout };
};

export default useUserLogout;
