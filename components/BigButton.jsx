import React from "react";

export default function BigButton({ className, variant, children }) {
  const addClassName = className ? ` ${className}` : "";

  const variants = {
    outline: `text-slate-600 border-2 border-slate-600 opacity-70 border-opacity-70 `,
    fill: `text-white bg-light-blue`,
    fillWhite: `text-light-blue bg-white`,
    fillDark: `text-white bg-dark-blue`,
  };

  const pickedVariant = variants[variant];

  return (
    <a
      className={`px-8 py-3 rounded-md font-lg text-lg inline-block ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
