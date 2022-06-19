import React from "react";
import Image from "next/dist/client/image";

export default function WhyUSItems({ image, title, description, variant }) {
  const variants = {
    lime: `bg-lime-100`,
    red: "bg-red-100",
    grey: "bg-gray-100",
  };

  const pickedVariant = variants[variant];

  return (
    <>
      <div className="lg:w-3/12 md:w-5/12 w-full py-14 px-6 rounded-lg text-center flex flex-col justify-center mx-auto hover:bg-white hover:shadow-2xl">
        <div
          className={`w-16 mx-auto h-16 flex items-center justify-center rounded-md mb-5 ${pickedVariant} `}
        >
          <Image src={image} alt="logo" width="30px" height="30px" />
        </div>

        <h1 className="text-lg font-bold mb-5">{title}</h1>
        <p className="text-base text-slate-600 font-semibold opacity-70 mb-5">
          {description}
        </p>
        <a className="text-dark-blue" href="#">
          Learn more
        </a>
      </div>
    </>
  );
}
