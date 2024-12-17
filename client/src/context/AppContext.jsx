/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();
const AppContextProvider = (props) => {
    const [user, setUser] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(false);
    const navigate = useNavigate()

    const backendUrl = import.meta.env.VITE_IMAGIFY_BACKEND_URL
    const loadCreditsData = async()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/user/credits' , {headers : {token}})
            if(data){
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const logout= ()=>{
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }

    const generateImg = async(prompt)=>{
        try {
           const {data} = await axios.post(backendUrl + '/api/image/generate-image' , {prompt} , {headers:{token}})
           if(data.success){
            loadCreditsData()
            return data.resultImage
           }else{
            toast.error(data.message)
            loadCreditsData()
            if(data.creditBalance === 0){
                navigate('/buy-credit')
            }
           }
        } catch (error) {
            toast.error(error.message)
        }
    }


    useEffect(()=>{
        if(token){
            loadCreditsData()
            }
    },[token])

    const value={
        user,setUser , showLogin , setShowLogin , backendUrl , token, setToken
        , credit, setCredit , loadCreditsData , logout , generateImg
    }
    return ( 
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
        )
}


export default AppContextProvider;