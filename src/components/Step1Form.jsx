import React, { useState } from "react";
import foodImage from "../assets/food.webp";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import ProgressBar from "./ProgressBar";

const Step1Form = ({ onNext }) => {
  const [name, setName] = useState("abc");
  const [email, setEmail] = useState("abc@gmail.com");
  const [phone, setPhone] = useState("7769991356");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(5.5);
  const [weight, setWeight] = useState(70);

  const handleSubmit = async () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!phone.match(/^[6-9]\d{9}$/)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    const userData = {
      name,
      email,
      phone,
      age,
      height,
      weight,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "demoUsers"), userData);
      onNext(userData);
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Something went wrong. Please try again.");
    }
  };
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
    <div className="min-h-screen bg-neutral-900">
      {/* Semi-transparent food texture */}
      <div className="fixed inset-0 z-0 opacity-5">
        <img
          src={foodImage}
          alt="Decorative food background"
          className="w-full h-full object-cover object-center"
        />
      </div>{" "}
      <div className="flex items-center justify-center  min-h-screen p-6">
        <div
          className="w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-lg"
          style={{ borderColor: colors.border }}
        >
          {/* Vibrant top bar */}
          <div
            className="h-2"
            style={{
              background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
            }}
          ></div>
          <div className="relative z-10">
            <div className="p-8 md:p-10">
              <div className="mb-8">
                <ProgressBar step={1} />
              </div>

              <div className="text-center mb-10">
                <h2
                  className="text-4xl font-bold mb-3 font-serif tracking-tight"
                  style={{ color: colors.textDark }}
                >
                  Create Your{" "}
                  <span
                    style={{
                      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Personal Profile
                  </span>
                </h2>
                <p style={{ color: colors.textMedium }}>
                  We'll craft your perfect meal plan based on these details
                </p>
              </div>

              {/* Form Grid - Left Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <label
                      className="block text-sm font-medium mb-2 transition-colors"
                      style={{ color: colors.textMedium }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl transition-all placeholder-gray-400"
                      style={{
                        backgroundColor: colors.lightBg,
                        borderColor: colors.border,
                        color: colors.textDark,
                        focusBorderColor: colors.accent,
                        focusRing: `2px ${colors.secondary}`,
                      }}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label
                      className="block text-sm font-medium mb-2 transition-colors"
                      style={{ color: colors.textMedium }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl transition-all placeholder-gray-400"
                      style={{
                        backgroundColor: colors.lightBg,
                        borderColor: colors.border,
                        color: colors.textDark,
                      }}
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="group">
                    <label
                      className="block text-sm font-medium mb-2 transition-colors"
                      style={{ color: colors.textMedium }}
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl transition-all placeholder-gray-400"
                      style={{
                        backgroundColor: colors.lightBg,
                        borderColor: colors.border,
                        color: colors.textDark,
                      }}
                      placeholder="77699 91356"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Age Slider */}
                  <div className="pt-1 group">
                    <div className="flex justify-between mb-2">
                      <label
                        className="text-sm font-medium transition-colors"
                        style={{ color: colors.textMedium }}
                      >
                        Your Age
                      </label>
                      <span
                        className="text-sm font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${colors.secondary}20`, // 20% opacity
                          color: colors.accent,
                        }}
                      >
                        {age} years
                      </span>
                    </div>
                    <input
                      type="range"
                      min="18"
                      max="75"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer transition-all"
                      style={{
                        backgroundColor: colors.border,
                        thumbColor: colors.primary,
                      }}
                    />
                  </div>

                  {/* Height Slider */}
                  <div className="pt-1 group">
                    <div className="flex justify-between mb-2">
                      <label
                        className="text-sm font-medium transition-colors"
                        style={{ color: colors.textMedium }}
                      >
                        Height
                      </label>
                      <span
                        className="text-sm font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${colors.secondary}20`,
                          color: colors.accent,
                        }}
                      >
                        {Math.floor(height)}'{Math.round((height % 1) * 12)}"
                      </span>
                    </div>
                    <input
                      type="range"
                      min="4.0"
                      max="7.0"
                      step="0.01"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer transition-all"
                      style={{
                        backgroundColor: colors.border,
                        thumbColor: colors.primary,
                      }}
                    />
                  </div>

                  {/* Weight Slider */}
                  <div className="pt-1 group">
                    <div className="flex justify-between mb-2">
                      <label
                        className="text-sm font-medium transition-colors"
                        style={{ color: colors.textMedium }}
                      >
                        Weight
                      </label>
                      <span
                        className="text-sm font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${colors.secondary}20`,
                          color: colors.accent,
                        }}
                      >
                        {weight} kg
                      </span>
                    </div>
                    <input
                      type="range"
                      min="45"
                      max="140"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer transition-all"
                      style={{
                        backgroundColor: colors.border,
                        thumbColor: colors.primary,
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleSubmit}
                      className="w-full font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                      style={{
                        background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                        color: "white",
                      }}
                    >
                      <span className="relative group-hover:translate-x-1 transition-transform inline-block">
                        Continue to Step 2 →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1Form;
