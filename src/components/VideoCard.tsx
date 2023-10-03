import { AiFillEye } from "react-icons/ai";
import { GrFormView, GrView } from "react-icons/gr";

type PropTypes = {
  videoUrl: string;
  videoTitle: string;
  videoUserName: string;
  userImageUrl: string;
  videoId: string;
  userId: string;
};

function VideoCard({
  videoTitle = "",
  videoUrl = "",
  videoUserName = "",
  userImageUrl = "",
  videoId,
  userId,
}: PropTypes) {
  return (
    <div className="block w-full p-10  ">
      <a
        href={`video/${videoId}`}
        className="block cursor-pointer"
      >
        <div id="cardtop" className="rounded-lg overflow-hidden">
          <video src={videoUrl}></video>
        </div>
      </a>
      <div
        id="cardbottom"
        className="mt-5 flex justify-between items-center gap-2    "
      >
        <div className="flex gap-2 items-center">
          <picture>
            <img
              src={userImageUrl}
              className="rounded-full  md:w-9 md:h-9 w-7 h-7 border-cian-500 border-2 cursor-pointer  "
              alt=""
            />
          </picture>
          <div>
            <h3 className="text-gray-200 md:text-red-200 md:text-lg text-sm text-ellipsis overflow-hidden w-20 md:w-36 whitespace-nowrap">
              {videoTitle}
            </h3>
            <a
              className="text-gray-400 md:text-sm text-xs  hover:text-white"
              href={`user/${userId}`}
            >
              {videoUserName}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2">
          <span className="text-white md:text-sm text-xs">3.2k</span>
          <div className="text-white block md:text-sm text-xs">
            <AiFillEye />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
