import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Link } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const MyList = () => {

    const {user} = useContext(AuthContext);

    const [myListSpots, setMyListSpots] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/touristSpots/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyListSpots(data);
        })
    }, [user])
 
  return (
    
    <>
    <div className='min-h-screen flex items-center justify-center'>
        <div>
            <h1 className='text-center mb-10 text-5xl font-normal'>My List Length: {myListSpots.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Spot Name</th>
                            <th>Country</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myListSpots.map(spot => <tr key={spot._id}>
                                
                                <td>{spot.touristSpotName}</td>
                                <td>{spot.countryName}</td>
                                <td>{spot.averageCost}</td>
                                <td>
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
                                    </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className='flex items-center justify-center mt-10'>
                <Link to="/addTouristSpot">
                <button className='btn btn-sm btn-neutral'>Add More Spot</button>
                </Link>
            
            </div>
            </div>
            </div>
        </>
  )
}

export default MyList
