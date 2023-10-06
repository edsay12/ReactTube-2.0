"use client";


import VideoCard from "@/components/VideoCard";


interface ChannelProps {
  params: {
    channelId: string; // Defina o tipo esperado para channelId
  } | string;
}

function Home() {



  return (
    
    <div className="grid min-[900px]:grid-cols-1 min-[1000px]:grid-cols-2  xl:grid-cols-3  pr-11 mt-5">

        <VideoCard userId="1" userImageUrl="/img/user.jpg" videoTitle={'A volta da galinhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' } videoUrl="/videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
        <VideoCard userId="1" userImageUrl="/img/user.jpg" videoTitle={'A volta da galinha asd  dasd ad as' } videoUrl="/videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
        <VideoCard userId="1" userImageUrl="/img/user.jpg" videoTitle={'A volta da galinha' } videoUrl="/videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
        <VideoCard userId="1" userImageUrl="/img/user.jpg" videoTitle={'A volta da galinha' } videoUrl="/videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
        <VideoCard userId="1" userImageUrl="/img/user.jpg" videoTitle={'A volta da galinha' } videoUrl="/videodeteste.mp4" videoUserName="Davi Golias" videoId='1'/>
      </div>
  )
}

export default Home
