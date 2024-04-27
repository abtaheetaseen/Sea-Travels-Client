import React from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';

const MyListSpot = ({spot}) => {
  return (
    <div className='flex items-center justify-center'>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{spot.touristSpotName}</h2>
    <p>Travel Time: {spot.travelTimeDays} days</p>
    <p>Average Cost: {spot.averageCost}</p>
    <p>Location: {spot.location}</p>
    <div className='flex items-center justify-start gap-5'>
    <Link to={`/touristSpots/${spot._id}`}>
        <button className='mt-5 btn btn-sm btn-primary text-white'>
        <IoEyeSharp />
        </button>
    </Link>

    <Link>
        <button className='mt-5 btn btn-sm btn-success text-white'>
        <FaPen />
        </button>
    </Link>

    <Link>
        <button className='mt-5 btn btn-sm btn-error text-white'>
        <MdDeleteForever />
        </button>
    </Link>
    </div>
  </div>
  <figure><img src={spot.photoURL} alt="" /></figure>
</div>
      </div>
    </div>
  )
}

export default MyListSpot
