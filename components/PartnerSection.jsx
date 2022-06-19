import React from "react";
import Partner from "../assets/partner.png";
import Image from "next/dist/client/image";

export default function PartnerSection() {
  return (
    <section className="lg:px-32 md:px-20 px-5 mb-40">
      <div className="md:flex justify-around items-center">
        <div className="md:w-3/12 w-full text-center md:text-left">
          <h1 className="text-4xl font-bold mb-5">Partner Kami</h1>
          <p className="font-semibold mb-10">
            Pelanggan yang menggunakan Finmod untuk menilai perusahaan mereka.
          </p>
        </div>
        <div className="md:w-9/12 w-full md:text-right text-center">
          <Image src={Partner} layout="responsive" className={"image"} />
        </div>
      </div>
    </section>
  );
}
