// src/components/MealPlanDisplay.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const MealPlanDisplay = ({ template, dietType = "vegetarian" }) => {
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const ref = doc(db, `${dietType}MealPlans`, template);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setMealPlan(snap.data());
        } else {
          setMealPlan({ error: "No plan found for this segment." });
        }
      } catch {
        setMealPlan({ error: "Failed to load meal plan." });
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [template, dietType]);

  if (loading) return <p>Loading...</p>;
  if (mealPlan?.error) return <p>{mealPlan.error}</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Your Plan: {template}</h2>
      {mealPlan.days?.map((day, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Day {day.day}</h3>
          {Object.entries(day.meals).map(([mealName, meal]) => (
            <div key={mealName} className="mb-2">
              <p className="font-medium">{meal.name}</p>
              <ul className="list-disc ml-5 text-sm">
                {meal.items.map((i, ii) => (
                  <li key={ii}>
                    {i.item} – {i.amount}
                  </li>
                ))}
              </ul>
              <p className="italic text-xs">{meal.note}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MealPlanDisplay;
