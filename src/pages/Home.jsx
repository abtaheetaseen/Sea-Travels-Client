import React from 'react'
import Services from '../components/Services'
import Banner from '../components/Banner'
import { useLoaderData } from 'react-router-dom'
import TouristSpotsSection from '../components/TouristSpotsSection'
import About from '../components/About'

const Home = () => {

    const touristSpots = useLoaderData();

  return (
    <>
        <Banner />
        <About />
        <Services />
        <TouristSpotsSection touristSpots={touristSpots}/>
    </>
  )
}

export default Home
