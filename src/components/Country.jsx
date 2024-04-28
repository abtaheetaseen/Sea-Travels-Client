import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({ country }) => {
    return (
        <Link to={`/country/${country.countryName}`}>
            <div className="w-full bg-base-100 shadow-xl image-full hover:bg-slate-200 hover:scale-105">
                <figure><img className='h-[300px] w-full' src={country.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{country.countryName}</h2>
                    <p>{country.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Country
