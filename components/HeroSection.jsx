import React from "react";
import BigButton from "./BigButton";
import IcFb from "../assets/Facebook icon.png";
import IcIg from "../assets/Instagram icon.png";
import IcLinkedIn from "../assets/linkedin icon.png";
import Startup from "../assets/Startup.png";
import Image from "next/dist/client/image";
import Frame from "../assets/Frame 108.png";

export default function HeroSection() {
  return (
    <section>
      <div className="mb-10">
        <div
          className="lg:h-[799px] md:h-[799px] h-600 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url("/BG.png")`,
          }}
        >
          <div className="pt-36 lg:px-36 md:px-20 px-5">
            <div className="flex justify-between  ">
              <div className="w-5/12">
                <h1 className="lg:text-5xl md:text-4xl text:3xl leading-normal font-bold mb-4">
                  Ceritakan Tentang Statrup Anda
                </h1>
                <p className="md:text-base text-xs text-slate-600 font-semibold opacity-70 mb-10">
                  Kami akan membantu menganalisa dan memahami bagaimana
                  berharganya perushaan anda
                </p>
                <div className="lg:space-x-3 md:space-x-2 flex flex-wrap">
                  <BigButton variant={"outline"}>Coba Demo</BigButton>
                  <BigButton variant={"fill"}>Beli sekarang</BigButton>
                </div>
                <div className="flex items-center justify-between w-9/12">
                  <div className="lg:w-4/12 md:w-2/12 h-0.5 bg-light-blue"></div>
                  <div className="">
                    <Image src={IcFb} alt="logo" width="30px" height="30px" />
                    <Image
                      src={IcLinkedIn}
                      alt="logo"
                      width="30px"
                      height="30px"
                      className="mx-7"
                    />
                    <Image src={IcIg} alt="logo" width="30px" height="30px" />
                  </div>

                  <div className="lg:w-4/12 md:w-2/12 h-0.5 bg-light-blue"></div>
                </div>
              </div>
              <div className=" w-6/12">
                <Image
                  src={Startup}
                  alt="startup"
                  layout="responsive"
                  className={"image"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-28 absolute -z-10">
        <Image src={Frame} alt="frame" width="500px" height="250px" />
      </div>
    </section>
  );
}
