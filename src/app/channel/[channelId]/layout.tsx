"use client";

import type { Metadata } from "next";

import { ReactNode, useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CategorySlider from "@/components/CategorySlider";
import Button from "@/components/Button";
import { AiOutlineCamera, AiOutlineCloudUpload } from "react-icons/ai";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Line from "@/components/Line";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface ChannelProps {
  params:
    | {
        channelId: string; // Defina o tipo esperado para channelId
      },
    
    children:ReactNode
}

export default function ChanellLayout({
  children,
  params
}: ChannelProps) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const path = usePathname();

  const handdleSize = () => {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
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
  console.log('parametor',params.channelId)

  return (
    <>
      <Sidebar showNav={showNav} isMobile={isMobile} />
      <TopBar setShowNav={setShowNav} showNav={showNav} />

      {/* conteudo aqui */}

      <main
        className={`pt-32 w-full pl-28   text-white duration-300 transition-all 
              ${showNav && !isMobile ? "pl-[288px]" : ""} 
            
              `}
      >
        <div className="w-full h-full flex  flex-col gap-5">
        <div className="">
        <div className="w-full h-72 ">
          <div>
            <picture className="relative">
              <img
                src="/img/channelDefaultBanner.jpeg"
                className="w-full h-72 object-cover object-center"
                alt=""
              />
              <div className="absolute  bg-gray-800/80 rounded-lg cursor-pointer z-10 flex justify-center items-center hover:opacity-80 p-2 right-14 bottom-5">
                <BiEdit />
              </div>
            </picture>
          </div>

          <div className="relative">
            <div className="flex pr-5 pl-14 justify-between absolute -bottom-28 right-0 left-0">
              <div className="flex gap-5">
                <div className="relative">
                  <picture>
                    <img
                      src="/img/user.jpg"
                      className="w-40 h-48 object-cover rounded-md"
                      alt=""
                    />
                  </picture>
                  <div className="absolute right-5 bottom-5 p-3 bg-gray-800/80 rounded-lg cursor-pointer hover:opacity-80">
                    <AiOutlineCamera />
                  </div>
                </div>
                <div className="self-end mb-9">
                  <h4 className="text-xl">Tomas Edison</h4>
                  <p className="text-xs text-gray-400">
                    Nenhum inscrito <span>5 videos</span>
                  </p>
                </div>
              </div>

              <div className="w-32 self-end mb-4">
                <Button
                  text="NEW VIDEO"
                  textColor="text-white"
                  ico={<AiOutlineCloudUpload />}
                  rounded="rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* menu */}
        <div className="w-full pl-5 pr-5 mt-48 relative">
          <div className="flex gap-8 text-lg uppercase absolute bottom-0">
            <Link href={"home"} className={path.includes('/home') ? 'hover:opacity-50  px-5 border-b-2 border-cian-500 ' : 'hover:opacity-50 px-5'} >Inicio</Link>
            <Link href={"videos"} className={path.includes('/videos') ? 'hover:opacity-50 px-5  border-b-2 border-cian-500 ' : 'hover:opacity-50 px-5'}>Videos</Link>
            <Link href={"playlists"} className={path.includes('/playlists') ? 'hover:opacity-50 px-5  border-b-2 border-cian-500 ' : 'hover:opacity-50 px-5'}>Playlists</Link>
            <Link href={"channels"} className={path.includes('/channels') ? 'hover:opacity-50 px-5  border-b-2 border-cian-500 ' : 'hover:opacity-50 px-5'}>Canais</Link>
            <Link href={"about"} className={path.includes('/about') ? 'hover:opacity-50 px-5  border-b-2 border-cian-500 ' : 'hover:opacity-50 px-5'}>Sobre</Link>
          </div>
          <Line  />
        </div>
      </div>
          <div className=" w-full pl-5 pr-5 ">{children}</div>
        </div>
      </main>
    </>
  );
}
