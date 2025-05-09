import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiX,
  FiArrowRight,
  FiCheck,
  FiDownload,
  FiBook,
  FiPieChart,
} from "react-icons/fi";

const BuyPopup = ({ show, onClose, productId }) => {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden border border-zinc-800">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-900/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-900/20 rounded-full blur-xl"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-300 hover:text-red-400 transition-colors p-1"
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-5">
            <div className="bg-gradient-to-r from-teal-500 to-purple-600 p-3 rounded-full shadow-glow">
              <div className="bg-zinc-900 text-teal-400 p-2 rounded-full border border-teal-500/30">
                <FiCheck className="w-6 h-6" />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-white mb-3">
            🎁 Exclusive Offer Just for You!
          </h2>

          <p className="text-zinc-300 text-center mb-6 leading-relaxed">
            Unlock your{" "}
            <span className="font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              personalized recipe book
            </span>{" "}
            — packed with delicious, goal-based meals to fuel fat loss and
            energy.
          </p>

          {/* Features list */}
          <div className="mb-6 space-y-4">
            <div className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-teal-500/50 transition-all">
              <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-700">
                <FiBook className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100">
                  Exclusive Cookbook Access
                </h3>
                <p className="text-sm text-zinc-400">
                  25+ high-protein, Indian-inspired meals (veg/non-veg/vegan
                  options)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-purple-500/50 transition-all">
              <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-700">
                <FiPieChart className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100">
                  Smart Portioning Blueprint
                </h3>
                <p className="text-sm text-zinc-400">
                  Plug-and-play template to structure every meal with confidence
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-blue-500/50 transition-all">
              <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-700">
                <FiDownload className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100">
                  Instant Digital Delivery
                </h3>
                <p className="text-sm text-zinc-400">
                  Start within minutes — no shipping, no delay
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4">
            <button
              onClick={() => {
                navigate(`/product/${productId}`);
                onClose();
              }}
              className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-500 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              View My Custom Plan
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400">
            <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPopup;
