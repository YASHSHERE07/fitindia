import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      {[1, 2, 3].map((i) => (
        <React.Fragment key={i}>
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              i <= step
                ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {i}
          </div>
          {i < 3 && (
            <div
              className={`flex-1 h-1 mx-2 ${
                i < step ? "bg-purple-500" : "bg-gray-200"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
