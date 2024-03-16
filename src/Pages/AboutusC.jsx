import React from 'react';
import Rating from '@mui/material/Rating';
import ZEE from '../assets/images/ZEE.jpg'
import Fizba from '../assets/images/fizba.jpg'
import Haider from '../assets/images/haider.jpg'
import Slider from "react-slick";

function AboutusC() {

    const data = [
        {
            name: `Zeeshan Analyist`,
            img: ZEE,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            rating: 4.5,
        },
        {
            name: `Fizba Azhar`,
            img: Fizba,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            rating: 4.5,
        },
        {
            name: `M Haider Ashraf`,
            img: Haider,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            rating: 4,
        },
    ];

    var settings = {
        dots: true,
        arrows: true,
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
        <div className='w-[90%] mt-52 mx-auto mb-10'>
            <div className='mt-10 text-white justify-center flex flex-col '>
                <h1 className='text-center font-bold md:text-3xl  text-2xl'>What do they Say About Us?</h1>
                <p className='text-center mt-5  lg:text-xl' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum fugit quisquam similique et iste corporis, nam facere expedita ea cupiditate? Exercitationem nemo doloribus quas numquam nam temporibus ullam veniam.</p>
            </div>
            <div className="mt-10">
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index}>
                            
                            <div className='w-[300px] flex flex-col justify-center mx-auto items-center bg-white rounded-xl' >
                                <img src={item.img} alt="" className="h-32 w-32 rounded-full mt-3" />
                                <Rating name="half-rating-read" value={item.rating} precision={0.5} readOnly className='mt-2' />

                                <p className="text-center p-4">{item.review}</p>
                                <p className="text-xl font-semibold  pb-4">{item.name}</p>

                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default AboutusC;
