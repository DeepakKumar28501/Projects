import React from 'react'

function Banner({banner,heading,subheading}) {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4  py-9">
    <div className="flex flex-col md:flex-row-reverse  justify-between items-center gap-10 ">
      {/* banner image  */}
      <div>
        <img src={banner} alt="banner image" className="lg:h-[368px]" />
      </div>
      {/* Banner Content  */}
      <div>
        <h2 className="md:text-7xl text-4xl font-bold mb-6 text-white leading-relaxed">Develop Your Skill withoout diligence </h2>
        <p className="text-[#EBEBEB] text-2xl mb-8">
          A good example of a paragraph contains a topic sentence, details
          and a conclusion. There are many different kinds of animals that
          live in China.
        </p>
        <div className="space-x-5 space-y-4">
            <button className="btnPrimary">Get Started</button>
            <button className="btnPrimary">Discount</button>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Banner
