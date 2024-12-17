import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'
import axios from 'axios'
import { toast } from 'react-toastify'


const Login = () => {
    const [state , setState] = useState('Sign Up')
    const {setShowLogin , backendUrl , setToken , setUser} = useContext(AppContext)

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            if( state === 'Login') {
              const {data} = await axios.post(`${backendUrl}/api/user/login`, {email , password})
              if(data.success){
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token' , data.token)
                setShowLogin(false)
              }else{
                toast.error(data.message)
              }
            }else{
                const {data} = await axios.post(`${backendUrl}/api/user/register`, { name , email , password})
              if(data.success){
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token' , data.token)
                setShowLogin(false)
              }else{
                toast.error(data.message)
              }
            }
        } catch (error) {
          toast.error(error.message)   
        }
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    },[])
  return (
    <div className='fixed  top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center '>
        <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2 , y:50 }}
        whileInView={{ y:0 , opacity: 1 }} 
        transition={{ duration: 0.3 }}
        viewport={{once:true}}
         className="bg-white p-8 rounded-lg shadow-md sm:w-96 flex flex-col items-center gap-1 relative">
            <h2 className="text-2xl font-bold mb-1">{state}</h2>
            <h3 className='mb-4 text-blue-900'>{ state === 'Login' ? "Welcome back! Please sign in to continue" : "Let's set up your account" }</h3>


           {state !== 'Login' && 

           <div className='border-[1px] border-black/40 rounded-full px-3 py-2 outline-slate-500 flex justify-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <input onChange={e => setName(e.target.value)} value={name} type='text' placeholder='Full name'  className='outline-none'/>
            </div>}

            <div className='border-[1px] border-black/40 rounded-full px-3 py-2 outline-slate-500 flex justify-center gap-2 my-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg>


                <input onChange={e => setEmail(e.target.value)} value={email} type='email' placeholder='Email id'  className='outline-none'/>
            </div>

            <div className='border-[1px] border-black/40 rounded-full px-3 py-2 outline-slate-500 flex justify-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>


                <input onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Password ' className='  outline-none'/>
            </div>


            {state === 'Login' && <Link to='/' className=' text-blue-900 py-2 px-4 rounded-md hover'>Forgot Password ?</Link> }

             <button type='submit' className='bg-blue-900 text-white py-2 px-4 min-w-[275px] rounded-full hover mt-6'>{state === 'Login' ? "Login" : "Create Account"}</button>
             {state === 'Login' ? <p>Don&apos;t have an account ? <span className='text-blue-900 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span> </p>
             : <p>Already have an account ? <span className='text-blue-900 cursor-pointer' onClick={()=>setState('Login')}>Login</span> </p>
             }
             


             <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} className='absolute top-4 right-4 cursor-pointer hover:bg-slate-300 p-2 rounded-full ' />
            

            
        </motion.form>
    </div>
  )
}

export default Login