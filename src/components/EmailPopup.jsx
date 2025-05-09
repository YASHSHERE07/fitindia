import React, { useState } from "react";
import { FiX, FiMail, FiSend } from "react-icons/fi";

const EmailPopup = ({ show, onClose, onSend }) => {
  const [email, setEmail] = useState("");

  if (!show) return null;

  const handleSubmit = () => {
    if (!email.includes("@")) return alert("Enter a valid email address");
    onSend(email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl border border-teal-600 w-full max-w-md relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-red-400"
        >
          <FiX className="w-6 h-6" />
        </button>
        <h2 className="text-2xl text-white font-bold mb-4 text-center">
          Get Your Plan via Email
        </h2>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">
            Enter your email address:
          </label>
          <div className="flex items-center bg-zinc-800 rounded-lg p-2">
            <FiMail className="text-teal-400 mr-2" />
            <input
              type="email"
              className="w-full bg-transparent outline-none text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-teal-500 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
        >
          <FiSend className="w-5 h-5" /> Send PDF
        </button>
      </div>
    </div>
  );
};

export default EmailPopup;
