import {
  AiFillEdit,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { Input } from "./Input";
import { MdNotificationsNone, MdOutlineAddBox } from "react-icons/md";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Line from "./Line";

type propTypes = {
  setShowNav: Dispatch<SetStateAction<boolean>>;
  showNav: boolean;
};

function TopBar({ setShowNav, showNav = true }: propTypes) {
  const [responsiveSeacherOpen, setResponsiveSearchOpen] = useState(false);
  const [isNotificationOppen, setNotificationOppen] = useState(false);
  const [isUserConfigOppen, setUserConfigOppen] = useState(false);
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
              className={` text-xl bg-gray-800 rounded-xl p-2 cursor-pointer hover:text-white ${
                responsiveSeacherOpen ? "hidden" : "block"
              }`}
              onClick={() => setShowNav((open) => !open)}
            >
              <AiOutlineMenu />
            </div>
            <div
              className={` cursor-pointer hover:bg-gray-500 p-2 mx-5 rounded-full ${
                responsiveSeacherOpen ? "block" : "hidden"
              }`}
              onClick={() => setResponsiveSearchOpen(false)}
            >
              <BsArrowLeftShort />
            </div>
            <div
              className={`w-96  ${
                responsiveSeacherOpen
                  ? "w-full "
                  : "hidden min-[900px]:hidden lg:block"
              }`}
            >
              <Input placeholder="Pesquisar" ico={<AiOutlineSearch />}></Input>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`text-2xl text-gray-400 cursor-pointer hover:text-white  ${
                  responsiveSeacherOpen ? "hidden" : "block  lg:hidden"
                }`}
                onClick={() => setResponsiveSearchOpen(true)}
              >
                <AiOutlineSearch />
              </div>
              {/* <div className={`text-2xl text-gray-400 cursor-pointer hover:text-white ${responsiveSeacherOpen && 'hidden'}`}>
                  <MdOutlineAddBox />
                </div> */}
              <div className={`relative ${responsiveSeacherOpen && "hidden"}`}>
                <div className="absolute bottom-auto  right-0 top-0 z-10  rotate-0  scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-googleColor p-1  text-center  text-xs font-bold  text-white "></div>
                <div
                  onClick={() => setNotificationOppen((value) => !value)}
                  className="text-2xl cursor-pointer hover:text-white"
                >
                  <MdNotificationsNone />
                </div>

                <div
                  className={`absolute z-20 h-0  w-[500px] max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700 
                  ${
                    isNotificationOppen
                      ? "top-10 right-5  h-72  transition-all duration-300 ease-in-out"
                      : "sr-only opacity-0"
                  }
                  `}
                  aria-labelledby="dropdownNotificationButton"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Notificações</div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUserAvatarButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="flex-shrink-0">
                          <picture>
                            <img
                              className="rounded-full w-11 h-11"
                              src="/img/user.jpg"
                              alt="Jese image"
                            />
                          </picture>
                        </div>
                        <div className="w-full pl-3">
                          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                            New message from{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                              Jese Leos
                            </span>
                            : Hey, whats up? All set for the presentation?
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-500">
                            a few moments ago
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${responsiveSeacherOpen && "hidden"} relative`}>
                <button
                  id="dropdownUserAvatarButton"
                  data-dropdown-toggle="dropdownAvatar"
                  className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  type="button"
                  onClick={() => setUserConfigOppen((value) => !value)}
                >
                  <span className="sr-only">Open user menu</span>
                  <picture>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/img/user.jpg"
                      alt="user photo"
                    />
                  </picture>
                </button>
                <div
                  className={`absolute  right-5 top-10 z-10  bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800 dark:divide-gray-600
                ${isUserConfigOppen ? "" : "opacity-0 sr-only"}
                
                `}
                >
                  <ul
                    className="text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUserAvatarButton"
                  >
                    <li className="flex text-gray-200 items-center px-4 py-2 gap-2 hover:bg-gray-600">
                      <BiUserCircle />
                      <a href="#" className="block  ">
                        Seu canal
                      </a>
                    </li>
                    <li className="flex text-gray-200 items-center px-4 py-2 gap-2 hover:bg-gray-600">
                      <AiFillEdit />

                      <a href="#" className="block ">
                        Editar perfil
                      </a>
                    </li>
                    <li className="flex text-gray-200 items-center px-4 py-2 gap-2 hover:bg-gray-600">
                      <AiOutlineVideoCameraAdd />

                      <a href="#" className="block ">
                        Novo video
                      </a>
                    </li>
                  </ul>
                  <div className="flex text-gray-200 text-sm items-center px-4 py-2 gap-2 hover:bg-gray-600">
                    <AiOutlineLogout />
                    <a href="#" className="block ">
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default TopBar;
