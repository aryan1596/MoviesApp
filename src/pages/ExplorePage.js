import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'

const ExplorePage = () => {
  const params =useParams()
  const [pageNo, setPageNo] = useState(1)
  const [data, setData] = useState([])
  const [totalPageNo, setTotalPageNo] = useState(0)





  console.log('params',params.explore)


  const fetchData = async ()=>{
    try {
      const response = await axios.get(`/discover/${params.explore}`,{
        params : {
          page : pageNo
        }
      })
      setData((preve)=>{
        return[
          ...preve,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages)
    } catch (error) {
      console.log('error',error)
    }
  }

  const handleScroll =()=>{
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      setPageNo(preve => preve+1)
    }
  }

useEffect(()=>{
  fetchData()
},[pageNo])

useEffect(()=>{
setPageNo(1)
setData([])
fetchData()
},[params.explore])

useEffect(()=>{
 window.addEventListener('scroll',handleScroll)
},[])

  return (
    <div className='pt-16'>
     <div className='container mx-auto'>
     <h3 className='capitalize text-lg lg:text-2xl mx-16 my-3 font-semibold'>Popular {params.explore} Shows</h3>
     
     <div className='grid mx-16 grid-cols-[repeat(auto-fit,250px)] gap-8 justify-center lg:justify-start '>
      {
        data.map((exploreData, index)=>{

          return(
            <Card data={exploreData} key={exploreData.id+"exploreSection"} media_type={params.explore}/>
          )
        })
      }
     </div>
     </div>
      
    </div>
  )
}

export default ExplorePage
