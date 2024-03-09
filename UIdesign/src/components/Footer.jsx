import logo from "../assets/logo.png";
import { FaSquareFacebook,FaInstagram,FaSquareXTwitter,FaLinkedin,FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12  flex flex-col md:flex-row gap-10 ">
        <div className="md:w-1/3 lg:w-1/3 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <img
              src={logo}
              className="w-10 inline-block items-center"
              alt="abc"
            />
            <span className="text-white">CODEXDESK</span>
          </a>
          <p className="md:w-1/2 text-white">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all -ml-2" />
          </div>
        </div>
        
        {/* footer navigations  */}
        <div className="md:w-2/3 lg:w-1/1.5 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
            <div className="space-y-4 mt-5 ">
                <h4 className="text-xl">Plateform</h4>
                <ul className="space-y-3">
                    <a href="/" className="block hover:text-gray-300">Overview</a>
                    <a href="/" className="block hover:text-gray-300">Features</a>
                    <a href="/" className="block hover:text-gray-300">About</a>
                    <a href="/" className="block hover:text-gray-300">Pricing</a>
                </ul>
            </div>
            <div className="space-y-4 mt-5 ">
                <h4 className="text-xl">Help</h4>
                <ul className="space-y-3">
                    <a href="/" className="block hover:text-gray-300">How does it works?</a>
                    <a href="/" className="block hover:text-gray-300">Where to ask question?</a>
                    <a href="/" className="block hover:text-gray-300">How to play?</a>
                    <a href="/" className="block hover:text-gray-300">What is needed for this?</a>
                </ul>
            </div>
            <div className="space-y-4 mt-5 ">
                <h4 className="text-xl">Contact</h4>
                <ul className="space-y-3">
                    <p className=" hover:text-gray-300">(+91) 6397367272</p>
                    <p className=" hover:text-gray-300">KIIT University </p>
                    <p className=" hover:text-gray-300">Patia Bhubaneswar</p>
                    <p className=" hover:text-gray-300">751024</p>
                    

                </ul>
            </div>
        </div>
      </div>
      <hr />
      <div className="text-gray-300 flex flex-col sm:flex-row sm:items-center gap-8 justify-between items-center my-8">
        <p>@ CODEXDESK 2024. All rights reserved.</p>
        <div className="flex items-center space-x-5">
            <a href="#" className="text-4xl cursor-pointer hover:-translate-y-4 transition-all duration-300"><FaSquareFacebook/></a>
            <a href="#" className="text-4xl cursor-pointer hover:-translate-y-4 transition-all duration-300"><FaInstagram/></a>
            <a href="#" className="text-4xl cursor-pointer hover:-translate-y-4 transition-all duration-300"><FaSquareXTwitter/></a>
            <a href="#" className="text-4xl cursor-pointer hover:-translate-y-4 transition-all duration-300"><FaLinkedin/></a>
           
        </div>
      </div>
    </div>
  );
}

export default Footer;
