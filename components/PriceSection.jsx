import React from "react";
import BigButton from "./BigButton";
import PriceItem from "./PriceItem";

export default function PriceSection() {
  return (
    <section className="lg:px-36 md:px-20 px-5 mb-20">
      <div className="lg:flex justify-between mb-20">
        <div className="flex items-center lg:w-2/12 w-full justify-center ">
          <div className="py-3 px-10 bg-light-blue text-white-bone rounded-l-lg font-semibold inline-block">
            Yearly
          </div>
          <div className="py-3 px-10 bg-white-bone rounded-r-lg font-semibold inline-block">
            Monthly
          </div>
        </div>
        <div className="lg:w-7/12 w-full lg:text-6xl text-4xl font-semibold lg:text-left text-center">
          Penilain yang tepat untuk rencana kedepan
        </div>
      </div>
      <div className="flex justify-center gap-9 flex-wrap">
        <PriceItem
          variant={"white"}
          text1="Starter"
          price="Free"
          text2="1 Perusahaan"
          text3="Penilaian 1 Bulan"
          text4="No Detail Report"
          btnVariant={"white"}
        ></PriceItem>
        <PriceItem
          variant={"blue"}
          text1="Premium"
          price="$29/month"
          text2="5 Perusahaan"
          text3="Penilaian 6 Bulan"
          text4="Detail Report"
          btnVariant={"blue"}
        ></PriceItem>
        <PriceItem
          variant={"white"}
          text1="Enterprise"
          price="$49/month"
          text2="10 Perusahaan"
          text3="Penilaian 1 Tahun"
          text4="Detail Report"
          btnVariant={"white"}
        ></PriceItem>
      </div>
    </section>
  );
}
