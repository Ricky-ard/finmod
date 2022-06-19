import React from "react";

export default function CountrySection() {
  return (
    <section className="mb-32">
      <div
        className="lg:h-[450px] md:h-[399px] h-299 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url("/world-map.png")`,
        }}
      >
        <div className="flex justify-center">
          <div className="lg:w-5/12 w-full lg:pt-20 py-6 px-14">
            <h1 className=" text-center text-4xl font-bold mb-7">
              Di Berbagai Negara Sudah Menggunakan Finmod
            </h1>
            <p className="text-center text-base text-slate-600 font-semibold opacity-70 mb-10 px-5">
              Tidak hanya di indonesia tapi beberapa perusahaan di negara lain
              menggunakan findmod untuk mempelajari, memantau, dan mengembangkan
              penilaian perusahaan mereka
            </p>
          </div>
        </div>
        <div className="flex justify-between lg:px-60 px-5 pb-6">
          <div>
            <h1 className="md:text-3xl text-2xl font-bold">125.500</h1>
            <p>Asia</p>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-bold">500</h1>
            <p>Eropa</p>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-bold">500</h1>
            <p>Amerika</p>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-bold">3.550</h1>
            <p>Oceania</p>
          </div>
        </div>
      </div>
    </section>
  );
}
