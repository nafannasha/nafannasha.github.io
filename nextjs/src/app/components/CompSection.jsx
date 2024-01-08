import React, { useState } from "react";

const CompSection = (props) => {
  const [fullWidth, toggleWidth] = useState(false);

  const handleToggle = () => {
    toggleWidth(!fullWidth);
  };

  return (
    <>
      <div
        className={
          fullWidth == true ? "w-full" : "mx-auto max-w-screen-lg px-6 lg:px-16"
        }
      >
        <div className="flex flex-wrap justify-between items-center my-20">
          <h1 className="text-4xl font-bold mb-4">{props.sectionTitle}</h1>
          <button
            onClick={handleToggle}
            className={
              "text-sm rounded-lg px-4 py-2 mb-4" +
              " " +
              (fullWidth == true
                ? "bg-white ring-2 ring-green-300 ring-inset "
                : "bg-gray-200 text-gray-400")
            }
          >
            Full width: {fullWidth == true ? "On" : "Off"}
          </button>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default CompSection;
