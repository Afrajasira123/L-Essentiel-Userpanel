import { useState } from "react";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { toast } from "react-toastify";

const useContactForm = (initialUser) => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const submitContact = async (form) => {
    setSending(true);
    try {
      await axios.post(`${base_url}/contact`, form, { withCredentials: true });
      toast.success("successfully sent");
      setSent(true);
      return true;
    } catch (error) {
      console.log(error.response?.data?.error || "Contact submit failed");
      return false;
    } finally {
      setSending(false);
    }
  };

  return { sending, sent, submitContact, setSent };
};

export default useContactForm;
