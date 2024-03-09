import React from 'react'
import Banner from '../shared/Banner';
import newsletter from '../assets/newsletter.png'
function Newsletter() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner
        banner={newsletter}
        heading={"Each student an share their discount code for friends"}
        subheading={
          'A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence".'
        }
        btn1={"I have a code"}
        // btn2={"Discount"}
      />
    </div>
  )
}

export default Newsletter
