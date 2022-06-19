import React from "react";
import BigButton from "./BigButton";

export default function PriceItem({
  text1,
  price,
  text2,
  text3,
  text4,
  variant,
  btnVariant,
}) {
  const variants = {
    blue: `text-white bg-light-blue border-t-8 border-y-light-blue `,
    white: `text-black bg-gray-50`,
  };
  const pickedVariant = variants[variant];

  const buttonVariants = {
    white: "fillWhite",
    blue: "fillDark",
  };
  const btnPickedVariant = buttonVariants[btnVariant];

  return (
    <>
      <div
        className={`text-center w-3/12  px-3 py-10 flex flex-col rounded-md gap-4  ${pickedVariant}`}
      >
        <p className="text-base font-semibold opacity-50">{text1}</p>
        <h1 className="text-5xl font-bold mb-5">{price}</h1>
        <p className="text-base font-semibold opacity-50">{text2}</p>
        <p className="text-base font-semibold opacity-50">{text3}</p>
        <p className="text-base font-semibold opacity-50 mb-4">{text4}</p>
        <BigButton variant={btnPickedVariant}>Get started</BigButton>
      </div>
    </>
  );
}
