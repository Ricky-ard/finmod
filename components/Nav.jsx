import React from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import Image from "next/image";
import oyo from "../assets/OYO_Logo.png";

export default function Nav() {
  return (
    <>
      <div className="fixed  w-full pb-2 px-36">
        <div className="container mx-auto mt-5 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-slate-900">Finmod.id</h1>
            <div className="w-6/12">
              <ul className="flex justify-center space-x-7 ">
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Pricing</NavItem>
                <div>
                  <ul className="flex space-x-2">
                    <li>
                      <Button
                        variant="blue"
                        className="font-bold inline-block hover:bg-opacity-0 hover:text-light-blue hover:border-light-blue hover:border hover:shadow-lg "
                      >
                        Sign in
                      </Button>
                    </li>
                    <li className="">
                      <Button
                        variant="outline-blue"
                        className="font-bold inline-block hover:bg-light-blue hover:text-white hover:shadow-lg"
                      >
                        Sign up
                      </Button>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
