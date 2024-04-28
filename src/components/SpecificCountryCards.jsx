import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import SpecificCountryCard from './SpecificCountryCard'

const SpecificCountryCards = () => {

    const countries = useLoaderData()
    const {countryName} = useParams()

    const country = countries.filter(country => country.countryName === countryName)
    console.log(country)
    
  return (
    <>
    <div className='text-center w-11/12 mx-auto my-[50px]'>
        <h1 className='py-3 text-3xl font-extrabold mb-3'>{countryName}</h1>
    </div>

    <div className='w-10/12 mx-auto mt-0 mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {
            country.map(item => <SpecificCountryCard item={item} key={item._id}/>)
        }
    </div>
    </>
  )
}

export default SpecificCountryCards
