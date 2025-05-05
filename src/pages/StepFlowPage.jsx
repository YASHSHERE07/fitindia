// src/pages/StepFlowPage.jsx
import React, { useState } from "react";
import Step1Form from "../components/Step1Form";
import Step2Diet from "../components/Step2Diet";
import Step3Result from "../components/Step3Result";

const StepFlowPage = () => {
  const [step, setStep] = useState(1);
  const [userProfile, setUserProfile] = useState({});
  const [dietType, setDietType] = useState("");

  const handleStep1Submit = (data) => {
    setUserProfile(data);
    setStep(2);
  };

  const handleStep2Submit = (type) => {
    setDietType(type);
    setStep(3);
  };

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto">
        {step === 1 && <Step1Form onNext={handleStep1Submit} />}
        {step === 2 && <Step2Diet onNext={handleStep2Submit} />}
        {step === 3 && (
          <Step3Result userProfile={userProfile} dietType={dietType} />
        )}
      </div>
    </div>
  );
};

export default StepFlowPage;
