import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Description = () => {
  return (
    <motion.div className="mt-20  flex flex-col justify-center items-center"
    initial={{ opacity: 0 , y:100 }}
    whileInView={{ y:0 , opacity: 1 }} 
    transition={{ duration: 1 }}
    viewport={{once:true}}
    >
      <div className="text-center">
        <h1 className="text-2xl">Create AI images</h1>
        <p className="text-xs font-light">
          Turn your imagination into visuals.
        </p>
      </div>
      <div className="sm:flex sm:flex-row flex-col items-center justify-center mt-10 gap-8 sm:w-10/12 ">
        <img src={assets.sample_img_1} className="sm:w-4/12" />
        <div className="flex-col flex sm:text-left text-center mt-3 gap-6">
          <p className="text-xl font-normal opacity-80">
            Introducing AI-powered text <br /> to image generator
          </p>
          <p className="font-light text-sm px-3 sm:px-0">
          Introducing Imagify 🌌, your ultimate AI-powered text-to-image generator! 🎨 Transform your ideas into stunning visuals effortlessly. Just type in your imagination, and watch as Imagify brings it to life with vibrant colors and intricate details. ✨ Whether you&apos;re an artist seeking inspiration or a storyteller wanting to visualize your narratives, Imagify is here to help! 🌈 With its user-friendly interface and advanced algorithms, creating unique images has never been easier. Dive into the world of creativity and let your visions soar! 🚀 Start generating captivating images today and unleash the artist within you! 🖌️
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
