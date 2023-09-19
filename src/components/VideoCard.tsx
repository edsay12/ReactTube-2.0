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
  userId
}: PropTypes) {
  return (
    <>
      <a href={`video/${videoId}`} className="block w-full  min-w-md cursor-pointer">
        <div id="cardtop" className="rounded-lg overflow-hidden">
          <video src={videoUrl}></video>
        </div>
        <div id="cardbottom" className="mt-5 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <picture>
              <img
                src={userImageUrl}
                className="rounded-full w-9 h-9 border-cian-500 border-2 cursor-pointer "
                alt=""
              />
            </picture>
            <div>
              <h3 className="text-gray-200 text-md text-ellipsis overflow-hidden w-52  whitespace-nowrap">{videoTitle}</h3>
              <a className="text-gray-400 text-md hover:text-white" href={`user/${userId}`}>
                {videoUserName}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 px-2">
            <span className="text-white text-sm">3.2k</span>
            <div className="text-white block">
              <AiFillEye />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default VideoCard;
