import React, { useState } from "react";
import useContactForm from "../hooks/useContact";

function Contact({ user }) {
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    subject: "",
    orderId: "",
    message: "",
  });

  const { sending, sent, submitContact, setSent } = useContactForm();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await submitContact(form);

    if (ok) {
      setForm({
        name: user?.name || "",
        email: user?.email || "",
        subject: "",
        orderId: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-center font-light tracking-wide mb-6">Contact</h1>

        <p className="text-sm text-center text-gray-600 max-w-2xl mx-auto">
          L'Essentiel Client Service Center is available Monday to Sunday from 10am to 7:30pm (IST).
          Our Client Advisors will be delighted to assist you and provide personalized advice.
        </p>

        <div className="border mt-12 border-gray-200 rounded-xl p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-8">
          {/* Support Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <p className="uppercase tracking-wider text-gray-400 text-xs mb-1">Email</p>
              <p>support@lessentiel.com</p>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-400 text-xs mb-1">Phone</p>
              <p>+91 90000 00000</p>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="text-center py-16">
              <p className="text-lg font-medium">Thank you!</p>
              <p className="text-sm text-gray-600 mt-2">
                Your message has been sent. Our team will contact you shortly.
              </p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border px-3 py-2 rounded-md"
                required
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                className="border px-3 py-2 rounded-md"
                required
              />
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="border px-3 py-2 rounded-md sm:col-span-2"
                required
              />
              <input
                name="orderId"
                value={form.orderId}
                onChange={handleChange}
                placeholder="Order ID (optional)"
                className="border px-3 py-2 rounded-md sm:col-span-2"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="border px-3 py-2 rounded-md sm:col-span-2 resize-none"
                required
              />
              <button
                disabled={sending}
                className="sm:col-span-2 mt-4 px-6 py-2 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
