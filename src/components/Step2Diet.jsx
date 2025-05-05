import React from "react";
import ProgressBar from "./ProgressBar";
import foodImage from "../assets/food.webp";

const Step2Diet = ({ onNext }) => {
  const colors = {
    primary: "#FF6B6B", // Vibrant coral
    secondary: "#4ECDC4", // Soft turquoise
    accent: "#45B7D1", // Deep sky blue
    lightBg: "#E4EFE7", // Very light blue-gray bg
    textDark: "#2E3A59", // Dark blue-gray for text
    textMedium: "#5A677D", // Medium gray-blue
    border: "#E0E6ED", // Light border
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-neutral-700">
      <div className="fixed inset-0 z-0 opacity-5">
        <img
          src={foodImage}
          alt="Decorative food background"
          className="w-full h-full object-cover object-center"
        />
      </div>{" "}
      {/* Main card */}
      <div className="w-full max-w-md relative z-10 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        {/* Progress bar */}
        <div className="px-8 pt-8">
          <ProgressBar step={2} />
        </div>

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Select Your{" "}
              <span
                style={{
                  background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                Diet Style
              </span>
            </h2>
            <p className="text-gray-600 font-light">
              Choose the option that aligns with your nutritional preferences
            </p>
          </div>

          {/* Diet options */}
          <div className="space-y-5">
            {/* Vegetarian option */}
            <button
              onClick={() => onNext("vegetarian")}
              className="w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 group hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-center">
                <div className="p-3 mr-4 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-all">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Vegetarian
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Plant-powered meals with dairy
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 text-sm font-medium mr-2 group-hover:mr-0 transition-all">
                  Select
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>

            {/* Non-Vegetarian option */}
            <button
              onClick={() => onNext("nonVegetarian")}
              className="w-full flex items-center justify-between p-5 rounded-xl transition-all duration-300 group hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
            >
              <div className="flex items-center">
                <div className="p-3 mr-4 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-all">
                  <span className="text-2xl">🍖</span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Non-Vegetarian
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Includes meat, fish, and poultry
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 text-sm font-medium mr-2 group-hover:mr-0 transition-all">
                  Select
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Decorative footer */}
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Step2Diet;
