import { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Dropdown from "./Dropdown";

const NavigationBar = () => {
  const {user , setShowLogin , credit } = useContext(AppContext) 
  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center pt-2">
      <div>
        <Link to={"/"}>
          <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
        </Link>
      </div>
      <div>
        {user ? (
          // logged in user
          <div className="flex gap-3">
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/buy-credit")}
              className="bg-slate-200 text-black px-3 md:px-9 py-1 rounded-full flex gap-1 items-center justify-center hover:scale-95"
            >
              <img src={assets.credit_star} className="w-5" />
              Credits left : {credit}
            </button>
            <button className=" rounded-full flex items-center justify-center lg:gap-2 cursor-default">
              <div className="lg:flex items-center justify-center font-semibold hidden">
                Hi, {capitalizeFirstLetter(user.name)} 👋 !!
              </div>
             </button>
             {/* <button className="relative">
              <img
                src={assets.profile_icon}
                alt="user"
                className="w-10 cursor-pointer group"
              />
              <div className=" absolute right-1 top-12 bg-slate-200 py-2 px-4 rounded-lg flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                  </svg>
                  <p>Logout</p>
                </div>
              </div>
            </button> */}
  
          </div>
          <Dropdown/>
          </div>
        ) : (
          // logged out user
          <div className="flex gap-3 ">
            <button
              onClick={() => navigate("/buy-credit")}
              className=" text-black px-3 md:px-9 py-1 rounded-full hover:bg-zinc-600 hover:text-white"
            >
              Pricing
            </button>
            <button onClick={()=>setShowLogin(true)} className="bg-zinc-900 text-white px-3 md:px-9 py-1 rounded-full hover:bg-zinc-600 hover:text-white">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
