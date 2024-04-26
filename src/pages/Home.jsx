import React from 'react'
import Services from '../components/Services'
import Banner from '../components/Banner'
import { useLoaderData } from 'react-router-dom'
import TouristSpotsSection from '../components/TouristSpotsSection'

const Home = () => {

    const touristSpots = useLoaderData();

  return (
    <>
        <Banner />
        <Services />
        <TouristSpotsSection touristSpots={touristSpots}/>
    </>
  )
}

export default Home
