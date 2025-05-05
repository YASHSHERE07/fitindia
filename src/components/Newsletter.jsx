import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="relative bg-white border border-gray-200 px-8 py-10 rounded-3xl shadow-2xl max-w-4xl mx-auto my-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-400 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-neutral-900 tracking-tight">
          <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            ZenMacros Elite Nutrition
          </span>
        </h2>
        <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
          🍏  Meal plans • 🏋️‍♂️ Fitness tips • 🧠 Mindful eating
          guides
        </p>

        <div className="bg-neutral-50 border border-gray-200 p-6 rounded-xl mb-8">
          <p className="text-teal-600 font-medium mb-3 flex items-center justify-center">
            <span className="mr-2">✨</span> SUBSCRIBER BENEFITS:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {[
              " Meal Plans",
              "Macro Calculator",
              "Workout Guides",
              "Exclusive Recipes",
              "10 Recipes as Joining bonus ",
              "Community Access",
            ].map((item, index) => (
              <div key={index} className="flex items-center text-neutral-700">
                <span className="text-teal-500 mr-2">✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex  justify-center items-center gap-4">
          <Link to="/news-letter">
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-teal-500/20 whitespace-nowrap">
              Get Instant Access →
            </button>
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          🔒 We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
