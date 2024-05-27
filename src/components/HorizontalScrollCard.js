import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
    const containerRef = useRef()

const handleNext = ()=>{
    containerRef.current.scrollLeft += 300
}
const handleprevious = ()=>{
    containerRef.current.scrollLeft -= 300
}
    
    return (
        <div className='container mx-auto px-16 my-10'>
            <h2 className='text-xl lg:text-2xl font-bold mb-2 text-white capitalize'>{heading}</h2>
            <div className=' relative'>
                <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,250px)] grid-flow-col overflow-hidden relative z-10 overflow-x-scroll gap-8 scroll-smooth transition-all scrolbar-none'>
                    {
                        data.map((data, index) => {
                            return (
                                <Card key={data.id + "heading" + index} data={data} index={index + 1} trending={trending} media_type={media_type} />
                            )
                        })
                    }
                </div>

                <div className='lg:flex absolute hidden  top-0 items-center w-full h-full justify-between'>
                    <button onClick={handleprevious} className='bg-white p-1 z-10 text-black rounded-full -ml-2'>
                        <FaAngleLeft/>                        
                    </button>

                    <button onClick={handleNext} className='bg-white p-1 z-10 text-black rounded-full -mr-2'>                        
                    <FaAngleRight/>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default HorizontalScrollCard
