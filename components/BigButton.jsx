import React from "react";

export default function BigButton({ className, variant, children }) {
  const addClassName = className ? ` ${className}` : "";

  const variants = {
    outline: `text-slate-600 border-2 border-slate-600 opacity-70 border-opacity-70 `,
    fill: "text-white bg-light-blue",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      className={`px-8 py-3 rounded-md font-medium text-lg inline-block ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
