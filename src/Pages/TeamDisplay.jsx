import React, { useContext } from 'react';
import { TeamContext } from '../Context/Teamcontext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TeamDisplay() {
  // Access team context
  const { teamMembers } = useContext(TeamContext);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
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
    <div className='w-[90%] mt-10 mx-auto mb-20 text-white'>
            <h1 className='text-center font-bold text-3xl mb-10'>Our Team Members</h1>
            <Slider {...settings}>
                {teamMembers.map((member) => (
                    <div key={member.id} className='text-center'>
                        <img src={member.imageURL} alt={member.position} className='object-cover w-40 h-40 rounded-full mx-auto mb-4 ' />
                        <p className='text-xl font-semibold'>{member.name}</p>

                        <p className='text-xl font-semibold'>{member.position}</p>
                    </div>
                ))}
            </Slider>
        </div>
  );
}

export default TeamDisplay;
