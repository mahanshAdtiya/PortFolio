import React from "react";

const MagicButton = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-transparent border-2 border-[#6B2F2F] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
