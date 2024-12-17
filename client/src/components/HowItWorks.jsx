import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from "motion/react"

const HowItWorks = () => {
  return (
    <motion.div className="mt-20  flex flex-col justify-center items-center"
    initial={{ opacity: 0 , y:100 }}
    whileInView={{ y:0 , opacity: 1 }} 
    transition={{ duration: 1 }}
    viewport={{once:true}}
    >
        <div className='text-center'>
            <h1 className='text-2xl'>How it works</h1>
            <p className='text-xs font-light'>Transform words into stunning images.</p>
        </div>
        <div className="flex-col flex justify-center items-center mt-10 gap-4  max-w-[350px] sm:max-w-3xl">
            <motion.div className="bg-white rounded-lg shadow-md w-full sm:w-full px-3 sm:px-7 flex h-24 items-center gap-2"
            whileHover={{scale:1.05}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{default:{duration:0.5} , opacity:{delay:0.8 , duration:1}}}
            >
                <img src={stepsData[0].icon} className='w-12 h-12' />
                <div className='flex-col  text-left'>
                    <p className='text-sm font-medium'>{stepsData[0].title}</p>
                    <p className='font-light text-xs'>{stepsData[0].description}</p>
                </div>
            </motion.div>
            <motion.div className="bg-white rounded-lg shadow-md w-full sm:w-full px-3 sm:px-7 flex h-24 items-center gap-2"
            whileHover={{scale:1.05}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{default:{duration:0.5} , opacity:{delay:0.8 , duration:1}}}
            >
                <img src={stepsData[1].icon} className='w-12 h-12' />
                <div className='flex-col  text-left'>
                    <p className='text-sm font-medium'>{stepsData[1].title}</p>
                    <p className='font-light text-xs'>{stepsData[1].description}</p>
                </div>
            </motion.div>
            <motion.div className="bg-white rounded-lg shadow-md w-full sm:w-full px-3 sm:px-7 flex h-24 items-center gap-2"
            whileHover={{scale:1.05}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{default:{duration:0.5} , opacity:{delay:0.8 , duration:1}}}
            >
                <img src={stepsData[2].icon} className='w-12 h-12' />
                <div className='flex-col  text-left'>
                    <p className='text-sm font-medium'>{stepsData[2].title}</p>
                    <p className='font-light text-xs'>{stepsData[2].description}</p>
                </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default HowItWorks