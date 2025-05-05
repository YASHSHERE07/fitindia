import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import diets from "../assets/diets.json";
import {
  FiHeart,
  FiShoppingCart,
  FiDownload,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
  FiStar,
  FiClock,
  FiLock,
  FiBookOpen,
  FiGift,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";

// Vegetarian Images
import veg1 from "../assets/gallery/food.webp";
import veg2 from "../assets/gallery/food.webp";
import veg3 from "../assets/gallery/food.webp";
import veg4 from "../assets/gallery/food.webp";
import veg5 from "../assets/gallery/food.webp";
import veg6 from "../assets/gallery/food.webp";
import veg7 from "../assets/gallery/food.webp";

// Non-Vegetarian Images
import nonveg1 from "../assets/gallery/food.webp";
import nonveg2 from "../assets/gallery/food.webp";
import nonveg3 from "../assets/gallery/food.webp";
import nonveg4 from "../assets/gallery/food.webp";
import nonveg5 from "../assets/gallery/food.webp";
import nonveg6 from "../assets/gallery/food.webp";
import nonveg7 from "../assets/gallery/food.webp";

// Combined Images
import combo1 from "../assets/gallery/food.webp";
import combo2 from "../assets/gallery/food.webp";
import combo3 from "../assets/gallery/food.webp";
import combo4 from "../assets/gallery/food.webp";
import combo5 from "../assets/gallery/food.webp";
import combo6 from "../assets/gallery/food.webp";
import combo7 from "../assets/gallery/food.webp";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const match = diets.find((item) => item.id === id);
    setProduct(match || null);

    if (id === "vegetarian") {
      setGalleryImages([veg1, veg2, veg3, veg4, veg5, veg6, veg7]);
    } else if (id === "non-vegetarian") {
      setGalleryImages([
        nonveg1,
        nonveg2,
        nonveg3,
        nonveg4,
        nonveg5,
        nonveg6,
        nonveg7,
      ]);
    } else if (id === "combined") {
      setGalleryImages([
        combo1,
        combo2,
        combo3,
        combo4,
        combo5,
        combo6,
        combo7,
      ]);
    }

    setLoading(false);
  }, [id]);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  if (loading) return <p className="text-center py-10">Loading product...</p>;
  if (!product)
    return <p className="text-center text-red-500">Product not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-rose-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://img.freepik.com/free-photo/black-concrete-wall_53876-92803.jpg')]"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-rose-600/20 to-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Immersive Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Hover-Interactive Gallery */}
          <div className="group relative h-[700px] rounded-[48px] overflow-hidden shadow-2xl border-2 border-white/10 transform hover:scale-[0.99] transition-all duration-500 cursor-grab active:cursor-grabbing">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
            <img
              src={galleryImages[currentImage]}
              alt={`Preview ${currentImage + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Metadata */}
            <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-sm p-4 rounded-2xl">
              <h2 className="text-2xl font-bold text-white">{product.title}</h2>
              <p className="text-rose-200">{product.tagline}</p>
            </div>

            {/* Dynamic Progress Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "bg-rose-600 w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Hover-Reveal Navigation */}
            <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImage}
                className="bg-black/40 backdrop-blur-lg p-4 rounded-full hover:bg-black/60 transition-colors"
              >
                <FiChevronLeft className="w-8 h-8 text-rose-100" />
              </button>
              <button
                onClick={nextImage}
                className="bg-black/40 backdrop-blur-lg p-4 rounded-full hover:bg-black/60 transition-colors"
              >
                <FiChevronRight className="w-8 h-8 text-rose-100" />
              </button>
            </div>
          </div>

          {/* Floating Purchase Card */}
          <div className="sticky top-24 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[48px] p-10 shadow-2xl border-2 border-white/5 backdrop-blur-xl">
            <div className="space-y-10">
              {/* Animated Price Display */}
              <span className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                {product.title}
              </span>
              <p className="text-zinc-400 text-lg">{product.tagline}</p>

              <div className="bg-gradient-to-r from-rose-700 to-purple-700 p-1 rounded-2xl inline-block">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <div className="flex items-end gap-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                      ₹299
                    </span>
                    <span className="text-zinc-400 line-through pb-1">
                      ₹600
                    </span>
                    <span className="ml-auto bg-rose-600/30 text-rose-300 px-4 py-1 rounded-full text-sm">
                      50% OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover-Enhanced Actions */}
              <div className="space-y-6">
                <button className="w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white py-6 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 transition-all hover:shadow-rose-500/30 shadow-lg">
                  <FiShoppingCart className="w-8 h-8 animate-bounce-horizontal" />
                  Instant Digital Access
                </button>
              </div>

              {/* Dynamic Bonus Reveal */}
              {product.bonus && (
                <div className="mt-8 p-6 bg-zinc-800/50 rounded-xl border-2 border-zinc-700/50 hover:border-rose-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-rose-600 to-purple-600 p-3 rounded-xl">
                      <FiGift className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-200 mb-2">
                        Premium Bonuses Included
                      </h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {product.bonus}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Parallax Content Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Feature Grid */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[48px] p-10 border-2 border-white/5">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-8">
                Inside the Book
              </h2>
              <div className="grid gap-6">
                {(product.features || []).map((feature, i) => (
                  <div
                    key={i}
                    className="p-6 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl border-2 border-zinc-700/50 hover:border-rose-500/30 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-rose-600 to-purple-600 p-2 rounded-lg">
                        <FiCheck className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-zinc-300 text-lg">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapter Explorer */}
            {product.sections?.length > 0 && (
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[48px] p-10 border-2 border-white/5">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent mb-8">
                  Chapter Breakdown
                </h2>
                <div className="grid gap-4">
                  {product.sections.map((section, i) => (
                    <div
                      key={i}
                      className="p-6 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl border-2 border-zinc-700/50 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 bg-gradient-to-r from-purple-600 to-rose-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                          {i + 1}
                        </span>
                        <span className="text-zinc-300 text-lg">{section}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Value Proposition Showcase */}
          <div className="bg-gradient-to-br from-zinc-900 to-rose-900/20 rounded-[48px] p-10 border-2 border-rose-500/20 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-rose-300 mb-10">
              Why This Edition?
            </h2>
            <div className="space-y-8">
              {(product.why_this_book || []).map((point, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 flex items-start gap-6">
                    <div className="bg-gradient-to-r from-rose-600 to-purple-600 p-3 rounded-xl">
                      <FiStar className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Metadata Footer */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-xl px-8 py-4 rounded-full border-2 border-white/5 shadow-2xl flex gap-8 items-center">
          <div className="flex items-center gap-4">
            <FiClock className="w-6 h-6 text-rose-400" />
            <span className="text-zinc-300">Instant Digital Delivery</span>
          </div>
          <div className="h-6 w-px bg-zinc-700" />
          <div className="flex items-center gap-4">
            <FiLock className="w-6 h-6 text-purple-400" />
            <span className="text-zinc-300">Secure Payment Gateway</span>
          </div>
          <div className="h-6 w-px bg-zinc-700" />
          <div className="flex items-center gap-4">
            <FiBookOpen className="w-6 h-6 text-rose-400" />
            <span className="text-zinc-300">Regular Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;
