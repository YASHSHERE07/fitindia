import React, { useState } from "react";
import { getMealPlanTemplate } from "../utils/segmentation";

const SegmentationForm = ({ onSubmit }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);
    if (!parsedHeight || !parsedWeight) {
      setError("Please enter valid numbers for both height and weight.");
      return;
    }
    const userProfile = { height: parsedHeight, weight: parsedWeight };
    const template = getMealPlanTemplate(userProfile);
    onSubmit({ userProfile, template });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow rounded"
    >
      <h2 className="text-2xl mb-4">Enter Your Details</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label className="block text-gray-700">
          Height (in feet, e.g., 5.5):
        </label>
        <input
          type="number"
          step="0.01"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 p-2 border w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 p-2 border w-full rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Get Meal Plan
      </button>
    </form>
  );
};

export default SegmentationForm;
