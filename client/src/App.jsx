import { useContext } from 'react'
import  Home  from  './pages/Home.jsx'
import  BuyCredit  from  './pages/BuyCredit.jsx'
import Result from './pages/Result.jsx'
import {Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import { AppContext } from './context/AppContext.jsx'
import { ToastContainer } from 'react-toastify'

function App() {
   const {showLogin} = useContext(AppContext)

  return (
    <div className=" px-4 sm:px-10 md:px-12 lg:px-20 bg-gradient-to-b from-teal-50 to-orange-50 min-h-screen">
      <ToastContainer position='bottom-center' />
      <NavigationBar/>
      {showLogin && <Login/>}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy-credit" element={<BuyCredit />} />
      <Route path="/result" element={<Result />} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
