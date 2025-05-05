// src/utils/segmentation.js

export const determineHeightSegment = (height) => {
  // Assume height is in decimal feet (e.g., 5.5 for 5ft 6in)
  if (height >= 4.0 && height < 4.42) return "1";
  else if (height >= 4.42 && height < 4.83) return "2";
  else if (height >= 4.83 && height < 5.25) return "3";
  else if (height >= 5.25 && height < 5.67) return "4";
  else if (height >= 5.67 && height < 6.08) return "5";
  else if (height >= 6.08 && height < 6.58) return "6";
  else if (height >= 6.58 && height <= 7.0) return "7";
  return null;
};

export const determineWeightSegment = (weight, heightSegment) => {
  // Adjusted logic for kg
  if (["1", "2"].includes(heightSegment)) {
    if (weight >= 55 && weight < 68) return "A";
    if (weight >= 68 && weight < 91) return "B";
    if (weight >= 91 && weight < 114) return "C";
    if (weight >= 114 && weight <= 136) return "D";
  } else if (heightSegment === "3" || heightSegment === "4") {
    if (weight >= 68 && weight < 91) return "B";
    if (weight >= 91 && weight < 114) return "C";
    if (weight >= 114 && weight <= 136) return "D";
  } else if (heightSegment === "5" || heightSegment === "6") {
    if (weight >= 55 && weight < 68) return "A";
    if (weight >= 91 && weight < 114) return "C";
    if (weight >= 114 && weight <= 136) return "D";
  } else if (heightSegment === "7") {
    if (weight >= 55 && weight < 68) return "A";
    if (weight >= 68 && weight < 91) return "B";
    if (weight >= 114 && weight <= 136) return "D";
  }
  return null;
};

export const getMealPlanTemplate = (userProfile) => {
  const { height, weight } = userProfile;
  const heightSeg = determineHeightSegment(height);
  const weightSeg = determineWeightSegment(weight, heightSeg);
  if (!heightSeg || !weightSeg) return "Custom Plan Required";
  return `FP${heightSeg}${weightSeg}`;
};
