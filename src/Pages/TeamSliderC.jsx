import React from 'react';
import Slider from 'react-slick';
import waleed from '../assets/images/team/Waleed.jpg';
import fizba from '../assets/images/team/fizba.jpg';
import designer from '../assets/images/team/designer.jpg';
import haider from '../assets/images/team/haider.jpg';
import Gulsher from '../assets/images/team/Gulsher.jpg';
import Arbaz from '../assets/images/team/Arbaz.jpg';


function TeamSliderC() {
    const data = [
        { id: 1, position: 'Human Resources', image: waleed , Name :"Waleed Khan"},
        { id: 2, position: 'Front-end Developer', image: fizba , Name :"Fizba"},
        { id: 3, position: 'Front-end Developer', image: designer , Name :"Haider"},
        { id: 4, position: 'Graphic Designer', image: haider , Name :"Haider"},
        { id: 5, position: 'Mern Stack Developer', image: Arbaz , Name :"M Arbaz"},
        { id: 6, position: 'React Developer', image: Gulsher , Name :"Gulsher"},


    ];

    const settings = {
    
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
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
                {data.map((member) => (
                    <div key={member.id} className='text-center'>
                        <img src={member.image} alt={member.position} className='object-cover w-40 h-40 rounded-full mx-auto mb-4 ' />
                        <p className='text-xl font-semibold'>{member.Name}</p>

                        <p className='text-xl font-semibold'>{member.position}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TeamSliderC;
