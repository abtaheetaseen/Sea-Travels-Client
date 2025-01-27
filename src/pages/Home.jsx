import React from 'react'
import Services from '../components/Services'
import Banner from '../components/Banner'
import { useLoaderData } from 'react-router-dom'
import TouristSpotsSection from '../components/TouristSpotsSection'
import About from '../components/About'
import DarkLightMode from '../components/DarkLightMode'
import CountrySection from '../components/CountrySection'

const Home = () => {

    const touristSpots = useLoaderData();

  return (
    <>
        <DarkLightMode />
        <Banner />
        <About />
        <Services />
        <TouristSpotsSection touristSpots={touristSpots}/>
        <CountrySection />
    </>
  )
}

export default Home
