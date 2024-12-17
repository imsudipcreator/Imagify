import  { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"

const Header = () => {
    const {user , setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = ()=>{
     if(user){ 
      navigate('/result')
    }else{
      setShowLogin(true)
    }
    }
    function capitalizeFirstLetter(val) {
      return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }


  return (
    <motion.div className='flex flex-col items-center justify-center gap-4 mt-14'
      initial={{ opacity: 0 , y:100 }}
    whileInView={{ y:0 , opacity: 1 }} 
    transition={{ duration: 1 }}
    viewport={{once:true}}

    >
       {user? 
      <div className='sm:hidden text-center text-4xl'>Hi, {capitalizeFirstLetter(user.name)} 👋 !!</div>
      : null
     }

      <motion.div className=' bg-white inline-flex py-1 px-4 rounded-full border-black border-[1px] gap-1'
      initial={{ opacity: 0 , y:-20 }}
      transition={{delay :0.5, duration: 1 }}
      animate={{opacity:1 , y:0 }}
      >
        <p className='font-light '>Best text to image generator</p>
        <img src={assets.star_icon}/>
      </motion.div>
      <motion.div className='text-4xl md:text-8xl mt-3'>
        <p className='text-center'>Turn text into</p>
        <p className='text-center'><span className='text-sky-400'>image</span>, in seconds.</p>
      </motion.div>
      <div >
        <p className='text-center text-sm sm:text-lg font-light '>Unleash your creativity with AI. Turn your imagination into visual masterpieces in <br className='hidden sm:block'/> seconds - just type and watch the magic happen!</p>
      </div>
      <motion.button onClick={onClickHandler} className='bg-zinc-900 text-white py-2 px-7 rounded-full flex gap-1 items-center mt-2'
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{default:{duration:0.5} , opacity:{delay:0.8 , duration:1}}}
      >
        Generate Images 
        <img src={assets.star_group} className=' w-5 '/>
      </motion.button>
      <div className='flex sm:gap-3 gap-1 pt-2'>
        <motion.img whileHover={{scale: 1.05 , duration: 0.1}} src={assets.sample_img_1} className='sm:w-20 w-16 object-cover rounded-md hover:scale-105 transition-all duration-300'/>
        <motion.img whileHover={{scale: 1.05 , duration: 0.1}} src={assets.sample_img_2} className='sm:w-20 w-16 object-cover rounded-md hover:scale-105 transition-all duration-300'/>
        <motion.img whileHover={{scale: 1.05 , duration: 0.1}} src={assets.sample_img_1} className='sm:w-20 w-16 object-cover rounded-md hover:scale-105 transition-all duration-300'/>
        <motion.img whileHover={{scale: 1.05 , duration: 0.1}} src={assets.sample_img_2} className='sm:w-20 w-16 object-cover rounded-md hover:scale-105 transition-all duration-300'/>
        <motion.img whileHover={{scale: 1.05 , duration: 0.1}} src={assets.sample_img_1} className='sm:w-20 w-16 object-cover rounded-md hover:scale-105 transition-all duration-300'/>
      </div>
      <p className='text-center text-xs sm:text-base font-light' >Generated images from imagify</p>

    </motion.div>
  )
}

export default Header