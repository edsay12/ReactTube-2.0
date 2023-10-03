import { TbPointFilled } from "react-icons/tb";

function VideoWatchLaterCard() {
    return ( <>
        <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-5 mt-5 mb-5">
        <a href=""> {/* Video id aqui */}
          <div className="lg:max-w-sm w-full rounded-lg  ">
            <video src="/videodeteste.mp4 " />
          </div>
        </a>
        <div className="w-full lg:col-span-3">
          <h2 className="text-xl">Titulo do video</h2>
          <p className="text-gray-400 flex gap-1 items-center md:text-lg text-xs">
            <a href="" className="hover:text-white">Dev Junior alves</a>
            <span><TbPointFilled/></span>
            <span>1,1 mil visualizações</span>
            <span><TbPointFilled/></span>
            <span>há 7 dias</span>
          </p>
        </div>
      </div>
    
    
    </> );
}

export default VideoWatchLaterCard;