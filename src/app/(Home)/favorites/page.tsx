import Divider from "@/components/Divider";
import Line from "@/components/Line";
import VideoCard from "@/components/VideoCard";

function Favorites() {
  return (
    <>
      <div className="flex flex-col gap-5 mt-5 pr-11">
        Favoritos
        <Line />
      </div>
      <div className="grid min-[900px]:grid-cols-1 min-[1000px]:grid-cols-2  xl:grid-cols-3  pr-11 mt-5">
        <VideoCard
          userId="1"
          userImageUrl="img/user.jpg"
          videoTitle={
            "A volta da galinhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          }
          videoUrl="videodeteste.mp4"
          videoUserName="Davi Golias"
          videoId="1"
        />
        <VideoCard
          userId="1"
          userImageUrl="img/user.jpg"
          videoTitle={"A volta da galinha asd  dasd ad as"}
          videoUrl="videodeteste.mp4"
          videoUserName="Davi Golias"
          videoId="1"
        />
        <VideoCard
          userId="1"
          userImageUrl="img/user.jpg"
          videoTitle={"A volta da galinha"}
          videoUrl="videodeteste.mp4"
          videoUserName="Davi Golias"
          videoId="1"
        />
        <VideoCard
          userId="1"
          userImageUrl="img/user.jpg"
          videoTitle={"A volta da galinha"}
          videoUrl="videodeteste.mp4"
          videoUserName="Davi Golias"
          videoId="1"
        />
        <VideoCard
          userId="1"
          userImageUrl="img/user.jpg"
          videoTitle={"A volta da galinha"}
          videoUrl="videodeteste.mp4"
          videoUserName="Davi Golias"
          videoId="1"
        />
      </div>
    </>
  );
}

export default Favorites;
