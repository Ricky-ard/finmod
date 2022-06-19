import Image from "next/image";
import React from "react";
import laptop from "../assets/laptop.png";
import BigButton from "./BigButton";

export default function PlatformSection() {
  return (
    <section className="px-14">
      <div className="flex items-center justify-between">
        <div className="w-5/12">
          <Image src={laptop} layout="responsive" className={"image"} />
        </div>
        <div className="w-5/12">
          <h1 className="text-4xl font-bold mb-10">
            Platform Sangat Mudah Untuk Digunakan
          </h1>
          <p className="text-base text-slate-600 font-semibold opacity-70 mb-5">
            Finmod merupakan satu - satuny platform penilain online menyeluruh
            untuk startup yang ada di indonesia dengan metode penilaian yang
            dilakukan dari berbagai sudut pandang jika diperlukan, Anda dapat
            memutuskan untuk menggunakan subset dari 5 metode yang tersedia
            untuk medapatkan hasil yang komprehensif.
          </p>
          <BigButton variant={"fill"}>Beli Sekarang</BigButton>
        </div>
      </div>
    </section>
  );
}
