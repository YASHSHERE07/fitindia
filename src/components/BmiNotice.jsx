import React from "react";
import healthyImg from "../assets/BMI (1).webp";

const BmiNotice = ({ bmi, userName, age }) => {
  const bmiValue = parseFloat(bmi);
  const name = userName?.split(" ")[0] || "User";
  const isUnderweight = bmiValue < 18.5;

  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden my-8 border-l-8 ${
        isUnderweight
          ? "bg-orange-50 border-orange-400"
          : "bg-teal-50 border-teal-400"
      }`}
    >
      <div className="p-6 md:p-8">
        {/* Header Section */}
        <div className=" items-start gap-6 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-full ${
                  isUnderweight
                    ? "bg-orange-100 text-orange-600"
                    : "bg-teal-100 text-teal-600"
                }`}
              >
                {isUnderweight ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {isUnderweight ? "Underweight Range" : "Healthy Weight Range"}
                </h2>
                <p className="text-gray-600">
                  Hi {name}, {age ? `${age} years` : ""} | BMI:{" "}
                  <span className="font-semibold">{bmiValue}</span>
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-sm max-w-none">
              {isUnderweight ? (
                <>
                  <div
                    className={`p-4 rounded-lg mb-4 ${
                      isUnderweight ? "bg-orange-100" : "bg-teal-100"
                    }`}
                  >
                    <p className="font-medium">
                      Your BMI places you in the underweight range (below 18.5).
                      This doesn't mean something's wrong, but your body might
                      need more fuel to perform at its best.
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    Your Plan Will Focus On:
                  </h3>
                  <ul className="space-y-2 mt-2">
                    {[
                      "Nutrient-dense meals for healthy weight gain",
                      "Slow, sustainable growth with quality calories",
                      "Proteins, healthy fats, and smart carbs",
                      "Gut-friendly foods for better absorption",
                      "Natural appetite boosting strategies",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span
                          className={`inline-block mr-2 mt-1 ${
                            isUnderweight ? "text-orange-500" : "text-teal-500"
                          }`}
                        >
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="font-medium text-gray-800 mb-2">
                        Health Summary
                      </h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">BMI:</span> {bmiValue}
                        </p>
                        <p>
                          <span className="font-medium">Status:</span>{" "}
                          Underweight
                        </p>
                        <p>
                          <span className="font-medium">Primary Goal:</span>{" "}
                          Gentle weight gain
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="font-medium text-gray-800 mb-2">
                        Quick Tips
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>Eat small meals more often</li>
                        <li>Add nuts, seeds, and healthy oils</li>
                        <li>Prioritize sleep and hydration</li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`mt-6 p-4 rounded-lg ${
                      isUnderweight
                        ? "bg-red-500 border border-orange-200"
                        : "bg-teal-50 border border-teal-200"
                    }`}
                  >
                    <p className="font-medium text-gray-100">
                      Your personalized 7-Day Nourishment Plan is{" "}
                      <span className="text-4xl mx-2 text-yellow-200 font-neue  ">
                        {" "}
                        COOMING SOON !!!
                      </span>
                      to help you feel fueled and full of life.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`p-4 rounded-lg mb-4 ${
                      isUnderweight ? "bg-orange-100" : "bg-teal-100"
                    }`}
                  >
                    <p className="font-medium">
                      Great news! Your BMI of {bmiValue} falls within the
                      healthy range (18.5-24.9). Let's focus on optimizing your
                      wellness.
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    Wellness Focus Areas:
                  </h3>
                  <ul className="space-y-2 mt-2">
                    {[
                      "Boosting energy through nutrient timing",
                      "Improving digestion and gut health",
                      "Enhancing mental clarity with brain foods",
                      "Supporting fitness and muscle tone",
                      "Maintaining optimal health long-term",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span
                          className={`inline-block mr-2 mt-1 ${
                            isUnderweight ? "text-orange-500" : "text-teal-500"
                          }`}
                        >
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="font-medium text-gray-800 mb-2">
                        Health Summary
                      </h4>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">BMI:</span> {bmiValue}
                        </p>
                        <p>
                          <span className="font-medium">Status:</span> Healthy
                          weight
                        </p>
                        <p>
                          <span className="font-medium">Goal Options:</span>{" "}
                          Maintain/Tone/Optimize
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border">
                      <h4 className="font-medium text-gray-800 mb-2">
                        Daily Habits
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>Stick to balanced meals</li>
                        <li>Focus on protein and fiber</li>
                        <li>Stay hydrated and active</li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`mt-6 p-4 rounded-lg ${
                      isUnderweight
                        ? "bg-red-500 border border-orange-200"
                        : "bg-red-500 border border-teal-200"
                    }`}
                  >
                    <p className="font-medium text-gray-100">
                      Your 7-Day Wellness Meal Plan is{" "}
                      <span className="text-4xl mx-2 text-yellow-200 font-neue  ">
                        {" "}
                        COOMING SOON !!!
                      </span>{" "}
                      We'll notify you when it's ready.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={healthyImg}
          alt="BMI Feedback"
          className=" h-[220px] md:h-[500px] object-cover rounded-lg shadow-md border-2 border-neutral-300 mb-5"
        />
      </div>
    </div>
  );
};

export default BmiNotice;
