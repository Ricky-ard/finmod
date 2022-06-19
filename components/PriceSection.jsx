import React from "react";
import BigButton from "./BigButton";
import PriceItem from "./PriceItem";

export default function PriceSection() {
  return (
    <section className="px-36">
      <div className="flex justify-between mb-20">
        <div className="flex items-center w-2/12">
          <div className="py-3 px-10 bg-light-blue text-white-bone rounded-l-lg font-semibold inline-block">
            Yearly
          </div>
          <div className="py-3 px-10 bg-white-bone rounded-r-lg font-semibold inline-block">
            Monthly
          </div>
        </div>
        <div className="w-7/12 text-6xl font-semibold">
          Penilain yang tepat untuk rencana kedepan
        </div>
      </div>
      <div className="flex justify-center gap-9">
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
