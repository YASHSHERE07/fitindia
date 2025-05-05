import React from "react";
import { Link } from "react-router-dom";

const ProductBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-zinc-900 to-gray-950 border border-white/10 px-10 py-14 rounded-3xl shadow-2xl max-w-5xl mx-auto my-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-20 -right-20 w-44 h-44 bg-emerald-400 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Your Diet. Your Rules.
          </span>
          <br />
          Choose Your Perfect Fit
        </h2>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          🥗 Vegetarian, 🍗 Non-Veg, 🌱 Vegan – We've crafted a plan for every
          lifestyle. Fuel your journey with science-backed recipes & clean
          nutrition.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/product/vegetarian">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-bold hover:from-emerald-400 hover:to-teal-400 transition shadow-lg">
              Shop Vegetarian
            </button>
          </Link>
          <Link to="/product/nonvegetarian">
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:from-rose-400 hover:to-pink-400 transition shadow-lg">
              Shop Non-Veg
            </button>
          </Link>
          <Link to="/product/vegan">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-orange-300 transition shadow-lg">
              Shop Vegan
            </button>
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          ✅ One-time purchase. ✉️ Instant access. 🚫 No subscriptions.
        </p>
      </div>
    </div>
  );
};

export default ProductBanner;
