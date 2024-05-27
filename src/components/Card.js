import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

const Card = ({ data, trending, index,media_type }) => {
    const imageURL = useSelector(state => state.movieoData.imageURL)
    const mediaType = data.media_type?? media_type
    return (
        <Link to={"/" + mediaType+"/"+data.id} className='w-full min-w-[250px]  max-w-[250px] h-80 overflow-hidden block rounded relative hover:scale-110 transition-all'>
            
            {
                data?.poster_path ? (
                    <img
                    src={imageURL + data?.poster_path}
    
                />
                ): (
                    <div className='flex justify-center items-center h-full bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUE1_OaNKHtgeGB_7NpkVMW4osv8C_aOniUnxz49awh2ZACTfYzkoUqWifv2YxHeFGo8&usqp=CAU)] bg-t-cover bg-no-repeat bg-white bg-center'>
                        
                    </div>
                )

            }
            
            
         
            <div className='absolute top-4'>
                {
                    trending && (
                        <div className='py-1 px-4 backdrop-blur-3xl overflow-hidden rounded-r-full bg-black/60'>
                            #{index} Trending
                        </div>
                    )
                }
            </div>
            <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2'>
                <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>

                <div className='text-sm flex items-center justify-between text-neutral-400'>
                    <p>{moment(data?.release_date || data?.first_air_date).format("MMMM Do YYYY")}</p>
                    <p className='bg-black px-1 text-white rounded-full'>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
