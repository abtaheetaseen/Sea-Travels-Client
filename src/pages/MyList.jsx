import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import MyListSpot from './MyListSpot';

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
    <div className='w-10/12 mx-auto my-[50px] grid grid-cols-1 lg:grid-cols-3 gap-10'>
      {
        myListSpots.map(spot => <MyListSpot spot={spot} key={spot._id}/>)
      }
    </div>
  )
}

export default MyList
