import { useState } from "react";
import { FaReact } from "react-icons/fa";
import ActiveLink from "./ActiveLink";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { BsFillPlayFill, BsFillStopwatchFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";

type PropTypes = {
  showNav: boolean;
  isMobile: boolean;
};

function Sidebar({ showNav, isMobile }: PropTypes) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`sidebar fixed z-[100] bg-gray-900 top-0   flex flex-col hover:overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-rounded-full scrollbar-w-11 scrollbar-track-transparent  scrollbar-thumb-gray-800 h-screen p-5 pt-5 duration-300 ${
          showNav && !isMobile ? "w-72" : "w-20"
        } ${showNav && isMobile ? "w-72" : "w-20"}`}
      >
        <div className="logo mt-4 flex gap-2 items-center justify-center">
          <div className="icon text-cian-800 text-3xl">
            <FaReact />
          </div>
          <p
            className={`text-white transition-all text-xl duration-300  ${
              showNav ? "scale-100" : "scale-0 hidden"
            }`}
          >
            React<span className="text-cian-300">Tube</span>
          </p>
        </div>
        <nav className="text-white  py-5">
          <ul className="space-y-4">
            <ActiveLink
              text="Inicio"
              to="/"
              ico={<AiFillHome />}
              isNavOppen={showNav}
            />
            <ActiveLink
              text="Favoritos"
              to="/favorites"
              ico={<AiFillHeart />}
              isNavOppen={showNav}
            />
            <ActiveLink
              text="Historico"
              to="/historic"
              ico={<BsFillStopwatchFill />}
              isNavOppen={showNav}
            />
            <ActiveLink
              text="Assistir mais tarde"
              to="/watchlater"
              ico={<BsFillPlayFill />}
              isNavOppen={showNav}
            />
          </ul>
        </nav>
        <div className={`${showNav ? "" : " hidden"}`}>
          {/* //divider */}
          <div className="mt-4 w-full h-[0.5px] bg-gray-800"></div>
          <div className=" mt-5 px-2 w-full">
            <div className="text-gray-400 ">Inscrições</div>
            <div className="space-y-4 mt-5">
              <div className=" flex text-gray-400 items-center gap-5 hover:bg-gray-800 p-2 rounded-xl cursor-pointer">
                <picture>
                  <img
                    src="/img/user.jpg"
                    className="rounded-full w-6 h-6 border-cian-500 border-2"
                    alt=""
                  />
                </picture>
                <span>Davi</span>
              </div>
              <div className=" flex text-gray-400 items-center gap-5 hover:bg-gray-800 p-2 rounded-xl cursor-pointer">
                <picture>
                  <img
                    src="/img/user.jpg"
                    className="rounded-full w-6 h-6 border-cian-500 border-2"
                    alt=""
                  />
                </picture>
                <span>Davi</span>
              </div>
              <div className=" flex text-gray-400 items-center gap-5 hover:bg-gray-800 p-2 rounded-xl cursor-pointer">
                <picture>
                  <img
                    src="/img/user.jpg"
                    className="rounded-full w-6 h-6 border-cian-500 border-2"
                    alt=""
                  />
                </picture>
                <span>Davi</span>
              </div>
              <div className=" flex text-gray-400 items-center gap-5 hover:bg-gray-800 p-2 rounded-xl cursor-pointer">
                <picture>
                  <img
                    src="/img/user.jpg"
                    className="rounded-full w-6 h-6 border-cian-500 border-2"
                    alt=""
                  />
                </picture>
                <span>Davi</span>
              </div>
            </div>

            <div
              className={`cursor-pointer flex items-center text-gray-400  gap-5 ${subMenuOpen ? 'mt-10' :'mt-5 '} transition-all duration-300 `}
              onClick={() => setSubMenuOpen((menu) => !menu)}
            >
              {/* <MdKeyboardArrowUp/> */}
              <div
                className={`text-2xl ml-1 ${subMenuOpen ? "rotate-180" : ""}  `}
              >
                <MdKeyboardArrowDown />
              </div>
              <span>Mostrar mais</span>
            </div>
          </div>
          {/* //divider */}
          <div className="mt-7 w-full h-[0.5px] bg-gray-800"></div>
        </div>

        {/* //logout */}
        <div className="  flex flex-col justify-end justify-self-end h-full cursor-pointer">
          <div className=" flex items-center p-2 rounded-xl gap-5 text-gray-400 font-normal hover:bg-gray-800">
            <div className="text-2xl">
              <RiLogoutBoxRFill />
            </div>
            <span className={`${showNav ? "" : " hidden"}`}>Sair</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
