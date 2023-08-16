import React from "react";
import Btn from "./Btn.jsx";

export default function Header() {
  return (
    <>
      <header className="sm:h-[50px] w-full font-roboto text-my-dark">
        <nav class=" bg-white w-full mt-0 h-16 sm:h-28 md:h-[50px] md:m-auto sm:grid sm:grid-rows-2 z-10 sm:justify-center top-0 fixed sm:items-center lg:w-full lg:flex lg:justify-between lg:mx-auto">
          <div className="flex items-center sm:justify-center gap-[12px] md:ml-[70px] mt-[13px]">
            <div className="mx-2 cursor-pointer h-[26px]  sm:hidden">
              <i id="icon" class="fa fa-bars fa-2x" aria-hidden="true"></i>
            </div>
            <figure
              id="logo"
              class=" w-[96px] h-[26px] mt-[7px] sm:mt-0 leading-[24px]"
            >
              <p className="font-extrabold">Eco-builders</p>
            </figure>
          </div>

          <div
            id="navigation"
            class="sm:flex text-[16x] font-bold sm:justify-center md:justify-between sm-items-center z-[-1] sm:z-auto sm:static absolute sm:top-0 w-full left-0 sm:w-[700px] md:w-full md:m-auto  pt-36 pb-64 sm:py-6 md:py-0 sm:opacity-100 h-[883px] sm:h-12 opacity-0 top-[-1000px] bg-white transition-all ease-in duration-500 cursor-pointer "
          >
            <ul className="sm:flex m-auto lg:ml-[301px] 2xl:ml-[500px] sm:w-[442px]">
              <li className="mx-4 sm:mx-4 my-8 sm:my-0 md:my-0 text-center">
                <a classNameName="hover:text-zinc-400" href="#home">
                  Home
                </a>
              </li>
              <li className="mx-4 sm:mx-4 my-8 sm:my-0 text-center">
                <a className="hover:text-zinc-400" href="#about">
                  Services
                </a>
              </li>
              <li className="mx-4 sm:mx-4 my-8 sm:my-0 text-center">
                <a className="hover:text-zinc-400" href="#faq">
                  About Us
                </a>
              </li>
              <li className="mx-4 sm:mx-4 my-8 sm:my-0 text-center">
                <a className="hover:text-zinc-400" href="#contacts">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="sm:flex mx-4 lg:ml-36 lg:mr-[70px] sm:w-[100px] my-8 sm:my-0 text-center">
              <div className="flex items-center justify-center m-auto">
                <Btn width="w-[84px]" text="Log in" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
