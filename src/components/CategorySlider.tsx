import { LegacyRef, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function CategorySlider() {
    const slideRef = useRef<HTMLDivElement | undefined>(null);
  const slideLeft = () => {
    /// usar um ref aqui
  
    if (!slideRef.current) return;

    slideRef.current.scrollLeft = slideRef.current.scrollLeft - 200;
  };

  const slideRight = () => {
    if (!slideRef.current) return;

    

    slideRef.current.scrollLeft = slideRef.current.scrollLeft + 200;
  };

  return (
    <>
      <div className=" h-full flex pr-11 ">
        <div
          onClick={slideLeft}
          className=" h-full py-5 bg-gray-900  rounded  hover:bg-gray-500 text-white  cursor-pointer"
        >
          <MdKeyboardArrowLeft />
        </div>
        <div
          id="slideRef"
          ref={slideRef}
          className="relative overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-none"
        >
          <ul className="flex gap-6 ">
            <li className="text-white rounded-2xl hover:opacity-80  cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
            <li className="text-white rounded-2xl hover:opacity-80 cursor-pointer bg-gray-800 px-7 py-4">
              Element
            </li>
          </ul>
        </div>
        <div
          onClick={slideRight}
          className="h-full py-5 bg-gray-900  rounded  hover:bg-gray-500 text-white  cursor-pointer"
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
    </>
  );
}

export default CategorySlider;
