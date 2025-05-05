import React, { useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import jsonData from "../assets/111.json"; // Your current JSON format

const Test = () => {
  useEffect(() => {
    const upload = async () => {
      try {
        const [docId, docData] = Object.entries(jsonData)[0]; // Get FP1B and its content
        const finalData = { ...docData, id: docId }; // Add "id": "FP1B" to the object

        await setDoc(doc(db, "123Meals", docId), finalData);

        console.log(`✅ Uploaded to /123Meals/${docId}`);
      } catch (err) {
        console.error("❌ Upload error:", err);
      }
    };

    upload();
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">Uploading JSON to Firestore</h2>
      <p className="text-gray-600 text-sm">
        ID extracted from key → uploaded as document ID
      </p>
    </div>
  );
};

export default Test;
