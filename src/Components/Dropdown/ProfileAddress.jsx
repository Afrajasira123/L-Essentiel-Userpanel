import React, { useState } from "react";
import useProfileAddress from "../../hooks/useProfileAddress.js";

const ProfileAddress = ({ user }) => {
  const { address, defaultAddress, addAddress, updateAddress, removeAddress, setAsDefaultAddress } =
    useProfileAddress();

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    country: "",
    state: "",
    street: "",
    pin: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (editingId) {
      // 🔥 Update only fields user changed (send all fields, backend handles partial)
      updateAddress(editingId, {
        name: form.name,
        country: form.country,
        state: form.state,
        street: form.street,
        pin: form.pin,
        phone: form.phone,
      });

      setEditingId(null);
    } else {
      addAddress({
        name: form.name,
        country: form.country,
        state: form.state,
        street: form.street,
        pin: form.pin,
        phone: form.phone,
      });
    }

    setForm({ name: "", country: "", state: "", street: "", pin: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-light tracking-wide mb-10">My Profile</h1>

        <div className="border border-gray-200 rounded-xl p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-10">
          <div className="flex items-center gap-6">
            {/* <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-light text-gray-700">
              {user?.name?.charAt(0)}
            </div> */}

            <div>
              <h2 className="text-xl font-medium">{user?.name}</h2>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="country"
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="state"
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              name="street"
              value={form.street}
              onChange={handleChange}
              placeholder="Street"
              className="border px-3 py-2 rounded-md sm:col-span-2"
              required
            />
            <input
              name="pin"
              value={form.pin}
              onChange={handleChange}
              placeholder="Pin"
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="phone"
              className="border px-3 py-2 rounded-md"
              required
            />

            <button className="sm:col-span-2 mt-4 px-6 py-2 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition">
              {editingId ? "Update Address" : "Add Address"}
            </button>
          </form>

          <div>
            <div className="space-y-4">
              {address?.map((item) => (
                <div
                  key={item._id}
                  className="border rounded-lg p-5 flex justify-between items-start hover:shadow-md transition"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.country}, {item.state}, {item.street} - {item.pin}
                    </p>
                    <p className="text-sm text-gray-500">{item.phone}</p>

                    {defaultAddress?._id === item._id && (
                      <span className="inline-block mt-2 text-xs border px-2 py-1 rounded">
                        Default
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 text-sm">
                    {/* <button
                      type="button"
                      onClick={() => setAsDefaultAddress(item._id)}
                      className="hover:underline"
                    >
                      Set Default
                    </button> */}
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(item._id);
                        setForm({
                          name: item.name || "",
                          country: item.country || "",
                          state: item.state || "",
                          street: item.street || "",
                          pin: item.pin || "",
                          phone: item.phone || "",
                        });
                        window.scrollTo({ top: 0, behavior: "smooth" }); // optional nice UX
                      }}
                      className="hover:underline"
                    >
                      Update
                    </button>

                    <button
                      type="button"
                      onClick={() => removeAddress(item._id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAddress;
