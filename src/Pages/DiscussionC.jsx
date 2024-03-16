import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import help from '../assets/images/help.png';
import pic from '../assets/images/int2.png';

function DiscussionC() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div>
      <div className="flex mb-4 md:flex-row justify-between flex-col lg:h-[450px] h-fit md:mx-10 mt-36 md:mb-36 font-sans">
        <div className="w-[45%] justify-center flex" data-aos="fade-left"      data-aos-offset="300"      data-aos-easing="ease-in-sine"> 
          {/* Left side content (picture) */}
          <img
            src={pic}
            alt="discussion-Group"
            className="ml-20 md:ml-0 w-auto h-full pic"
          />
        </div>
        <div className="md:w-[60%] mr-2 flex flex-col justify-center">
          {/* Right side content (paragraph) */}
          <h1 className="text-center mt-10 md:text-3xl text-2xl text-white md:mb-8 mb-4 font-bold">
            Lets Discuss About Your Project
          </h1>
          <p className="md:text-xl text-white md:ml-24 px-4 md:px-0">
            Your project is our focus. We're eager to delve into the details, understand your vision,
            and collaborate to bring it to life. Let's start a
            conversation that leads to your project's success.
          </p>
        </div>
      </div>

      <div className="h-10 flex items-center justify-center pb-20">
        <hr className="md:w-[1150px] border-white" />
      </div>

      <div className="flex justify-between h-[450px] md:mx-10 md:mt-10 md:flex-row flex-col font-sans">
        <div className="md:w-[60%] mr-2 flex flex-col justify-center p-2">
          {/* Right side content (paragraph) */}
          <h1 className="md:text-3xl text-2xl ml-10 text-white md:mb-8 mb-4 font-bold">
            We Can Help You To Grow You Business
          </h1>
          <p className="md:text-xl text-white p-2 md:w-[92%]">
            Experience exponential growth for your business with our tailored solutions.
            Let our expertise pave the way for your success as we work together to expand your brand,
            reach new audiences, and achieve your goals.
          </p>
        </div>
        <div className="md:w-[40%] w-[80%] ml-2 justify-center flex" data-aos="fade-right">
          {/* Left side content (picture) */}
          <img
            src={help}
            alt="Business-Grow"
            className="w-auto h-full help"
          />
        </div>
      </div>
    </div>
  );
}

export default DiscussionC;
