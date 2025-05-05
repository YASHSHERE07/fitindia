import React from "react";

const PlanHeader = ({ userProfile, heightDisplay, bmi }) => {
  return (
    <div className="mb-16">
      {/* Main Header */}
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-2 text-xs font-semibold tracking-wider text-emerald-300 bg-emerald-800/30 rounded-full mb-4 border border-emerald-500/30">
          YOUR PERSONALIZED NUTRITION PLAN
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Your{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Nutrition
          </span>{" "}
          Blueprint
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Precision-Fit Nutrition – Tailored Only for You.
        </p>
      </div>

      {/* User Profile Card */}
      <div className="bg-zinc-900/90 rounded-2xl shadow-2xl overflow-hidden mb-16 border border-white/5 backdrop-blur-md">
        <div className="p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Welcome,{" "}
                <span className="text-emerald-400">
                  {userProfile?.name.split(" ")[0] || "Champion"}
                </span>
              </h2>
              <p className="text-gray-400">
                Your 7-day metabolic optimization plan based on:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Height",
                  value: heightDisplay,
                },
                {
                  label: "Weight",
                  value: `${userProfile?.weight?.toFixed(1)} kg`,
                },
                {
                  label: "BMI",
                  value: bmi,
                  highlight: bmi > 25 ? "text-amber-300" : "text-emerald-300",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-800/80 p-5 rounded-xl text-center border border-zinc-700 hover:border-emerald-400/50 transition"
                >
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    {item.label}
                  </p>
                  <p
                    className={`text-lg font-bold mt-1 text-white ${
                      item.highlight || ""
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-700">
            <p className="text-gray-400 text-sm md:text-base">
              This{" "}
              <span className="font-semibold text-white">macro-optimized</span>{" "}
              plan is engineered for{" "}
              <span className="font-semibold text-white">
                effective body recomposition
              </span>{" "}
              while maintaining energy levels.
            </p>
          </div>
        </div>
      </div>

      {/* Medical Advisory */}
      <div className="bg-red-900/20 border-l-4 border-red-500 rounded-xl p-6 mb-12 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <svg
            className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h3 className="text-lg font-bold text-red-300">Medical Advisory</h3>
            <div className="mt-2 text-red-300/90 text-sm">
              <p>
                Consult your physician before beginning any nutritional program
                if you have:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Existing health conditions or allergies</li>
                <li>Are pregnant/nursing or taking medications</li>
                <li>History of eating disorders</li>
              </ul>
              <p className="mt-2 text-xs text-red-300/70">
                Adjust portions as needed – this is your personal blueprint
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanHeader;
