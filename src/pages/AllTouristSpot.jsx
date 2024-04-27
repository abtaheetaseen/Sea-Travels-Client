import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import SingleTouristSpot from './SingleTouristSpot';

const AllTouristSpot = () => {

    // const touristSpots = useLoaderData();
    const [spots, setSpots] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/touristSpots`)
        .then(res => res.json())
        .then(data => {
            setSpots(data)
        })
    }, [])

    const handleSort = () => {
        let data = [...spots]
        console.log(data)
        if(data.length > 0) {
            let result = data.sort((a,b) => parseFloat(b.averageCost) - parseFloat(a.averageCost));
            setSpots(result);
        }
    }

    const navigation = useNavigation();
    if(navigation.state === "loading") {
        return <div className='flex items-center justify-center'>
    <div className="loading loading-infinity loading-lg min-h-screen "></div>
</div> 
    }


  return (
    <>
    <div className='flex items-center justify-center my-10'>
        <button className='btn btn-sm text-white btn-neutral' onClick={handleSort}>
            Sort By Cost
        </button>
    </div>
    <div className='w-10/12 mx-auto my-[50px] grid grid-cols-1 lg:grid-cols-3 gap-10'>
        
      {
        spots.map(touristSpot => <SingleTouristSpot key={touristSpot._id} touristSpot={touristSpot}/>)
      }
      
    </div>
    </>
  )
}

export default AllTouristSpot
