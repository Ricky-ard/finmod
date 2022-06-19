import React from "react";
import Partner from "../assets/partner.png";
import Image from "next/dist/client/image";

export default function PartnerSection() {
  return (
    <section className="px-32">
      <div className="flex justify-between items-center">
        <div className="w-3/12">
          <h1 className="text-4xl font-bold mb-5">Partner Kami</h1>
          <p className="font-semibold">
            Pelanggan yang menggunakan Finmod untuk menilai perusahaan mereka.
          </p>
        </div>
        <div className="w-9/12">
          <Image src={Partner} layout="fixed" className={"image"} />
        </div>
      </div>
    </section>
  );
}
