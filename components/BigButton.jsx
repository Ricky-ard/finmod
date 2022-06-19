import React from "react";

export default function BigButton({ className, variant, children }) {
  const addClassName = className ? ` ${className}` : "";

  const variants = {
    outline: `text-slate-600 border-2 border-slate-600 opacity-70 border-opacity-70 rounded-md `,
    fill: `text-white bg-light-blue rounded-md`,
    fillWhite: `text-light-blue bg-white rounded-md`,
    fillDark: `text-white bg-dark-blue rounded-md`,
    red: `text-white bg-light-red`,
  };

  const pickedVariant = variants[variant];

  return (
    <a
      className={`lg:px-8 lg:py-3 md:py-2 md:px-6 px-5 py-2 font-lg lg:text-lg md:text-base inline-block   ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
