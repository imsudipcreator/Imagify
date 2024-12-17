import { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'
import { toast } from 'react-toastify'

const BuyCredit = () => {

  const {user} = useContext(AppContext)
  return (
    <motion.div
    initial={{ opacity: 0.2 , y:100 }}
    whileInView={{ y:0 , opacity: 1 }} 
    transition={{ duration: 1 }}
    viewport={{once:true}}
     className='flex flex-col items-center justify-center gap-3 my-7 mb-24'>
     <h3 className='text-center border-black border-[1px] rounded-full px-5 py-2'>Our Plans</h3>
     <h1 className='text-center font-semibold sm:text-3xl text-xl'>Choose your plan</h1>
      <div className='sm:flex sm:flex-row flex-col flex justify-center items-center gap-8 '>


        <div onClick={()=>{
           toast.info("These features aren't available right now.");
           toast.info("Contact the developer to get more credits.")}} 
           className='flex flex-col items-center justify-center gap-12 bg-white p-12 rounded-lg sm:hover:scale-105 transition-all duration-500'>
        <div className='flex flex-col items-start gap-1 opacity-80'>
          <img src={assets.logo_icon} />
         <h2 className='text-center font-medium sm:text-2xl text-lg mt-4'>Basic</h2>
         <p>Best for personal use</p>
         <div className='flex  items-baseline justify-center gap-3 mt-4 opacity-70'>
          <p className='font-bold text-5xl '>$10</p>
          <p className=''>/ 100 credits</p>
         </div>
         
        </div>
        <button className='bg-zinc-800 text-white px-16 py-3  rounded-lg'>{user ? 'Purchase' : 'Get Started'}</button>
        </div>


        <div  onClick={()=>{
           toast.info("These features aren't available right now.");
           toast.info("Contact the developer to get more credits.")}} 
            className='flex flex-col items-center justify-center gap-12 bg-white p-12 rounded-lg sm:hover:scale-105 transition-all duration-500'>
        <div className='flex flex-col items-start gap-1 opacity-80'>
          <img src={assets.logo_icon} />
         <h2 className='text-center font-medium sm:text-2xl text-lg mt-4'>Advanced</h2>
         <p>Best for business use</p>
         <div className='flex  items-baseline justify-center gap-3 mt-4 opacity-70'>
          <p className='font-bold text-5xl '>$49</p>
          <p className=''>/ 500 credits</p>
         </div>
         
        </div>
        <button className='bg-zinc-800 text-white px-16 py-3  rounded-lg'>{user ? 'Purchase' : 'Get Started'}</button>
        </div>


        <div onClick={()=>{
           toast.info("These features aren't available right now.");
           toast.info("Contact the developer to get more credits.")}} 
            className='flex flex-col items-center justify-center gap-12 bg-white p-12 rounded-lg sm:hover:scale-105 transition-all duration-500'>
        <div className='flex flex-col items-start gap-1 opacity-80'>
          <img src={assets.logo_icon} />
         <h2 className='text-center font-medium sm:text-2xl text-lg mt-4'>Business</h2>
         <p>Best for enterprise use</p>
         <div className='flex  items-baseline justify-center gap-3 mt-4 opacity-70'>
          <p className='font-bold text-5xl '>$250</p>
          <p className=''>/ 5000 credits</p>
         </div>
         
        </div>
        <button className='bg-zinc-800 text-white px-16 py-3  rounded-lg'>{user ? 'Purchase' : 'Get Started'}</button>
        </div>
      </div>
    </motion.div>
  )
}

export default BuyCredit