import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import axios from 'axios'
import UseFetch from '../hooks/UseFetch'

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData)

  const { data: nowPlayingData } = UseFetch('/movie/now_playing')
  const { data: topRatedData } = UseFetch('/movie/top_rated')
  const { data: upcomingData } = UseFetch('/movie/upcoming')
  const { data: popularTvShowData } = UseFetch('/tv/popular')
  const { data: ontheairData } = UseFetch('/tv/on_the_air')


  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true} />
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"} />
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"} />
      <HorizontalScrollCard data={upcomingData} heading={"Upcoming Movies"} media_type={"movie"} />
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular Tv Shows"} media_type={"tv"} />
      <HorizontalScrollCard data={ontheairData} heading={"On The Air"} media_type={"tv"} />





    </div>
  )
}

export default Home
