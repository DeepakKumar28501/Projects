import aboutImg1 from "../assets/about.png";
import aboutImg2 from "../assets/about2.png";
import { motion } from "framer-motion";
import fadeIn from "../Variants";
function About() {
  return (
    <div className="mt-24  md:px-14 p-4 max-w-s mx-auto" id="about">
      <div className="flex md:flex-row-reverse flex-col lg:gap-8 items-center justify-between">
        {/* about content  */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h1 className="text-3xl md:text-5xl mb-5 leading-normal text-primary font-semibold">
            We have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h1>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={aboutImg1} alt="about image" />
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col lg:gap-8 items-center justify-between mt-24">
        {/* about content  */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h1 className="text-3xl md:text-5xl mb-5 leading-normal text-primary font-semibold">
            You can Practice at any{" "}
            <span className="text-secondary">time convinent for you.</span>
          </h1>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={aboutImg2} alt="about image" />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
