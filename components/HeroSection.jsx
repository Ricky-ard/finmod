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
      <div className="">
        <div
          className="lg:h-[799px] md:h-[399px] h-40 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url("/BG.png")`,
          }}
        >
          <div className="pt-36 px-36">
            <div className="flex justify-between">
              <div className="w-5/12">
                <h1 className="text-5xl leading-normal font-bold mb-4">
                  Ceritakan Tentang Statrup Anda
                </h1>
                <p className="text-base text-slate-600 font-semibold opacity-70 mb-10">
                  Kami akan membantu menganalisa dan memahami bagaimana
                  berharganya perushaan anda
                </p>
                <div className="space-x-9 mb-10">
                  <BigButton variant={"outline"}>Coba Demo</BigButton>
                  <BigButton variant={"fill"}>Beli sekarang</BigButton>
                </div>
                <div className="flex items-center justify-between w-9/12">
                  <div className="w-4/12 h-0.5 bg-light-blue"></div>
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

                  <div className="w-4/12 h-0.5 bg-light-blue"></div>
                </div>
              </div>
              <div className=" w-6/12">
                <Image src={Startup} layout="responsive" className={"image"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-28">
        <Image src={Frame} layout="fixed" className={"image"} />
      </div>
    </section>
  );
}
