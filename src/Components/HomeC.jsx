import React from 'react'
import HeroC from '../Pages/HeroC'
import SliderC from '../Pages/SliderC'
import AboutusC from '../Pages/AboutusC'
import PricingC from '../Pages/PricingC'
import LoaderC from '../Pages/LoaderC'
import BlogEntriesC from '../Pages/BlogEntriesC'
import DiscussionC from '../Pages/DiscussionC'

function HomeC() {


  return (
    <div className=' bg-[#000080]'
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500" >
      <HeroC />
      <SliderC />
      <DiscussionC />
      <AboutusC/>
      <PricingC/>
      <LoaderC />
      <BlogEntriesC />

    </div>
  )
}

export default HomeC