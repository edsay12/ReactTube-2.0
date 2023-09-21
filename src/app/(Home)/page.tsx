"use client";
import { Input } from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillHeart,
  AiFillHome,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUnlock,
} from "react-icons/ai";
import { BsFillPlayFill, BsFillStopwatchFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdNotificationsNone,
  MdOutlineAddBox,
} from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import ActiveLink from "@/components/ActiveLink";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  return (
    <>
      <div className="grid min-[900px]:grid-cols-1 min-[1000px]:grid-cols-2  xl:grid-cols-3  pr-11 mt-5">

        <VideoCard userId="1" userImageUrl="img/user.jpg" videoTitle={'A volta da galinhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' } videoUrl="videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
        <VideoCard userId="1" userImageUrl="img/user.jpg" videoTitle={'A volta da galinha asd  dasd ad as' } videoUrl="videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
        <VideoCard userId="1" userImageUrl="img/user.jpg" videoTitle={'A volta da galinha' } videoUrl="videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
        <VideoCard userId="1" userImageUrl="img/user.jpg" videoTitle={'A volta da galinha' } videoUrl="videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
        <VideoCard userId="1" userImageUrl="img/user.jpg" videoTitle={'A volta da galinha' } videoUrl="videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
      </div>
     
    </>
  );
}
