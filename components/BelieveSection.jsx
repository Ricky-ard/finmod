import React from "react";
import StartupMan from "../assets/Startup life-pana 2.png";
import Image from "next/dist/client/image";

export default function BelieveSection() {
  return (
    <section className="lg-px-14 px-5 mb-32">
      <div className="md:flex justify-between items-center">
        <div className="lg:w-5/12 w-full">
          <h1 className="text-4xl font-bold mb-10">
            Kami Dipercaya banyak Startup & UMKM Indonesia
          </h1>
          <p className="text-base text-slate-600 font-semibold opacity-70 mb-5">
            Sudah banyak startup indonesia yang mempercai kami sebagai platform
            penilaian online untuk perusahaan mereka, Sekarang gilliran anda
            untuk mengetahui seberapa berharganya perusahaan anda
          </p>
          <div className="flex gap-10">
            <div>
              <h1 className="text-4xl font-bold text-light-blue">130k+</h1>
              <p className="text-base text-slate-600 font-semibold opacity-70">
                Perusahaan
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-light-blue">100k+</h1>
              <p className="text-base text-slate-600 font-semibold opacity-70">
                Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 w-full">
          <Image src={StartupMan} layout="responsive" className={"image"} />
        </div>
      </div>
    </section>
  );
}
