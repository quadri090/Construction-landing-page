import React, {useState} from "react";
import Btn from "./Btn.jsx";


export default function Header() {

  const [navOpen, setNavOpen] = useState(false);

  function ListItems(props) {
  
    return (
      <>
        <li className="ml-[55px] sm:mx-4 my-8 sm:my-0 text-left md:text-center" onClick={() => setNavOpen(!navOpen)}>
          <a className="hover:text-zinc-400" href={`${props.href}`}>
            {props.text}
          </a>
        </li>
      </>
    )
  }

  return (
    <>
      <header className="sm:h-[50px] w-full font-roboto text-my-dark">
        <nav class=" bg-white w-full mt-0 h-16 sm:h-28 md:h-[50px] md:m-auto sm:grid sm:grid-rows-2 z-10 sm:justify-center top-0 fixed sm:items-center lg:w-full lg:flex lg:justify-between lg:mx-auto">
          <div className="flex items-center sm:justify-center gap-[12px] md:ml-[70px] mt-[13px] sm:mt-0">
            <button className="mx-2 cursor-pointer h-[26px]  sm:hidden" onClick={() => setNavOpen(!navOpen)}>
              <i id="icon" class={`fa fa-bars fa-2x ${navOpen ? "hidden" : "block"}`} aria-hidden="true"></i>
              <i class={`fa fa-times fa-2x ${navOpen ? 'block' : 'hidden'}`}></i>
            </button>
            <div
              id="logo"
              class=" w-[120px] h-[26px] mt-[7px] sm:mt-0 leading-[24px]"
            >
              <p className="font-extrabold">Eco-builders</p>
            </div>
          </div>

          <div
            id="navigation"
            class={`sm:flex text-[16x] font-bold sm:justify-center md:justify-between sm-items-center sm:z-auto absolute left-0 sm:static sm:top-0 w-full sm:w-[700px] md:w-full md:m-auto  sm:py-6 md:py-0 h-[883px] sm:h-12 sm:opacity-100 bg-white transition-all ease-in duration-500 cursor-pointer ${navOpen ? " opacity-100 z-10 top-[50px] xs:" : "opacity-0 z-[-1] top-[-1000px]"}`}
          >
            <ul className="sm:flex m-auto lg:ml-[301px] 2xl:ml-[500px] sm:w-[442px]">
              <ListItems 
              text='Home'
              href='#home'/>
              <ListItems 
              text='Services'
              href='#Services'/>
              <ListItems 
              text='About Us'
              href='#about'/>
              <ListItems 
              text='Contact Us'
              href='#contact'/>
            </ul>
            <div className="sm:flex mx-4 lg:ml-36 lg:mr-[70px] sm:w-[100px] my-8 sm:my-0 text-center">
              <div className="flex items-start md:items-center justify-start md:justify-center m-auto ml-[35px] md:ml-0">
                <Btn width="w-[84px]" text="Log in" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
