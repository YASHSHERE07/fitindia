import React from "react";

const PlanDownload = ({ downloadPdf }) => {
  return (
    <div className="text-center pb-12">
      <button
        onClick={downloadPdf}
        className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl group hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {/* Animated elements */}
        <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-500 ease-out"></span>
        <span className="absolute inset-0 w-full h-full border-2 border-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-out"></span>

        {/* Button content */}
        <span className="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span className="font-semibold tracking-wide">
            Download Full Plan (PDF)
          </span>
        </span>
      </button>
      <p className="mt-4 text-gray-100 text-sm">
        Save or print your plan for easy reference
      </p>
    </div>
  );
};

export default PlanDownload;
