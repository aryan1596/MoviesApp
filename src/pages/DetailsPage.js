import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Diveder from '../components/Diveder'
import HorizontalScrollCard from '../components/HorizontalScrollCard'

const DetailsPage = () => {
  const params = useParams()
  const imageURL = useSelector(state => state.movieoData.imageURL)
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  const  { data : similarData } = UseFetch(`/${params?.explore}/${params?.id}/similar`)
  const  { data : RecommendationData } = UseFetch(`/${params?.explore}/${params?.id}/recommendations`)

  console.log('data', data)

  console.log('start cast', castData)

 const Duration= (data?.runtime/60)?.toFixed(1)?.split(".")
 const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(",")
 const Director = castData?.crew?.filter(el => el?.job === "Director")?.map(el => el?.name)?.join(",")
  return (
    <div>
      <div className='w-full h-[350px] relative hidden lg:block'>

        <div className='w-full h-full'>
          <img
            src={imageURL + data?.backdrop_path}
            className='h-full w-full object-cover object-top'
          />
        </div>
        <div className='absolute bg-gradient-to-t from-neutral-900/90 to-transparent w-full h-full top-0'></div>

      </div>

      <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='lg:-mt-28 relative mx-auto lg:mx-0 w-fit min-w-60'>
          <img
            src={imageURL + data?.poster_path}
            className='h-80 w-60 object-cover rounded'
          />
        </div>

        <div>
          <h2 className='text-2xl lg:text-4xl text-white font-bold'>{data?.title || data?.name}</h2>
          <p className=' text-neutral-400'>{data?.tagline}</p>

          <Diveder/>

        <div>
          <div className='flex items-center gap-4 '>
           <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
           <span>|</span>
           <p>
            views : {Number(data?.vote_count)}
           </p>
           <span>|</span>
           <p>
            Duration : {Duration[0]}h {Duration[1]}m
           </p>

          </div>
          <Diveder/>


          <div>
            <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
            <p>{data?.overview}</p>
            <Diveder/>

            <div className='flex items-center gap-3 text-center'>
              <p>Status : {data?.status}</p>
              <span>|</span>
              <p>Realsed Date : {moment(data.release_date).format("MMMM Do YYYY")}</p>
              <span>|</span>
              
              <p>
                Revenue : {Number(data?.revenue)}
              </p>
     
            </div>

            <Diveder/>

          </div>

          <div>
            
            <p><span className='text-white text-xl font-bold'>Directer</span> : {Director}</p>
            <Diveder/>
            <p><span className='text-white text-xl font-bold'>Writer </span> : {writer} </p>
          </div>
        </div>
          <Diveder/>

          <h2 className='fnt-bold text-lg'>Cast :</h2>

          <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5'>
             {
              castData?.cast?.filter(el => el?.profile_path).map((StarCast, index)=>{
                return(
                  <div >
                    <div>
                      <img
                          src={imageURL+StarCast?.profile_path}
                          className='w-24 h-24 rounded-full object-cover'
                      />
                    </div>
                    <p className='font-bold text-center text-sm'>{StarCast?.name}</p>
                  </div>
                )
              })
             }
          </div>
          

        </div>


     

      </div>

     <div>
          <HorizontalScrollCard data = {similarData} heading={'similar'+params?.explore} media_type={params?.explore} />
          <HorizontalScrollCard data = {RecommendationData} heading={'Recommendation'+params?.explore} media_type={params?.explore} />
     </div>

    </div>
  )
}

export default DetailsPage
