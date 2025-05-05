import React from "react";
import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiClock,
  FiUserCheck,
  FiBookOpen,
  FiCheckCircle,
  FiZap,
  FiRefreshCw,
  FiArrowRight,
  FiGift,
} from "react-icons/fi";
import vid1 from "../assets/vid (1).gif";
import vid2 from "../assets/vid (2).gif";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-rose-950 text-gray-300 overflow-hidden">
      {/* Hero Section - Floating Layout */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 relative">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-rose-500/10 to-teal-500/10 rounded-full blur-3xl"></div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionize Your Nutrition
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl">
                AI-powered meal planning that adapts to your biology and
                lifestyle. Start with just two simple metrics.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/get-started"
                  className="px-8 py-4  bg-gradient-to-b from-green-500 to-teal-900 hover:from-green-600 hover:to-teal-600 text-white rounded-2xl font-bold text-xl  justify-center  hover:shadow-red-500/30 shadow-lg transition-all flex items-center gap-2 hover:shadow-xl hover:scale-105 animate-horizontal-bounce "
                >
                  Create My Plan
                  <FiChevronRight className="animate-pulse mt-1" />
                </Link>
              </div>
            </div>

            {/* Animated Image Container */}
            <div className="relative group hover:transform hover:scale-95 transition-all duration-500">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl "></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/5 backdrop-blur-sm">
                <img
                  src={vid1}
                  alt="Nutrition visualization"
                  className="w-full h-auto object-cover aspect-video transform group-hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Hover Cards */}
      <section className="pb-28 px-4 max-w-6xl mx-auto brder md:px-8">
        <div className="container  mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* GIF */}
            <div className="  w-full md:w-1/2">
              <img
                src={vid2}
                alt="Steps Illustration"
                className="w-full h-auto rounded-xl overflow-hidden border-2 border-white/5 backdrop-blur-sm transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Steps Grid */}
            <div className="w-full md:w-1/2  flex flex-col gap-8">
              <div className="text-center ">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                  Your Journey to Better Health
                </h2>
              </div>
              {[
                {
                  icon: <FiUserCheck size={32} />,
                  title: "Personal Profile",
                  desc: "30-second setup with height, weight & preferences",
                  color: "from-emerald-500/20 to-teal-500/20",
                },
                {
                  icon: <FiBookOpen size={32} />,
                  title: "Diet Selection",
                  desc: "Choose from vegetarian, non-veg, or vegan plans",
                  color: "from-rose-500/20 to-purple-500/20",
                },
                {
                  icon: <FiClock size={32} />,
                  title: "Weekly Plan",
                  desc: "7-day customized meal schedule with macros",
                  color: "from-amber-500/20 to-orange-500/20",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${step.color} border border-white/5 hover:border-emerald-500/30 transition-all hover:-translate-y-2 hover:shadow-xl`}
                >
                  <div className="mb-4 text-emerald-400">{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                  <div className="mt-6">
                    <FiZap className="text-emerald-400 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features - Grid Layout */}
      <section className="py-28 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                Why We're Different
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our approach combines cutting-edge science with personalized
              nutrition for real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Tailored Plans",
                desc: "Customized to your unique biology",
                icon: <FiCheckCircle className="w-8 h-8" />,
                color: "from-rose-500/10 to-purple-500/10",
              },
              {
                title: "Monthly Refresh",
                desc: "New meal ideas every 7 days",
                icon: <FiRefreshCw className="w-8 h-8" />,
                color: "from-emerald-500/10 to-teal-500/10",
              },
              {
                title: "Instant Access",
                desc: "No sign-up required",
                icon: <FiZap className="w-8 h-8" />,
                color: "from-amber-500/10 to-orange-500/10",
              },
              {
                title: "Quick Recipes",
                desc: "30-minute meals max",
                icon: <FiClock className="w-8 h-8" />,
                color: "from-blue-500/10 to-indigo-500/10",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${item.color} border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5 flex items-center justify-center text-emerald-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>

                {/* Hidden arrow that appears on hover */}
                <div className="absolute right-6 bottom-6 text-emerald-400 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <FiArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Glowing Effect */}
      <section className="py-28 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/10 to-teal-600/5 animate-[pulse_8s_ease-in-out_infinite]"></div>

        {/* Floating particle effects */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-emerald-400"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Glowing text effect */}
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              Ready for a{" "}
              <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                Health Revolution ?
              </span>
            </h2>

            {/* Subtle animated border */}
            <div className="relative inline-block mb-12">
              <p className="text-xl md:text-2xl text-gray-300 relative z-10 px-6 py-2">
                Transform your eating habits in just 3 simple steps
              </p>
              <div className="absolute inset-0 border border-emerald-500/30 rounded-full animate-[pulseBorder_4s_ease-in-out_infinite]"></div>
            </div>

            {/* 3D button with hover effects */}
            <Link
              to="/get-started"
              className="relative inline-flex items-center gap-3 px-14 py-6 text-xl font-bold text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Button base gradient */}
              <span className="absolute inset-0 bg-gradient-to-b from-green-500 to-teal-900 rounded-full group-hover:from-green-700 group-hover:to-green-900 transition-all"></span>

              {/* Button shine effect */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
                  backgroundSize: "300% 300%",
                  animation: "shine 3s infinite",
                }}
              ></span>

              {/* Button inner shadow */}
              <span className="absolute inset-0 rounded-full shadow-[inset_0_4px_12px_rgba(0,0,0,0.2)]"></span>

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey
                <FiChevronRight className="w-6 h-6 transition-all group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Decorative elements */}
            <div className="mt-16 flex justify-center space-x-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-emerald-400/50 animate-[pulse_2s_ease-in-out_infinite]"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
