"use client";
import Button from "@/components/Button";
import VideoWatchLaterCard from "@/components/VideoWatchLaterCard";
import { useState } from "react";
import { TbFilterDown, TbFilterUp, TbPointFilled } from "react-icons/tb";

function WatchLater() {
  const [isDesc, setIsDesc] = useState(false);
  return (
    <div className="pr-11  mt-5">
      <div className="p-9 w-full  grid-cols-1  xl:grid-cols-3 justify-center   gap-5 bg-gray-800 grid  rounded flex-wrap ">
        <picture className="">
          <img src="/img/image.jpg" className="w-full  rounded" alt="" />
        </picture>
        <div className="min-w-md max-w-lg space-y-2">
          <h1 className="text-2xl">Assistir mais tarde</h1>
          <p>410 videos 0 visualizações</p>
        </div>
        <div className="self-end">
          <Button text="Reproduzir tudo" bg="bg-white" textColor="text-black" />
        </div>
      </div>
      <div
        className="mt-5 cursor-pointer text-2xl flex gap-2 items-center hover:opacity-80"
        onClick={() => setIsDesc((state) => !state)}
      >
        {isDesc ? <TbFilterDown /> : <TbFilterUp />}

        <span className="text-xl">Ordenar</span>
      </div>
      <div>
        <VideoWatchLaterCard />
        <VideoWatchLaterCard />
        <VideoWatchLaterCard />
      </div>
    </div>
  );
}

export default WatchLater;
