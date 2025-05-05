import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import PlanHeader from "./PlanHeader";
import PlanCards from "./PlanCards";
import PlanDownload from "./PlanDownload";
import BmiNotice from "./BmiNotice";
import Newsletter from "./Newsletter";
import ProgressBar from "./ProgressBar";
import ProductBanner from "./ProductBanner";

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

  const downloadPdf = () => {
    if (!mealPlan) return;

    const doc = new jsPDF();

    // Cover page
    doc.setFillColor(240, 248, 255);
    doc.rect(
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight(),
      "F"
    );

    doc.setFontSize(28);
    doc.setTextColor(30, 144, 255);
    doc.text("YOUR PERSONALIZED NUTRITION PLAN", 105, 40, { align: "center" });

    doc.setFontSize(22);
    doc.setTextColor(70, 70, 70);
    doc.text("Your Nutrition Blueprint", 105, 55, { align: "center" });

    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text("Precision-Fit Nutrition – Tailored Only for You.", 105, 65, {
      align: "center",
    });

    doc.setFontSize(18);
    doc.setTextColor(30, 144, 255);
    doc.text(`Welcome, ${userProfile?.name.split(" ")[0] || "User"}`, 20, 90);

    doc.setFontSize(14);
    doc.setTextColor(80, 80, 80);
    doc.text("Your 7-day diet plan based on:", 20, 100);

    autoTable(doc, {
      startY: 110,
      head: [["Metric", "Value"]],
      body: [
        ["Height", heightDisplay],
        ["Weight", `${userProfile?.weight} kg`],
        ["BMI", bmi],
      ],
      theme: "grid",
      headStyles: {
        fillColor: [220, 230, 240],
        textColor: [50, 50, 50],
        fontStyle: "bold",
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [70, 70, 70],
      },
      margin: { left: 20 },
    });

    doc.setTextColor(60, 179, 113);
    doc.text(
      "This macro-optimized plan is engineered for effective body recomposition",
      20,
      150
    );
    doc.text("while maintaining energy levels.", 20, 158);

    doc.setFontSize(16);
    doc.setTextColor(255, 0, 0);
    doc.text("Medical Advisory", 20, 180);

    doc.setFontSize(12);
    doc.setTextColor(200, 0, 0);
    doc.text(
      "Consult your physician before beginning any nutritional program if you have:",
      20,
      188
    );

    const medicalConditions = [
      { text: "Existing health conditions or allergies", color: [255, 0, 0] },
      {
        text: "Are pregnant/nursing or taking medications",
        color: [255, 0, 0],
      },
      { text: "History of eating disorders", color: [255, 0, 0] },
    ];

    medicalConditions.forEach((condition, i) => {
      doc.setTextColor(...condition.color);
      doc.text("• " + condition.text, 25, 198 + i * 8);
    });

    doc.setTextColor(100, 100, 100);
    doc.text(
      "Adjust portions as needed - this is your personal blueprint",
      20,
      225
    );

    // Plan pages
    doc.addPage();
    let yPosition = 40;

    mealPlan.days.forEach((day, dayIndex) => {
      if (dayIndex > 0) doc.addPage();
      if (dayIndex > 0) yPosition = 40;

      doc.setFillColor(220, 230, 240);
      doc.rect(0, 0, doc.internal.pageSize.getWidth(), 30, "F");

      doc.setFontSize(20);
      doc.setTextColor(30, 144, 255);
      doc.text(`Day ${day.day}`, 20, 20);

      doc.setFontSize(12);
      doc.setTextColor(70, 70, 70);
      doc.text(
        `Diet Type: ${
          dietType === "vegetarian" ? "Vegetarian" : "Non-vegetarian"
        }`,
        160,
        20
      );

      Object.values(day.meals).forEach((meal) => {
        doc.setFontSize(16);
        doc.setTextColor(30, 144, 255);
        doc.text(meal.name, 20, yPosition);
        yPosition += 10;

        autoTable(doc, {
          startY: yPosition,
          head: [["Food Item", "Amount"]],
          body: meal.items.map((item) => [item.item, item.amount]),
          theme: "grid",
          headStyles: {
            fillColor: [220, 230, 240],
            textColor: [50, 50, 50],
            fontStyle: "bold",
          },
          bodyStyles: {
            fillColor: [255, 255, 255],
            textColor: [70, 70, 70],
          },
          margin: { left: 20 },
        });

        yPosition = doc.lastAutoTable.finalY + 10;

        if (meal.note) {
          doc.setFontSize(10);
          doc.setTextColor(60, 179, 113);
          doc.text(`Note: ${meal.note}`, 20, yPosition);
          yPosition += 10;
        }

        yPosition += 10;
      });

      doc.setFontSize(10);
      doc.setTextColor(128, 128, 128);
      doc.text("Generated by ZenMacros Nutrition Planner", 105, 280, {
        align: "center",
      });
      doc.text(new Date().toLocaleDateString(), 105, 285, { align: "center" });
    });

    doc.save(`ZenMacros_Plan_${userProfile?.name || "User"}.pdf`);
  };

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
            <PlanDownload downloadPdf={downloadPdf} />
            <PlanCards mealPlan={mealPlan} dietType={dietType} />
            <ProductBanner />
            <PlanDownload downloadPdf={downloadPdf} />
          </>
        )}
      </div>
    </div>
  );
};

export default Step3Result;
