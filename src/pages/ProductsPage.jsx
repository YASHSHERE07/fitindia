import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiLock,
  FiClock,
  FiHeart,
  FiArrowRight,
  FiArrowLeft,
  FiArrowUp,
} from "react-icons/fi";

import vegImage from "../assets/food.webp";
import nonVegImage from "../assets/food.webp";
import veganImage from "../assets/food.webp";
import veganVegImage from "../assets/food.webp";
import veganNonvegImage from "../assets/food.webp";
import vegNonvegImage from "../assets/food.webp";
import allComboImage from "../assets/food.webp";

const staticProducts = [
  {
    id: "vegan",
    title: "Vegan Diet Book",
    tagline: "Plant-powered meals to fuel your fitness.",
    description:
      "Delicious, nutrient-rich vegan recipes for energy and wellness.",
    image: veganImage,
  },
  {
    id: "vegetarian",
    title: "Vegetarian Diet Book",
    tagline: "Pure vegetarian meals made easy.",
    description:
      "Balanced, high-protein vegetarian dishes with global and Indian flavors.",
    image: vegImage,
  },
  {
    id: "nonvegetarian",
    title: "Non-Vegetarian Diet Book",
    tagline: "Power-packed meals with chicken, fish & eggs.",
    description:
      "Lean protein-rich recipes for muscle gain, fat loss, and energy.",
    image: nonVegImage,
  },
  {
    id: "vegan-vegetarian",
    title: "Vegan + Vegetarian Combo",
    tagline: "Best of both worlds: 100% plant-based and dairy meals.",
    description:
      "A dual guide for flexible plant-based living — energize with both vegan and vegetarian recipes.",
    image: veganVegImage,
  },
  {
    id: "vegan-nonvegetarian",
    title: "Vegan + Non-Vegetarian Combo",
    tagline: "Smart variety: go meatless or meaty depending on your day.",
    description:
      "Flex between plant-powered and protein-heavy meals without compromise.",
    image: veganNonvegImage,
  },
  {
    id: "vegetarian-nonvegetarian",
    title: "Vegetarian + Non-Vegetarian Combo",
    tagline: "From lentils to lean meats — curated for results.",
    description:
      "Support all your fitness goals with the perfect vegetarian + non-veg pairing.",
    image: vegNonvegImage,
  },
  {
    id: "vegan-vegetarian-nonvegetarian",
    title: "Complete Diet Book (All Types)",
    tagline: "Vegan. Vegetarian. Non-Veg. All in one cookbook.",
    description:
      "Enjoy complete flexibility with 3-in-1 recipe options tailored to every need and lifestyle.",
    image: allComboImage,
  },
];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(staticProducts);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-rose-950 py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://img.freepik.com/free-photo/black-concrete-wall_53876-92803.jpg')]" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-rose-600/20 to-purple-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent md:text-5xl">
          Culinary Masterpiece Collections
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/5 backdrop-blur-lg transition-all duration-300 hover:border-rose-500/30 hover:shadow-rose-500/20 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

                <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                  {product.id.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
                  {product.tagline}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-6 flex justify-end">
                  <div className="p-2 bg-zinc-800/50 rounded-full group-hover:bg-rose-600/20 transition-colors">
                    <FiArrowRight className="text-gray-400 group-hover:text-rose-400 group-hover:translate-x-1 transition-all w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-r from-rose-600/30 to-purple-600/30 rounded-full blur-xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm italic">
            Trusted by 50,000+ culinary enthusiasts worldwide
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <div className="w-8 h-8 bg-rose-600/20 rounded-full flex items-center justify-center">
              <FiLock className="text-rose-400 w-4 h-4" />
            </div>
            <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center">
              <FiClock className="text-purple-400 w-4 h-4" />
            </div>
            <div className="w-8 h-8 bg-rose-600/20 rounded-full flex items-center justify-center">
              <FiHeart className="text-rose-400 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
