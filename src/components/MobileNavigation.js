import React from 'react'
import {mobileNavigation} from "../constant/navigation"
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-black z-40 backdrop-blur-2xl bg-opacity-70 w-full fixed bottom-0'>
       <div className='flex justify-between items-center h-full text-neutral-400'>
        {
            mobileNavigation.map((nav, index) => {
                return(
                    <NavLink
                    key={nav.label+"mobilenavigation"}
                    to={nav.href}
                    className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}
                    
                    >
                        <div className='text-2xl'>
                            {nav.Icon}
                        </div>
                        <p className='text-sm'>{nav.label}</p>
                    </NavLink>

                )

            })
        }
       </div>
      
    </section>
  )
}

export default MobileNavigation
