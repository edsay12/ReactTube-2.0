import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Input } from "./Input";
import { MdNotificationsNone, MdOutlineAddBox } from "react-icons/md";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

type propTypes = {
  setShowNav: Dispatch<SetStateAction<boolean>>;
  showNav: boolean;
};

function TopBar({ setShowNav, showNav = true }: propTypes) {
  const [responsiveSeacherOpen, setResponsiveSearchOpen] = useState(false);
  const handdleSize = () => {
    if (innerWidth <= 600) {
      setResponsiveSearchOpen(true);
    } else {
      setResponsiveSearchOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window != undefined) {
      window.addEventListener("resize", handdleSize);
    }
    return () => {
      removeEventListener("resize", handdleSize); // CleanerUp
    };
  }, []);
  
  return (
    <>
      <div
        className={`fixed flex flex-col  w-full top-0 z-10 
            `}
      >
        <div
          className={`w-full h-24 bg-gray-900 pr-11  pl-28 pt-5 text-gray-400 flex justify-between items-center transition-all duration-300  ${
            showNav ? "pl-[320px]" : ""
          } `}
        >
          
            <>
              <div
                className={` text-xl bg-gray-800 rounded-xl p-2 cursor-pointer hover:text-white ${responsiveSeacherOpen ? 'hidden' :'block'}`}
                onClick={() => setShowNav((open) => !open)}
              >
                <AiOutlineMenu />
              </div>
              <div className={` cursor-pointer hover:bg-gray-500 p-2 mx-5 rounded-full ${responsiveSeacherOpen ? 'block' :'hidden'}`} onClick={()=> setResponsiveSearchOpen(false)}>
                <BsArrowLeftShort/>
              </div>
              <div
                className={`w-96  ${
                  responsiveSeacherOpen ? "w-full " :'hidden min-[900px]:hidden lg:block'
                }`}
              >
                <Input
                  placeholder="Pesquisar"
                  ico={<AiOutlineSearch />}
                ></Input>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`text-2xl text-gray-400 cursor-pointer hover:text-white  ${responsiveSeacherOpen ? 'hidden' :'block  lg:hidden'}`}
                  onClick={() => setResponsiveSearchOpen(true)}
                >
                  <AiOutlineSearch />
                </div>
                <div className={`text-2xl text-gray-400 cursor-pointer hover:text-white ${responsiveSeacherOpen && 'hidden'}`}>
                  <MdOutlineAddBox />
                </div>
                <div className={`relative ${responsiveSeacherOpen && 'hidden'}`}>
                  <div className="absolute bottom-auto  right-0 top-0 z-10  rotate-0  scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-googleColor p-1  text-center  text-xs font-bold  text-white"></div>
                  <div className="text-2xl cursor-pointer hover:text-white">
                    <MdNotificationsNone />
                  </div>
                </div>
                <div className={`${responsiveSeacherOpen && 'hidden'}`}>
                  <picture>
                    <img
                      src="/img/user.jpg"
                      className="rounded-full w-9 h-9 border-cian-500 border-2 cursor-pointer "
                      alt=""
                    />
                  </picture>
                </div>
              </div>
            </>
          
           
         
        </div>
      </div>
    </>
  );
}

export default TopBar;
