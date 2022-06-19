import Image from "next/image";
import React from "react";
import IcFb from "../assets/Facebook icon.png";
import IcIg from "../assets/Instagram icon.png";
import IcLinkedIn from "../assets/linkedin icon.png";

export default function Footer() {
  return (
    <footer className="py-24 px-36">
      <div className="flex gap-5 justify-between mb-20">
        <div className="w-4/12">
          <h1 className="text-5xl text-light-blue font-bold mb-5">Finmod.id</h1>
          <p className="text-base text-slate-600 font-semibold opacity-70 mb-5">
            Platform penilaian online untuk startup dan UMKM. Ini lebih cepat
            dan lebih hemat biaya daripada cara tradisional.
          </p>
          <div className="flex gap-3">
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
        </div>
        <div className="flex flex-col gap-5">
          <b className="text-2xl">Finmod</b>
          <p className="text-base text-slate-600 font-semibold opacity-70">
            about
          </p>
          <p className="text-base text-slate-600 font-semibold opacity-70">
            Price
          </p>
          <p className="text-base text-slate-600 font-semibold opacity-70">
            about
          </p>
          <p className="text-base text-slate-600 font-semibold opacity-70">
            Contact
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <b className="text-2xl">Product</b>
          <p className="text-base text-slate-600 font-semibold opacity-70">
            Laporan Penilaian
          </p>
          <p className="text-base text-slate-600 font-semibold opacity-70">
            Metode
          </p>
          <p className="text-base text-slate-600 font-semibold opacity-70">
            Akurasi Data
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-base text-slate-600 font-semibold opacity-70">
          All Rights Reserved @2022
        </p>
      </div>
    </footer>
  );
}
