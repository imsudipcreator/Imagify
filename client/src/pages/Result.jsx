/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { toast } from 'react-toastify'

const Result = () => {
  const navigate = useNavigate()
  const {user , setShowLogin , generateImg} = useContext(AppContext)
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded , setIsImageLoaded ] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [input , setInput] = useState('')
  const onSubmitHandler = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    if(input){
      const image = await generateImg(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setIsLoading(false)
  }

  
  const onClickHandler = ()=>{
    if(!user){ 
     navigate('/')
   }else{
     setShowLogin(false)
   }
   if(!input){
    toast.info('Add a prompt to generate an image')
   }
   }


  return (
    <motion.form
    initial={{ opacity: 0.2 , y:100 }}
    whileInView={{ y:0 , opacity: 1 }} 
    transition={{ duration: 1 }}
    viewport={{once:true}}
     onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] sm:justify-center items-center'>
      <div className='mb-8'>
      <div className='relative '>
        <img src={image} className={`sm:max-w-sm ${isLoading ? '' : 'rounded-lg'} mt-14 lg:mt-4 bg-cover `}/>
        <span className={`h-1 absolute left-0 bottom-0 bg-blue-500 rounded-lg  ${isLoading ? 'w-full transition-all duration-[10s]': 'w-0' } `}></span>
        
      </div>

      <p className={isLoading  ? '' : 'hidden'}>Loading...</p>

      </div> 
         
        {/* -------------ImageNotLoaded--------------- */}

      {!isImageLoaded && 

      <div className='max-w-screen sm:w-3/5 h-12 flex bg-gray-500 rounded-full'>
              <input onChange={e => setInput(e.target.value)} value={input} type='text' placeholder='Describe what you want to generate' className='bg-transparent text-white rounded-l-full h-full outline-none  w-3/5 pl-5 placeholder-color'>
              </input> 
              <button type='submit' onClick={onClickHandler} className='rounded-full bg-black h-full w-2/5 text-white'>Generate</button>
      </div>
      }
        
        {/* -------------ImageLoaded--------------- */}

      {isImageLoaded && 

      <div className='flex gap-3 mt-3'>
        <div onClick={()=>{setIsImageLoaded(false)}} className='border-2 px-4 py-2 rounded-full border-zinc-900 cursor-pointer'>Generate Again</div>
        <a href={image} download className='bg-zinc-900 text-white px-5 py-2 rounded-full flex  items-center'>Download</a>
      </div>
      }

      {/* ----------info------------- */}
        <p className='text-xs font-extralight mt-2 flex items-center justify-center' ><svg onClick={()=>{toast.info("Please don't generate vulger content.")}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
        Please don&apos;t generate vulger content.</p>
    </motion.form>
  )
}

export default Result




