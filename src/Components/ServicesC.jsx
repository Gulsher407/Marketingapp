import React, { useEffect } from 'react';
import WorkProcessC from '../Pages/WorkProcessC'
import AboutusC from '../Pages/AboutusC'
//  import RecentProjects from '../Pages/RecentProjects';
import TeamSliderC from '../Pages/TeamSliderC';
import NewsLetterC from '../Pages/NewsLetterC';
import Project1C from '../Pages/Project1C'
 import ServicesShowC from '../Pages/ServicesShowC'


import brand from '../assets/images/services/brand marketing.png';
import content from '../assets/images/services/contentcreater.png';
import digital from '../assets/images/services/digital marketing.png';
import Email from '../assets/images/services/email marketing.png';
import fiver from '../assets/images/services/fiver.png';
import Team from '../assets/images/services/our team.png'
import Ads from '../assets/images/services/googl ads.png'
import Popular from '../assets/images/services/popular.png'
import Youtube from '../assets/images/services/youtube.png'
import Upwork from '../assets/images/services/upworknew.png'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';





function ServicesC() {


  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Global settings
      offset: 200, // Offset (in px) from the original trigger point
      duration: 1000, // Duration of the animation (in ms)
      easing: 'ease-in-out', // Easing type
      once: true // Whether animation should only happen once
    });

    // Specify which elements should be animated
    AOS.refresh();
  }, []); // Run only once after component mounts


  return (


    <div className=''  >
      <div className=' flex flex-col h-[114px] items-center' >
        <h1 className='text-white text-sm  lg:text-3xl  font-bold text-center p-4'>
          " Your Sucess Story Start Here Embrace Our Services."</h1>
        <h1 className='text-xl text-white border-2 font-bold bg-blue-600 border-blue-400 w-fit px-6 py-1 rounded-md mt-24 position absolute' >Our Services</h1>
      </div>

      <div className='bg-white text-black border-2 w-fit mx-auto py-2 rounded'  >

        {/* <div className='  py-10 min-h-screen w-full px-5 mx-auto  '

        >
          <h1 className=' text-sm  lg:text-3xl font-bold   lg:text-center text-[#000080]'>These are the <span className='text-red-700'>SERVICES</span> We are Providing</h1>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-10  p-2 gap-x-2 gap-y-10 md:px-20'>

            <img src={digital} alt="" className='hover:-translate-y-6 duration-1000  ' />
            <img src={content} alt="" className='hover:-translate-y-6 duration-1000 ' />
            <img src={brand} alt="" className='hover:-translate-y-6 duration-1000 ' />
            <img src={Email} alt="" className='hover:-translate-y-6 duration-1000 ' />
            <img src={fiver} alt="" className='hover:-translate-y-6 duration-1000 ' />
            <img src={Ads} alt="" className='hover:-translate-y-6 duration-1000 ' />
            <img src={Team} alt="" className='hover:-translate-y-6 duration-1000 ' />
            <img src={Popular} alt="" className='hover:-translate-y-6 duration-1000 ' />
            <img src={Youtube} alt="" className='hover:-translate-y-6 duration-1000 ' />
            <img src={Upwork} alt="" className='hover:-translate-y-6 duration-1000 ' />

          </div>


        </div> */}
            <ServicesShowC/>

      </div> 


      <div className='max-w-[850px] flex flex-col lg:flex-row rounded-xl md:mx-auto m-5 bg-white p-4 shadow-lg mt-16'>
        <p className='ml-14 text-blue-500 text-xl mr-8 self-center'>Save Time and Grow Your Business With Us! </p>
        <button className='bg-blue-700 w-[250px] text-white p-3 mt-3 md:mt-0 ml-5 md:ml-0 rounded-md mr-10 hover:bg-blue-800 transition duration-300'>VIEW ON-DEMAND DEMO</button>
      </div>

      <WorkProcessC />
      <AboutusC />
      {/* <RecentProjects /> */}
      <Project1C/>
      <TeamSliderC />
      <NewsLetterC />


    </div>
  );
}

export default ServicesC;
