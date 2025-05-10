import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import diets from "../assets/diets.json";
import {
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
  FiGift,
  FiStar,
  FiClock,
  FiLock,
  FiBookOpen,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";

// VEGAN
import vegan1 from "../assets/gallery/vegan1.png";
import vegan2 from "../assets/gallery/veg2.png";
import vegan3 from "../assets/gallery/vegan2.png";
import vegan4 from "../assets/gallery/vegan3.png";

// VEGETARIAN
import veg1 from "../assets/gallery/veg1.png";
import veg2 from "../assets/gallery/veg2.png";
import veg3 from "../assets/gallery/veg11.png";
import veg4 from "../assets/gallery/veg12.png";
import veg5 from "../assets/gallery/veg3.png";

// NON-VEGETARIAN
import nonveg1 from "../assets/gallery/non1.png";
import nonveg2 from "../assets/gallery/non2.png";
import nonveg3 from "../assets/gallery/non3.png";

// MIXED COMBOS (reusing images for now)
import vegan_veg from "../assets/gallery/vegan+veg.png";
import _vegan_veg from "../assets/gallery/2veg.png";

import vegan_non from "../assets/gallery/vegno.png";
import _vegan_non from "../assets/gallery/2vegno.png";

import combo1 from "../assets/gallery/allcombo.png";
import combo2 from "../assets/gallery/combo.png";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [section1, setSection1] = useState([]);
  const [section2, setSection2] = useState([]);
  const [section3, setSection3] = useState([]);
  useEffect(() => {
    const match = diets.find((item) => item.id === id);
    setProduct(match || null);

    // Fetch sections separately
    if (match) {
      setSection1(match.section_1 || []); // Fetch section_1
      setSection2(match.section_2 || []); // Fetch section_2
      setSection3(match.section_3 || []); // Fetch section_3
    }

    setLoading(false);
  }, [id]);

  useEffect(() => {
    const match = diets.find((item) => item.id === id);
    setProduct(match || null);

    switch (id) {
      case "vegan":
        setGalleryImages([vegan1, vegan2, vegan3, vegan4, veg5]);
        break;
      case "vegetarian":
        setGalleryImages([veg1, veg2, veg3, veg4, veg5]);
        break;
      case "nonvegetarian":
        setGalleryImages([nonveg1, nonveg2, nonveg3, veg5]);
        break;
      case "vegan-vegetarian":
        setGalleryImages([
          vegan_veg,
          _vegan_veg,
          vegan3,
          vegan4,
          veg3,
          veg4,
          veg5,
        ]);
        break;

      case "vegetarian-nonvegetarian":
        setGalleryImages([
          vegan_non,
          _vegan_non,
          veg3,
          veg4,
          nonveg2,
          nonveg3,
          veg5,
        ]);
        break;
      case "vegan-vegetarian-nonvegetarian":
        setGalleryImages([
          combo2,
          combo1,
          vegan3,
          vegan4,
          veg3,
          veg4,
          nonveg2,
          nonveg3,
          veg5,
        ]);
        break;
      default:
        setGalleryImages([combo1]);
    }

    setLoading(false);
  }, [id]);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);

  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );

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
        <div className="grid grid-cols-1 lg:grid-cols-5  sm:gap-12 px-4 sm:px-6 items-center justify-center ">
          {/* Hover-Interactive Gallery */}
          <div className=" col-span-3 sm:w-[85%] sm:mx-auto group relative h-[500px] sm:h-[500px] lg:h-[740px] rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl border border-white/10 transform hover:scale-[0.99] transition-all duration-500 cursor-grab active:cursor-grabbing">
            <div className="absolute inset-0 bg-black/80" />
            <img
              src={galleryImages[currentImage]}
              alt={`Preview ${currentImage + 1}`}
              className="w-full h-full object-fill transform group-hover:scale-105 transition-transform duration-500 p-3 rounded-[32px] sm:rounded-[48px]"
            />

            {/* Progress Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "bg-rose-600 w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImage}
                className="bg-black/40 backdrop-blur-lg p-2 sm:p-3 rounded-full hover:bg-black/60"
              >
                <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-rose-100" />
              </button>
              <button
                onClick={nextImage}
                className="bg-black/40 backdrop-blur-lg p-2 sm:p-3 rounded-full hover:bg-black/60"
              >
                <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-rose-100" />
              </button>
            </div>
          </div>

          {/* Purchase Card */}
          <div className=" col-span-2  mt-8 lg:mt-0">
            <div className="space-y-6  bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-[32px] sm:rounded-[48px] p-6 sm:p-10 shadow-2xl border border-white/10 backdrop-blur-xl">
              {/* Title and Tagline */}
              <span className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent block">
                {product.title}
              </span>
              <p className="text-zinc-400 text-base sm:text-lg">
                {product.tagline}
              </p>

              {/* Price Block */}
              <div className="bg-gradient-to-r from-rose-700 to-purple-700 p-1 rounded-2xl inline-block">
                <div className="bg-zinc-900 rounded-xl p-4 sm:p-6">
                  <div className="flex items-end gap-3">
                    <span className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                      ₹299
                    </span>
                    <span className="text-zinc-400 line-through pb-1">
                      ₹600
                    </span>
                    <span className="ml-auto bg-rose-600/30 text-rose-300 px-3 py-1 rounded-full text-xs sm:text-sm">
                      50% OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button className="w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl flex items-center justify-center gap-3 sm:gap-4 transition-all hover:shadow-rose-500/30 shadow-lg">
                  <FiShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce-horizontal" />
                  Instant Digital Access
                </button>
              </div>

              {/* Bonus Block */}
              {product.bonus && (
                <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-rose-500/30 transition-colors">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-gradient-to-r from-rose-600 to-purple-600 p-2 sm:p-3 rounded-xl">
                      <FiGift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-200 mb-1 sm:mb-2">
                        Bonuses Included
                      </h3>
                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                        Weekly Meal Planner Template (Printable & Digital){" "}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Parallax Content Sections */}
        <div className="flex flex-col gap-16">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
            {/* Features Card - Glass Morphism */}
            <div className="bg-glass bg-white/5 rounded-3xl p-8 backdrop-blur-xl border border-white/10 shadow-2xl shadow-rose-900/30">
              <div className="mb-10">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Inside the Book
                </h2>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {product.features_desc}
                </p>
              </div>

              <div className="grid gap-4">
                {product.features?.map((feature, i) => (
                  <div
                    key={i}
                    className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-rose-400/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-rose-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <FiCheck className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-zinc-200 text-lg leading-snug">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition Card - Floating Effect */}
            <div className="bg-glass bg-rose-900/20 rounded-3xl p-8 backdrop-blur-xl border border-rose-400/20 shadow-2xl shadow-rose-900/30">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-rose-300/90 mb-6">
                  Why This Edition?
                </h2>
                <p className="text-lg text-rose-100/80 leading-relaxed">
                  {product.why_this_book_desc}
                </p>
              </div>

              <div className="space-y-5">
                {product.why_this_book?.map((point, i) => (
                  <div
                    key={i}
                    className="p-5 bg-rose-900/30 rounded-xl border border-rose-400/20 hover:border-rose-400/40 transition-all group"
                  >
                    <div className="flex items-center gap-5">
                      <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-rose-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <FiStar className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-rose-100/90 text-lg leading-snug">
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chapter Grid - Modern Masonry Layout */}
          {/* Section 1 */}
          {section1.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Chapters{" "}
              </h3>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {section1.map((item, i) => (
                  <div
                    key={i}
                    className="group relative h-full p-6 bg-zinc-800/30 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-rose-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="relative flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-rose-600 text-white rounded-lg flex items-center justify-center text-lg font-bold shrink-0">
                          {item.chapterNum}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-200">
                            {item.title}
                          </h3>
                          <p className="text-sm text-purple-400/90 mt-1">
                            {item.recipeCount}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 mb-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2 */}
          {section2.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Chapters in second book{" "}
              </h3>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {section2.map((item, i) => (
                  <div
                    key={i}
                    className="group relative h-full p-6 bg-zinc-800/30 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-rose-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="relative flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-rose-600 text-white rounded-lg flex items-center justify-center text-lg font-bold shrink-0">
                          {item.chapterNum}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-200">
                            {item.title}
                          </h3>
                          <p className="text-sm text-purple-400/90 mt-1">
                            {item.recipeCount}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 mb-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {section3.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Chapters in third book
              </h3>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {section3.map((item, i) => (
                  <div
                    key={i}
                    className="group relative h-full p-6 bg-zinc-800/30 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-rose-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="relative flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-rose-600 text-white rounded-lg flex items-center justify-center text-lg font-bold shrink-0">
                          {item.chapterNum}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-200">
                            {item.title}
                          </h3>
                          <p className="text-sm text-purple-400/90 mt-1">
                            {item.recipeCount}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 mb-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Floating Metadata Footer */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-xl px-3 py-2 sm:px-6 sm:py-3 rounded-full border border-white/10 shadow-2xl flex  sm:flex-row gap-2 sm:gap-6 items-center w-[95%] max-w-xl mx-auto">
          <div className="flex items-center gap-4">
            <FiClock className="w-6 h-6 text-rose-400" />
            <span className="text-zinc-300  ">Instant Digital Delivery</span>
          </div>
          <div className=" hidden sm:flex  h-6 w-px bg-zinc-700" />
          <div className=" hidden sm:flex items-center gap-4">
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
