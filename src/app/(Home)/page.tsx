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

export default function Home() {
  return (
    <>
      <div className="bg-blue-200">home</div>
      <img
        src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </>
  );
}
