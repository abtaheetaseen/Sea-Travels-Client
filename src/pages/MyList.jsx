import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Link, useNavigation } from 'react-router-dom';
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';

const MyList = () => {

    const navigation = useNavigation();
    if(navigation.state === "loading") {
        return <div className='flex items-center justify-center'>
    <div className="loading loading-infinity loading-lg min-h-screen "></div>
</div> 
    }

    const {user} = useContext(AuthContext);

    const [myListSpots, setMyListSpots] = useState([])
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://assignment-10-server-rho-drab.vercel.app/touristSpots/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyListSpots(data);
        })
    }, [user, control])

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`https://assignment-10-server-rho-drab.vercel.app/touristSpots/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                   Swal.fire({
                title: "Deleted!",
                text: `Spot has been deleted.`,
                icon: "success"
              });
            //   remove from ui
            setControl(!control);
            }
        })
            }
          });
    }
 
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
                                <div className='flex items-center justify-start gap-2'>
    

    <Link to={`/updateTouristSpot/${spot._id}`}>
        <button className='btn btn-sm btn-success text-white'>
        <FaPen />
        </button>
    </Link>

    <div>
        <button onClick={() => handleDelete(spot._id)} className='btn btn-sm btn-error text-white'>
        <MdDeleteForever />
        </button>
    </div>
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
