import React, { useContext } from 'react'
import { testimonialsData , assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "motion/react";
import { AppContext } from '../context/AppContext';



const Testimonials = () => {

    const {user , setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = ()=>{
     if(user){ 
      navigate('/result')
    }else{
      setShowLogin(true)
    }
    }

  return (
    <motion.div className="mt-20 pb-10 flex flex-col justify-center items-center"
    initial={{ opacity: 0 , y:100 }}
    whileInView={{ y:0 , opacity: 1 }} 
    transition={{ duration: 1 }}
    viewport={{once:true}}
    >
        <div className='text-center'>
            <h1 className='text-2xl'>Customer testimonials</h1>
            <p className='text-xs font-light'>What our users are saying.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-3">
            
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center mt-10 gap-1">
                <img src={testimonialsData[0].image} />
                <p className='text-base font-semibold'>{testimonialsData[0].name}</p>
                <p className='text-sm font-medium opacity-40'>{testimonialsData[0].role}</p>
                <div className='flex items-center py-2'>
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                </div> 
                <p className='text-sm font-light text-center'>{testimonialsData[0].text}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center mt-10 gap-1">
                <img src={testimonialsData[1].image} />
                <p className='text-base font-semibold'>{testimonialsData[1].name}</p>
                <p className='text-sm font-medium opacity-40'>{testimonialsData[1].role}</p>
                <div className='flex items-center py-2'>
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                </div> 
                <p className='text-sm font-light text-center'>{testimonialsData[1].text}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center mt-10 gap-1">
                <img src={testimonialsData[2].image} />
                <p className='text-base font-semibold'>{testimonialsData[2].name}</p>
                <p className='text-sm font-medium opacity-40'>{testimonialsData[2].role}</p>
                <div className='flex items-center py-2'>
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                <img src={assets.rating_star} />
                </div> 
                <p className='text-sm font-light text-center'>{testimonialsData[2].text}</p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40 gap-6">
            <h1 className='font-bold text-3xl mb-12'>See the magic. Try now</h1>
            <motion.button onClick={onClickHandler} className='bg-zinc-900 text-white py-2 px-7 rounded-full flex gap-1 items-center  mb-8'
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{default:{duration:0.5} , opacity:{delay:0.8 , duration:1}}}
            >
            Generate Images 
            <img src={assets.star_group} className=' w-5 '/>
            </motion.button>
        </div>
    </motion.div>
  )
}

export default Testimonials