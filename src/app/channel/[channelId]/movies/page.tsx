"use client";

import ActiveLink from "@/components/ActiveLink";
import Button from "@/components/Button";
import Line from "@/components/Line";
import Link from "next/link";
import { AiOutlineCamera, AiOutlineCloudUpload } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { LiaEdit } from "react-icons/lia";
import { TbEditCircle } from "react-icons/tb";

interface ChannelProps {
  params: {
    channelId: string; // Defina o tipo esperado para channelId
  };
}

function Channel({ params }: ChannelProps) {
  console.log(params.channelId);

  return (
    <>
      <div>
        <div className="w-full h-72">
          <div>
            <picture className="relative">
              <img
                src="/img/channelDefaultBanner.jpeg"
                className="w-full h-full object-cover object-center"
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
        <div className="mt-48 w-full pl-5 pr-5">
          <div className="flex gap-8 text-lg uppercase">
            <Link href={"movies"} className="hover:opacity-50">Inicio</Link>
            <Link href={"movies"} className="hover:opacity-50">Videos</Link>
            <Link href={"movies"} className="hover:opacity-50">Playlists</Link>
            <Link href={"movies"} className="hover:opacity-50">Canais</Link>
            <Link href={"movies"} className="hover:opacity-50">Sobre</Link>
          </div>
          <Line />
        </div>
      </div>
    </>
  );
}

export default Channel;
