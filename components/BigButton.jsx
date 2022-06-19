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
      className={`px-8 py-3  font-lg text-lg inline-block  ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
