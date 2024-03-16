import React from "react";
import ImageSlider from "react-slick";
import WorkProcessC from "./WorkProcessC";
import data from '../assets/images/strategies/data analytics.png';
import compaign from '../assets/images/strategies/hashtags compaign.png';
import influencer from '../assets/images/strategies/influencer marketing.png';
import live from '../assets/images/strategies/live streaming.png';
import UGC from '../assets/images/strategies/UGC.png';
import social from '../assets/images/strategies/social listening.png';
import video from '../assets/images/strategies/video marketing.png';
import micro from '../assets/images/strategies/micro moments.png';
import embrace from '../assets/images/strategies/embracing.png';
import strategy from '../assets/images/strategies/modern strategy.png';
import store from '../assets/images/strategies/stories and fleet.png';

const sliderData = [
  { img: data, title: "Data Analytics Strategy" },
  { img: store, title: "Stories And Fleet" },
  { img: embrace, title: "Embracing" },
  { img: live, title: "Live Streming" },
  { img: strategy, title: "Modern Strategy" },
  { img: micro, title: "Micro Moments" },
  { img: influencer, title: "Influencer Marketing" },
  { img: UGC, title: "UGC" },
  { img: compaign, title: "Hashtags Compaign" },
  { img: data, title: "Data Analytics Strategy" },
  { img: video, title: "Video Marketing" },
  { img: social, title: "Social Listening" },
];

function SliderC() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-20 my-20">
      <ImageSlider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
              <img src={item.img} alt={item.title} className="h-24 w-24 mt-4" />
              <div className="text-xl mb-2 py-5">{item.title}</div>
              <div className="mb-4">
                <p className="text-gray-700">Customize anything in this template to fit your website needs</p>
              </div>
            </div>
          </div>
        ))}
      </ImageSlider>
      <WorkProcessC />
    </div>
  );
}

export default SliderC;
