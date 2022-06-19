import React from "react";
import StartupMan from "../assets/Startup life-pana 2.png";
import Image from "next/dist/client/image";

export default function BelieveSection() {
  return (
    <section className="px-10">
      <div className="flex justify-between items-center">
        <div className="w-5/12">
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
        <div className="w-5/12">
          <Image src={StartupMan} layout="responsive" className={"image"} />
        </div>
      </div>
    </section>
  );
}