import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import PlanHeader from "./PlanHeader";
import PlanCards from "./PlanCards";
import BmiNotice from "./BmiNotice";
import Newsletter from "./Newsletter";
import ProgressBar from "./ProgressBar";
import ProductBanner from "./ProductBanner";
import PdfGenerator from "./PdfGenerator";

const Step3Result = ({ userProfile, dietType }) => {
  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bmi, setBmi] = useState(null);
  const [heightDisplay, setHeightDisplay] = useState("");

  const getHeightSegment = (h) => {
    if (h >= 4.0 && h < 4.42) return "1";
    if (h >= 4.42 && h < 4.83) return "2";
    if (h >= 4.83 && h < 5.25) return "3";
    if (h >= 5.25 && h < 5.67) return "4";
    if (h >= 5.67 && h < 6.08) return "5";
    if (h >= 6.08 && h < 6.58) return "6";
    if (h >= 6.58 && h <= 7.0) return "7";
    return null;
  };

  const getWeightSegment = (w, hs) => {
    if (["1", "2"].includes(hs)) {
      if (w >= 55 && w < 68) return "A";
      if (w >= 68 && w < 91) return "B";
      if (w >= 91 && w < 114) return "C";
      if (w >= 114 && w <= 136) return "D";
    } else if (hs === "3" || hs === "4") {
      if (w >= 68 && w < 91) return "B";
      if (w >= 91 && w < 114) return "C";
      if (w >= 114 && w <= 136) return "D";
    } else if (hs === "5" || hs === "6") {
      if (w >= 55 && w < 68) return "A";
      if (w >= 91 && w < 114) return "C";
      if (w >= 114 && w <= 136) return "D";
    } else if (hs === "7") {
      if (w >= 55 && w < 68) return "A";
      if (w >= 68 && w < 91) return "B";
      if (w >= 114 && w <= 136) return "D";
    }
    return null;
  };

  useEffect(() => {
    const fetchPlan = async () => {
      const hs = getHeightSegment(userProfile.height);
      const ws = getWeightSegment(userProfile.weight, hs);
      const template = `FP${hs}${ws}`;

      try {
        const collectionName =
          dietType === "vegetarian"
            ? "vegetarianMealPlansA"
            : "nonvegetarianMealPlansB";

        const ref = doc(db, collectionName, template);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setMealPlan({ ...snap.data(), template });
        } else {
          setMealPlan({ error: "No meal plan found for your segment." });
        }
      } catch {
        setMealPlan({ error: "Something went wrong." });
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [userProfile, dietType]);

  useEffect(() => {
    if (userProfile?.height && userProfile?.weight) {
      const heightInMeters = userProfile.height * 0.3048;
      const weightInKg = userProfile.weight;
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(1));

      const totalInches = userProfile.height * 12;
      const feet = Math.floor(totalInches / 12);
      const inches = Math.round(totalInches % 12);
      setHeightDisplay(`${feet}'${inches}"`);
    }
  }, [userProfile?.height, userProfile?.weight]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-700 text-lg font-medium">
            Creating your personalized plan...
          </p>
          <p className="text-gray-500 mt-2">This won't take long</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-br from-zinc-950 to-rose-950">
      <div className="max-w-7xl mx-auto">
        <ProgressBar step={3} />
        {bmi && parseFloat(bmi) < 25 ? (
          <BmiNotice bmi={bmi} userName={userProfile?.name} />
        ) : (
          <>
            <PlanHeader
              mealPlan={mealPlan}
              userProfile={userProfile}
              heightDisplay={heightDisplay}
              bmi={bmi}
            />
            <ProductBanner />
            <PdfGenerator
              mealPlan={mealPlan}
              userProfile={userProfile}
              bmi={bmi}
              heightDisplay={heightDisplay}
              dietType={dietType}
            />
            <PlanCards mealPlan={mealPlan} dietType={dietType} />
            <ProductBanner />
            <PdfGenerator
              mealPlan={mealPlan}
              userProfile={userProfile}
              bmi={bmi}
              heightDisplay={heightDisplay}
              dietType={dietType}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Step3Result;
