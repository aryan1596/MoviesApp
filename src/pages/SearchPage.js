import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router'
import Card from '../components/Card'

const SearchPage = () => {
  const location = useLocation()
  const [data, setData]= useState([])
  const [pageNo, setPageNo] = useState(1)
  const navigate = useNavigate()

  const query = location?.search?.slice(3)

  const fetchData = async ()=>{
    try {
      const response = await axios.get(`/search/multi`,{
        params : {
          query:location?.search?.slice(3),
          page : pageNo
        }
      })
      setData((preve)=>{
        return[
          ...preve,
          ...response.data.results
        ]
      })
      
    } catch (error) {
      console.log('error',error)
    }
  }

  useEffect(()=>{
    if(query){
      setPageNo(1)
      setData([])
      fetchData()
    }
  },[location?.search])

  const handleScroll =()=>{
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      setPageNo(preve => preve+1)
    }
  }

useEffect(()=>{
  if(query){
    fetchData()
  }
},[pageNo])

useEffect(()=>{
  window.addEventListener('scroll',handleScroll)
 },[])

  console.log("location", )
  return (
    <div className='pt-16'>
      <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
      <input
      type='text'
      placeholder='Search Here...'
      onChange={(e)=> navigate(`/search?q=${e.target.value}`)}
      value={query?.split('%20')?.join(" ")}
      className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900'
      />
      </div>
     <div className='container mx-auto'>
     <h3 className='capitalize text-lg lg:text-2xl mx-16 my-3 font-semibold'>Search Results</h3>
     
     <div className='grid mx-16 grid-cols-[repeat(auto-fit,250px)] gap-8 justify-center lg:justify-start  '>
      {
        data.map((searchData, index)=>{

          return(
            <Card data={searchData} key={searchData.id+"search"} media_type={searchData.media_type}/>
          )
        })
      }
     </div>

     </div>
    </div>
  )
}

export default SearchPage
