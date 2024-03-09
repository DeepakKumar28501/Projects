import featuredImg from "../assets/features.png";
import { motion } from "framer-motion";
import fadeIn from "../Variants";
function Features() {
  return (
    <div className="mt-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/4 text-center"
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3 leading-normal">
            Why we are better than others
          </h3>
          <p className="text-base text-tartiary leading-normal">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            “topic sentence.”
          </p>
        </motion.div>
        {/* feature cards  */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-3/4"
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 items-start md:gap-12 gap-8 ">
            <div className="bg-[rgba(255,255,255,0.04)] cursor-pointer rounded-[35px] h-96 shadow-4xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featuredImg} alt="features image" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] cursor-pointer rounded-[35px] h-96 shadow-4xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 md:mt-16">
              <div>
                <img src={featuredImg} alt="features image" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] cursor-pointer rounded-[35px] h-96 shadow-4xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featuredImg} alt="features image" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
