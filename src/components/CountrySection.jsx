import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Country from './Country';

const CountrySection = () => {

    const [countries, setCountries] = useState([]);
    console.log(countries)

    useEffect(() => {
        fetch("http://localhost:3000/country")
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        })
    }, [])

  return (
    <>
      <div className='text-center w-10/12 mx-auto my-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>Country Section</h1>
        <p>When overseas you learn more about your own country, than you do the place you're visiting. The man who travels with another must wait till that other is ready.</p>
        {/* <Link to="/addCountry">
        <button>Add country</button>
        </Link> */}
    </div>

    <div className='w-10/12 mx-auto mt-0 mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {
            countries.map(country => <Country key={country._id} country={country} />)
        }
    </div>
    </>
  )
}

export default CountrySection
