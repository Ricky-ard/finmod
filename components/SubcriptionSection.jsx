import React from "react";
import BigButton from "./BigButton";

export default function SubcriptionSection() {
  return (
    <section>
      <div
        className="lg:h-[450px] md:h-[399px] h-200 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url("/Bg-subcription.png")`,
        }}
      >
        <div className=" lg:w-5/12 md:w-7/12 w-full px-7 mx-auto py-20">
          <div className="text-center  ">
            <h1 className="text-4xl text-white font-semibold mb-8">
              Mau Coba Gratis?
            </h1>
            <p className="text-base text-white font-semibold opacity-70 mb-16">
              Kalian bisa mencoba gratis terlebih dahulu selama 7 hari untuk
              melihat dan memahami apa yang kita lakukan dalam menilai
              perusahaan dengan menginput email yang akan dijadikan akun.
            </p>
            <div className="flex text-left">
              <input
                className="shadow appearance-none border rounded-l-md w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                id="username"
                type="text"
                placeholder="Email Address"
              />
              <BigButton variant="red" className={"rounded-r-md"}>
                Submit
              </BigButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
