"use client";
import Divider from "@/components/Divider";
import Line from "@/components/Line";
import VideoCard from "@/components/VideoCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";

function Historic() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    Divider:true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  

  return (
    <>
      <div className="flex flex-col gap-5 mt-5 pr-11">
        Hoje
        <Line />
      </div>
      <div className="pr-11 mt-5">
          <Slider {...settings} className="">
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

            
          </Slider>
        </div>
      <div className="flex flex-col gap-5 mt-5 pr-11">
        Segunda
        <Line />
      </div>
      <div className="pr-11 mt-5">
          <Slider {...settings} className="">
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

            
          </Slider>
        </div>
      
    </>
  );
}

export default Historic;
