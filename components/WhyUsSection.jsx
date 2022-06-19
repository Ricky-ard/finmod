import React from "react";
import WhyUSItems from "./WhyUSItems";
import IcPaper from "../assets/Paper.png";
import IcMetode from "../assets/Methode.png";
import IcAccurate from "../assets/accurate.png";
import IcEdit from "../assets/Edit Square.png";
import IcDollar from "../assets/Dollar.png";

export default function WhyUsSection() {
  return (
    <section className="mb-16">
      <div className="flex justify-center">
        <div className="w-5/12">
          <h1 className=" text-center text-4xl font-bold mb-7">
            Mengapa Harus Kami
          </h1>
          <p className="text-center text-base text-slate-600 font-semibold opacity-70 mb-10 px-5">
            Karena kami memiliki beberapa keunggulan dalam menyajikan maupun
            mengola data yang telah kami dapatkan untuk penilaian perusahan
            tersebut
          </p>
        </div>
      </div>
      <div className="flex px-20 gap-28 flex-wrap">
        <WhyUSItems
          variant={"lime"}
          image={IcMetode}
          title="Metode Penilaian"
          description="Metode penilaian dilakukan dari
        berbagai sudut pandang untuk
        medapatkan hasil yang komprehensif"
        ></WhyUSItems>
        <WhyUSItems
          variant={"red"}
          image={IcPaper}
          title="Laporan Penilaian"
          description="Laporan penilaian dibuat secara
          profesional, sangat terperinci dan
          mudah untuk di download"
        ></WhyUSItems>
        <WhyUSItems
          variant={"grey"}
          image={IcMetode}
          title="Kerahasian Data"
          description="Data yang telah kami dapatkan
          dijamin kerahasiannya tidak akan
          kami menjual atau membagikannya"
        ></WhyUSItems>
        <WhyUSItems
          variant={"lime"}
          image={IcAccurate}
          title="Keakuratan Data"
          description="Sumber data disesuaikan
          berdasarkan negara dan industrinya untuk mendapatkan keakuratan"
        ></WhyUSItems>
        <WhyUSItems
          variant={"red"}
          image={IcEdit}
          title="Penyesuaian Parameter
          Penilaian"
          description="Dapat menyesuaikan Parameter
          Penilaian untuk mempermudah anda"
        ></WhyUSItems>
        <WhyUSItems
          variant={"grey"}
          image={IcDollar}
          title="Membantu Proyeksi
          Keuangan"
          description="Kami menyediakan default
          berdasarkan kinerja rata-rata
          perusahaan di industri yang sama"
        ></WhyUSItems>
      </div>
    </section>
  );
}
