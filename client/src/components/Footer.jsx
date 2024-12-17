import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='sm:flex flex-wrap justify-between py-3 items-center gap-2'>
        <div className='flex items-center justify-center sm:justify-start gap-2'>
            <img src={assets.logo} className='w-20'/>
            <p className='text-xs font-light'>|</p>
            <p className='text-xs font-light'> All right reserved. Copyright @imagify</p>
        </div>
        <div className='flex items-center justify-center  gap-2'>
            <img src={assets.instagram_icon}/>
            <img src={assets.facebook_icon}/>
            <img src={assets.twitter_icon}/>
        </div>
    </div>
  )
}

export default Footer