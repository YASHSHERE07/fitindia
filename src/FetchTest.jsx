import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const segments = [
  "FP1A",
  "FP1B",
  "FP1C",
  "FP1D",
  "FP2A",
  "FP2B",
  "FP2C",
  "FP2D",
  "FP3B",
  "FP3C",
  "FP3D",
  "FP4B",
  "FP4C",
  "FP4D",
  "FP5A",
  "FP5B",
  "FP5C",
  "FP5D",
  "FP6A",
  "FP6B",
  "FP6C",
  "FP6D",
  "FP7A",
  "FP7B",
  "FP7C",
  "FP7D",
];

const FetchTest = () => {
  const [mealPlans, setMealPlans] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAllMealPlans = async () => {
    const allPlans = {};
    setLoading(true);

    for (const segment of segments) {
      try {
        const docRef = doc(db, "nonVegetarianMealPlans", segment); // Changed collection name
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          allPlans[segment] = docSnap.data();
        } else {
          allPlans[segment] = null;
        }
      } catch (error) {
        console.error(`Error fetching ${segment}:`, error);
        allPlans[segment] = null;
      }
    }

    setMealPlans(allPlans);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllMealPlans();
  }, []);

  if (loading) return <p className="p-4">Loading all meal plans...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded shadow">
      {segments.map((segment) => {
        const plan = mealPlans[segment];

        return (
          <div key={segment} className="mb-16 border-b pb-8">
            <h1 className="text-2xl font-bold text-blue-700 mb-2">
              Meal Plan: {segment}
            </h1>
            {!plan ? (
              <p className="text-red-500">Meal plan not found for {segment}.</p>
            ) : (
              <>
                <p className="mb-4 text-gray-700">{plan.description}</p>
                {plan.days?.map((day, index) => (
                  <div key={index} className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">
                      Day {day.day} Meals
                    </h2>
                    {Object.entries(day.meals).map(([mealTime, meal]) => (
                      <div key={mealTime} className="mb-3 border-b pb-2">
                        <h3 className="font-bold capitalize">{mealTime}</h3>
                        <p className="italic">{meal.name}</p>
                        <ul className="list-disc ml-6">
                          {meal.items.map((item, idx) => (
                            <li key={idx}>
                              {item.item} – {item.amount}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm mt-1 text-gray-500 italic">
                          {meal.note}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FetchTest;
