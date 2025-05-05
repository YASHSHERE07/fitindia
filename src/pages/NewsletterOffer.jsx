import React from "react";
import {
  FiCheck,
  FiZap,
  FiHeart,
  FiCalendar,
  FiDollarSign,
} from "react-icons/fi";
import nutritionBg from "../assets/news.png";
const NewsletterOffer = () => {
  return (
    <div
      className="relative min-h-screen py-12 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${nutritionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-400 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>

            <h2 className="text-3xl font-bold text-white mb-2 relative z-10">
              💌 ZenMacros Newsletter
            </h2>
            <p className="text-teal-100 text-xl relative z-10">
              Fuel Your Body. Focus Your Mind. Transform Your Life.
            </p>
          </div>

          <div className="p-6 md:p-8">
            {/* Price Tag */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-bold flex items-center shadow-md">
                <FiDollarSign className="mr-2" />
                <span className="text-2xl">5</span>
                <span className="text-sm ml-1">/month</span>
              </div>
            </div>

            {/* Main Offer */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Meal Plans */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FiHeart className="text-red-500 mr-3" />
                  Exclusive Meal Plans
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Meal Recipes Plans monthly</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Vegetarian 🥦 and Non-Vegetarian 🍗 options</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Vegan plans coming soon!</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Portion-controlled, macro-balanced recipes</span>
                  </li>
                </ul>
              </div>

              {/* Bonus */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FiZap className="text-yellow-500 mr-3" />
                  Joining Bonus
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4 border border-blue-100">
                  <p className="font-medium text-blue-800">
                    10 Chef-Crafted Recipes
                  </p>
                  <p className="text-sm text-blue-600">
                    Delivered instantly after subscribing
                  </p>
                </div>
                <p className="text-gray-700">
                  Choose your style: Veg or Non-Veg
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Simple ingredients. Tastes you'll love.
                </p>
              </div>
            </div>

            {/* Fitness Bundle */}
            <div className="bg-indigo-50 p-6 rounded-xl mb-8 border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                <FiCalendar className="text-indigo-600 mr-3" />
                Monthly Fitness Support Bundle
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Fitness Tips & Recovery Hacks",
                  "Yoga & Mobility Guides",
                  "Mental Health Focus",
                  "Equipment-Free Workout",
                  "Printable Fitness Calendar",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-xs flex items-start border border-gray-100 hover:border-indigo-200 transition-colors"
                  >
                    <FiCheck className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                More Good Stuff Coming Soon
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Vegan Plans 🌱",
                  "Meditation Scripts 🧘‍♂️",
                  "Exclusive Discounts 🛍️",
                  "Expert Q&A 🎙️",
                  "PDF Guides 📚",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4 w-full max-w-md mx-auto">
                Start Today — $5/month
              </button>
              <p className="text-gray-500 text-sm">
                Cancel anytime • No hidden fees
              </p>
            </div>

            {/* FAQs */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                FAQs
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "Can I cancel anytime?",
                    a: "Absolutely. Cancel with one click before your next billing cycle.",
                  },
                  {
                    q: "Can I switch between veg and non-veg?",
                    a: "Yes! Select your preference each month before plans are delivered.",
                  },
                  {
                    q: "What makes these plans different?",
                    a: "Made by real fitness + nutrition experts — portion-controlled, macro-aware, and delicious.",
                  },
                  {
                    q: "Is this only for weight loss?",
                    a: "Nope. Whether maintaining, gaining muscle, or optimizing energy — we tailor to your goals.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-gray-100 hover:border-teal-200 transition-colors"
                  >
                    <h4 className="font-medium text-gray-800">{faq.q}</h4>
                    <p className="text-gray-600 mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-10 text-center">
              <p className="text-xl font-medium text-gray-800 mb-4">
                Your next level is just an email away
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md mx-auto">
                Get Started — $5/month
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterOffer;
