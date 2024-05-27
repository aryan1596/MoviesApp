import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import userIcon from '../assets/user.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { navigation } from '../constant/navigation';





const Header = () => {
  
  const location= useLocation()
const removeSpace = location?.search?.slice(3).split("%20")?. join(" ")

  const [searchInput, setSearchInput] = useState(removeSpace)

  const navigate = useNavigate()


 console.log("location",)

  useEffect(()=>{
    if(searchInput){

      navigate(`/search?q=${searchInput}`)
    }
  },[searchInput])

  const handleSubmit = (e)=>{
    e.preventDefault()
  }


  return (
   <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
    <div className='container mx-auto px-3 flex items-center h-full'>
      <Link to={"/"}>
        <img src={logo} alt="logo" width={120} />
      </Link>

      <nav className='hidden lg:flex gap-2 ml-5 items-center'>
        {
          navigation.map((nav, index) => {
            return(
              <div>
                <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-50 ${isActive && "text-netural-50" }`}>
                  {nav.label}
                </NavLink>
              </div>
            )
          })
        }
      </nav>

      <div className='ml-auto flex items-center gap-5'>
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
          <input className='px-4 py-1 bg-transparent outline-none border-none hidden lg:block ' type="text" placeholder='Search Here...' 
          onChange={(e)=> setSearchInput(e.target.value)}
          value={searchInput}
          />
          <button className='text-2xl  text-white cursor-pointer'>  <GoSearch /> </button>
        </form>
  
      <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
        <img src={userIcon} alt="userIcon" className='w-full h-full'/>
      </div>
      </div>
    </div>
   </header>
  )
}

export default Header
