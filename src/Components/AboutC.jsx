import React from 'react'
import TeamSliderC from '../Pages/TeamSliderC'
import NewsLetterC from '../Pages/NewsLetterC'
import Aboutus from '../assets/images/About-us.jpg' 
// import ServicesShowC from '../Pages/ServicesShowC'


function AboutC() {
  return (
    <div>

      <img src={Aboutus} alt="about " className='w-[85%] h-[250px] rounded-md mt-10 mx-auto' />

      <div className='text-white text-xl p-4 md:px-24'>

        <p>A marketing agency serves as a strategic partner for businesses looking to elevate their brand presence, engage customers, and drive sales. With a focus on developing tailored marketing strategies, these agencies conduct in-depth market research to understand target audiences, competitors, and industry trends. They specialize in crafting cohesive brand identities, encompassing logo design, messaging, and positioning, ensuring consistency across all channels.

          In today's digital landscape, marketing agencies excel in By harnessing their expertise, creativity, and strategic approach, they empower businesses to navigate challenges, seize opportunities, and achieve their marketing objectives with confidence.</p>

      </div>'

      <div className="flex mb-4  md:flex-row   justify-between flex-col    lg:h-[300px] h-fit md:mx-10 mt-10  md:mb-36  font-sans ">
        <div className="md:w-[50%]  justify-center flex w-[400px] mx-auto  px-12">
          {/* Left side content (picture) */}
          <img src="./public/Images/Seo.jpg" alt="discussion-Group" className=" w-full h-full " />
        </div>
        <div className=" md:w-[60%] flex flex-col ">
          {/* Right side content (paragraph) */}
          <h1 className="md:text-3xl text-2xl text-white md:mb-4 px-3 md:px-0 mb-4 font-bold" >Lets Discuss About Your Project</h1>

          <p className="md:text-xl text-white px-3  md:px-0">
            Your project is our Focus. We are eger to delve into the details, understand yourvision,
            and collaborate to bring it in life.Lets start a coversation that start
            looking to elevate their brand presence, engage customers, and drive sales. With a focus on developing tailored marketing strategies, these agencies conduct in-depth market research to understand target audiences, competitors, and industry trends. They specialize in crafting cohesive brand identities, encompassing logo design, messaging, and positioning, ensuring consistency across all channels.

            In today's digital landscape, marketing agencies excel in lead to your project sucess           </p>
        </div>
      </div>



      <div className="flex mb-4  md:flex-row   justify-between flex-col    lg:h-[300px] h-fit md:mx-10 mt-10  md:mb-36  font-sans ">
        <div className="md:w-[50%]  justify-center flex w-[400px] mx-auto  px-12">
          {/* Left side content (picture) */}
          <img src="./public/Images/Seo.jpg" alt="discussion-Group" className="   md:w-full h-full " />
        </div>
        <div className=" md:w-[60%] flex flex-col ">
          {/* Right side content (paragraph) */}
          <h1 className="md:text-3xl text-2xl text-white md:mb-4 px-3 md:px-0 mb-4 font-bold" >Lets Discuss About Your Project</h1>

          <p className="md:text-xl text-white px-3  md:px-0">
            Your project is our Focus. We are eger to delve into the details, understand yourvision,
            and collaborate to bring it in life.Lets start a coversation that start
            looking to elevate their brand presence, engage customers, and drive sales. With a focus on developing tailored marketing strategies, these agencies conduct in-depth market research to understand target audiences, competitors, and industry trends. They specialize in crafting cohesive brand identities, encompassing logo design, messaging, and positioning, ensuring consistency across all channels.

            In today's digital landscape, marketing agencies excel in lead to your project sucess           </p>
        </div>
      </div>
      <TeamSliderC />


      <div className='flex flex-col justify-center items-center mx-auto mt-10  p-4 text-white'>
        <h1 className='text-3xl font-bold'>Dou You Like What You See..?</h1>
        <p className='m-3'>Tell Us About Your Project And Lets Build Your Project Together</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
          Button
        </button>
      </div>



      <NewsLetterC />

            {/* <ServicesShowC/> */}
 
    </div>
  )
}

export default AboutC