import React from "react";
import close from "../assets/close 1.png";
import Image from "next/dist/client/image";
import Tanimore from "../assets/tanimore.png";
import Actor from "../assets/actor.png";

export default function ClientSaySection() {
  return (
    <section className="lg:px-48 md:px-20 px-5 mb-36">
      <div className="container md:flex items-center justify-around mb-5">
        <div className="md:w-3/12 w-full text-center">
          <Image src={close} layout="fixed" className={"image"} />
        </div>
        <div className="md:w-7/12 w-full text-center">
          <h1 className="md:text-4xl text-2xl font-bold lg:mb-7 mb-3">
            Apa Kata Client
          </h1>
          <p className="text-sm font-semibold lg:pr-28">
            Kami mendengarkan masukan dan apresiasi dari client kami di seluruh
            dunia yang telah percaya terhadap kami
          </p>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="lg:w-5/12 w-full">
          <Image src={Tanimore} layout="fixed" className={"image"} />
          <p className="text-base text-slate-600 font-semibold opacity-70 leading-relaxed mb-10">
            Finmod sangat membantu kami untuk menyiapkan laporan Financial Model
            secara mudah dan lengkap yang dibutuhkan untuk fase Fundraising kami
            kepada para calon investor di perusahaan kami.
          </p>
          <h2 className="text-2xl font-bold">Ardiansyah</h2>
          <p className="text-base text-slate-600 font-semibold opacity-70">
            CEO, Tanimore
          </p>
        </div>
        <div className="lg:w-5/12 w-full text-center">
          <Image src={Actor} layout="fixed" className={"image"} />
        </div>
      </div>
    </section>
  );
}
