import React from 'react';
import ProjectSlider from 'react-slick';
import image1 from '../assets/images/go trolly.png';
import image2 from '../assets/images/ELISHAPRO.png';
import image3 from '../assets/images/mort.png';

const SliderComponentC = () => {
  const slides = [
    {
      content: 'Slide 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit.Slide  lorem2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim vitae libero ultricies, ac tincidunt dui rutrum. Proin sagittis enim vitae libero ultricies, ac tincidunt dui rutrum.',
      image: image1,
      Title: "Seo",
      link: "www.instagram.com"
    },
    {
      content: 'Slide  lorem2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim vitae libero ultricies, ac tincidunt dui rutrum.Slide  lorem2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim vitae libero ultricies, ac tincidunt dui rutrum.',
      image: image2,
      Title: "Web Devlpment",
      link: "www.youtube.com"
    },
    {
      content: 'Slide 3 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit.Slide  lorem2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis enim vitae libero ultricies, ac tincidunt dui rutrum. Proin sagittis enim vitae libero ultricies, ac tincidunt dui rutrum.',
      image: image3,
      Title: "UX/UI Design",
      link: "https://tailwindcss.com/docs/box-sizing"
    },
  ];

  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };

  return (
    <div className="container mx-auto py-8 mt-32 text-center text-white max-h-full w-[76%]  ">
      <h2 className="text-3xl font-bold mb-4">Our Recent Projects</h2>
      <h2 className="text-xl mb-20">Here Are our Some On progress Projects</h2>
      <ProjectSlider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="wrapper bg-white text-black flex w-full items-center justify-center rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative">
            <div className='flex mx-2 flex-col md:flex-row'>
              <div className="w-[50%] flex justify-center items-center">
                <img className='md:h-[400px]  h-[200px] w-full px-10 md:px-0 mt-2 md:mt-0' src={slide.image} alt="man" />
              </div>
              <div className="basis-[40%] flex flex-col place-items-center justify-center h-[350px]">
                <h2 className="p-10 text-3xl font-bold">{slide.Title}</h2>
                <p className="px-4 text-center text-[18px]">{slide.content}</p>
                <div className='pb-6 md:pb-0'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-10 px-4 rounded-full focus:outline-none focus:shadow-outline'>
                    <a href={slide.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ProjectSlider>
    </div>
  );
};

export default SliderComponentC;
