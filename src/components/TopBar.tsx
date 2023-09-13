import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Input } from "./Input";
import { MdNotificationsNone, MdOutlineAddBox } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";

type propTypes = {
  setShowNav: Dispatch<SetStateAction<boolean>>;
  showNav: boolean;
};

function TopBar({ setShowNav, showNav = true }: propTypes) {
  return (
    <>
      <div
        className={`fixed flex flex-col  w-full top-0
            `}
      >
        <div
          className={`w-full h-24 bg-gray-900 px-5 pl-28 pt-5 text-gray-400 flex justify-between items-center transition-all duration-300  ${
            showNav ? "pl-[350px]" : ""
          } `}
        >
          <div
            className=" text-xl bg-gray-800 rounded-xl p-2 cursor-pointer hover:text-white"
            onClick={() => setShowNav((open) => !open)}
          >
            <AiOutlineMenu />
          </div>
          <div className="w-96">
            <Input placeholder="Pesquisar" ico={<AiOutlineSearch />}></Input>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-2xl text-gray-400 cursor-pointer hover:text-white">
              <MdOutlineAddBox />
            </div>
            <div className="relative">
              <div className="absolute bottom-auto  right-0 top-0 z-10  rotate-0  scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-googleColor p-1  text-center  text-xs font-bold  text-white"></div>
              <div className="text-2xl cursor-pointer hover:text-white">
                <MdNotificationsNone />
              </div>
            </div>
            <div>
              <img
                src="/img/user.jpg"
                className="rounded-full w-9 h-9 border-cian-500 border-2 cursor-pointer "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
