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

import vegImage from "../assets/gallery/1veg.png";
import nonVegImage from "../assets/gallery/1non.png";
import veganImage from "../assets/gallery/1vegan.png";
import veganVegImage from "../assets/gallery/2veg (2).png";
import vegNonvegImage from "../assets/gallery/1vegnon.png";
import allComboImage from "../assets/gallery/3all.png";

const staticProducts = [
  {
    id: "vegan",
    title: "25 Vegan Recipes : The Vegan Muscle Kitchen",
    tagline: "Plant-powered meals to fuel your fitness.",
    description:
      "Unlock the power of plants with 25 high-protein vegan meals designed to fuel fat loss without ever feeling deprived. This isn't another salad book — it`s your go-to guide for nutrient-dense, satisfying, and fitness-focused dishes that support weight loss and keep your energy high.",
    image: veganImage,
  },
  {
    id: "vegetarian",
    title: "25 Vegetarian Recipes : The High-Protein Indian Veg Cookbook",
    tagline: "Shred smart with satisfying vegetarian recipes.",
    description:
      "Ready to lose weight without giving up your love for wholesome Indian meals? This book brings you 25 carefully crafted vegetarian recipes packed with protein, fiber, and clean carbs — perfect for cutting fat while staying energized and satisfied.",
    image: vegImage,
  },
  {
    id: "nonvegetarian",
    title: "25 Non-Vegetarian Recipes : Protein First Fit Life",
    tagline: "Build lean muscle and burn fat — one delicious meal at a time.",
    description:
      "Fuel your fat-loss journey with clean, protein-packed meals made for results — not excuses. This cookbook delivers 25 expertly crafted non-vegetarian recipes using chicken, fish, and eggs to help you cut weight, preserve muscle, and stay satisfied.",
    image: nonVegImage,
  },
  {
    id: "vegan-vegetarian",
    title:
      "25 Vegan Recipes + 25 Vegetarian Recipes Combo :The Lean Plant Kitchen",
    tagline: "Vegan + vegetarian meals for fat loss and fullness.",
    description:
      "Discover the power of plant-based eating — optimized for fat loss. The Lean Plant Kitchen brings you 50 clean, protein-rich meals split evenly between vegan and vegetarian options. Whether you’re going fully plant-based or adding variety to your cut, this book delivers the flavor, macros, and satisfaction you need.",
    image: veganVegImage,
  },

  {
    id: "vegetarian-nonvegetarian",
    title:
      "25 Vegetarian Recipes + 25 Non-Vegetarian Recipes Combo :The Dual Fuel Kitchen",
    tagline:
      "High-protein vegetarian + non-veg meals to shred fat and stay full.",
    description:
      "Cut fat your way — with or without meat. The Dual Fuel Kitchen is the ultimate fat-loss cookbook combining 25 vegetarian and 25 non-vegetarian recipes, all built around high protein, clean ingredients, and real results. Whether you’re a meat-eater, a paneer-lover, or somewhere in between — this book fuels your cut without compromise.",
    image: vegNonvegImage,
  },
  {
    id: "vegan-vegetarian-nonvegetarian",
    title:
      "25 Vegan + 25 Vegetarian Recipes + 25 Non-Vegetarian The Triple Burn Kitchen",
    tagline:
      "High-protein vegan, vegetarian, and non-veg meals to fuel fat loss..",
    description:
      "One goal, three ways to get there — fat loss through clean, powerful meals. The Triple Burn Kitchen gives you 75 macro-optimized recipes across vegan, vegetarian, and non-vegetarian diets. Whether you're meat-free, plant-curious, or protein-focused, this is your ultimate guide to shredding fat without sacrificing satisfaction.",
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
    <div className="min-h-screen  bg-gradient-to-br from-zinc-950 to-rose-950 py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://img.freepik.com/free-photo/black-concrete-wall_53876-92803.jpg')]" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-rose-600/20 to-purple-600/20 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl uppercase font-bold text-center mb-16 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent md:text-5xl">
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
                  className="w-full h-full object-fil transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20 " />

                <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                  {product.id.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
                  {product.title}
                </h2>
                <h2 className="text-xl font-semibold  bg-rose-500  bg-clip-text text-transparent">
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
            Trusted by many worldwide
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
