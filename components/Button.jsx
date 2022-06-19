import React from "react";

export default function Button({ className, variant, children }) {
  const addClassName = className ? ` ${className}` : "";

  const variants = {
    "outline-blue": `text-light-blue border border-light-blue`,
    blue: "text-white bg-light-blue",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      className={`px-4 py-2 rounded-full text-xs ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
