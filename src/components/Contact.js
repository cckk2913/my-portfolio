import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section lg:my-60 lg:pb-80">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-carat-pink font-medium mb-2 tracking-wide ">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            ></input>
            
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder-white focus:border-accent transition-all resize-none mb-12"
              type="text"
              placeholder="Your messeage"
            ></textarea>

            <button className="btn btn-sm">Send messeage</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
