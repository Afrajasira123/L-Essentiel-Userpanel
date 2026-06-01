import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../utils/baseUrl";

const useProfileAddress = () => {
  const [address, setAddress] = useState([]);
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const fetchAddress = async () => {
    try {
      const res = await axios.get(`${base_url}/address/`, {
        withCredentials: true,
      });

      const list = res.data.address || [];

      setAddress(list);
      setDefaultAddress(res.data.defaultAddress || list[0] || null);
    } catch (err) {
      console.error("Fetch address failed", err);
    }
  };

  // 🔥 load addresses when page opens
  useEffect(() => {
    fetchAddress();
  }, []);

  const addAddress = async (fd) => {
    try {
      await axios.patch(`${base_url}/address/add`, fd, {
        withCredentials: true,
      });

      await fetchAddress(); // 🔥 this makes new box appear instantly
    } catch (err) {
      console.error("Add address failed", err);
    }
  };

  const updateAddress = async (id, data) => {
    try {
      await axios.patch(`${base_url}/address/edit/${id}`, data, {
        withCredentials: true,
      });
      fetchAddress();
    } catch (err) {
      console.error("Update address failed", err);
    }
  };
  const removeAddress = async (id) => {
    try {
      // 🔥 FIX: withCredentials must be THIRD ARG (config), not body
      await axios.patch(`${base_url}/address/remove/${id}`, {}, { withCredentials: true });
      fetchAddress();
    } catch (err) {
      console.error("Remove address failed", err);
    }
  };

  const setAsDefaultAddress = async (id) => {
    try {
      await axios.patch(
        `${base_url}/address/default/${id}`,
        {},
        {
          withCredentials: true,
        },
      );
      fetchAddress();
    } catch (err) {
      console.error("Set default failed", err);
    }
  };

  return {
    address,
    defaultAddress,
    addAddress,
    updateAddress,
    removeAddress,
    setAsDefaultAddress,
  };
};

export default useProfileAddress;
