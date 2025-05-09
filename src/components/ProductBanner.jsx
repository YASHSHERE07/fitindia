import React from "react";
import { Link } from "react-router-dom";
import { FiZap, FiArrowRight, FiCheck, FiLock, FiMail } from "react-icons/fi";

const ProductBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 px-6 py-12 md:px-12 md:py-20 rounded-[40px] shadow-2xl max-w-6xl mx-auto my-20 overflow-hidden isolate">
      {/* Animated background elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#334155_0.5px,transparent_1px)] bg-[length:24px_24px] opacity-10" />

      <div className="relative z-10 text-center space-y-8">
        {/* Heading group */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Your Body's Blueprint
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Precision-engineered nutrition plans for every lifestyle.
            <span className="block mt-2 text-emerald-300/80">
              Vegetarian • Non-Veg • Vegan
            </span>
          </p>
        </div>

        {/* Diet cards grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              id: "vegetarian",
              title: "Plant-Powered",
              gradient: "from-emerald-500 to-teal-600",
              icon: <FiZap className="w-6 h-6" />,
              desc: "Vibrant veggie-focused meals",
            },
            {
              id: "nonvegetarian",
              title: "Protein Rich",
              gradient: "from-rose-500 to-pink-600",
              icon: <FiZap className="w-6 h-6" />,
              desc: "Lean meat & balanced nutrition",
            },
            {
              id: "vegan",
              title: "Earth Friendly",
              gradient: "from-amber-400 to-orange-500",
              icon: <FiZap className="w-6 h-6" />,
              desc: "100% plant-based goodness",
            },
          ].map((plan) => (
            <Link
              key={plan.id}
              to={`/product/${plan.id}`}
              className={`group relative bg-gradient-to-br ${plan.gradient} p-px rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="bg-zinc-900 rounded-2xl p-6 h-full">
                <div className="mb-4 text-white/80 group-hover:text-white transition-colors">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-zinc-300 text-sm mb-4">{plan.desc}</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300">
                  Explore Plans
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 text-zinc-400 text-sm">
          <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700">
            <FiLock className="w-4 h-4 text-emerald-400" />
            Secure Checkout
          </div>
          <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700">
            <FiMail className="w-4 h-4 text-rose-400" />
            Instant Delivery
          </div>
          <div className="flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700">
            <FiCheck className="w-4 h-4 text-amber-400" />
            No Subscriptions
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
