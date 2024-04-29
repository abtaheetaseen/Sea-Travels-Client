import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const AddTouristSpot = () => {

    const {user} = useContext(AuthContext);

    const [options, setOptions] = useState("");

    const handleAddTouristSpot = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const countryName = options;
        const touristSpotName = form.touristSpotName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTimeDays = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

        const user = {name, photoURL, email, countryName, touristSpotName, location, description, averageCost, seasonality, travelTimeDays, totalVisitorsPerYear}

        // send to backend server
        fetch("https://assignment-10-server-rho-drab.vercel.app/touristSpots", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success("New tourist spot added to database");
                form.reset();
            }
        })
    }

    return (
        <>
        <div className='text-center w-10/12 mx-auto mt-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>Add Tourist Spot</h1>
        
    </div>
            <div className='min-h-screen flex justify-center items-center'>
                <div>
                    <form onSubmit={handleAddTouristSpot} className='my-10 flex flex-col justify-center items-center'>

                        <input className='border-2 border-gray-400 mb-5' type="text" name='name' placeholder='Your Name' required defaultValue={user.displayName} />

                        <input className='border-2 border-gray-400 mb-5' type="text" name='photoURL' placeholder='Photo URL' required />

                        <input className='border-2 border-gray-400 mb-5' type="email" name='email' placeholder='Your E-Mail' required defaultValue={user.email} />

                        {/* <input className='border-2 border-gray-400 mb-5' type="text" name='countryName' placeholder='Country Name' required /> */}

                        <select className='mb-5 border-2 border-slate-400' onChange={(e) => {setOptions(e.target.value)}}>
                            <option>
                                Bangladesh
                            </option>

                            <option>
                                Malaysia
                            </option>

                            <option>
                                Indonesia
                            </option>

                            <option>
                                Thailand
                            </option>

                            <option>
                                Vietnam
                            </option>

                            <option>
                                Cambodia
                            </option>
                        </select>

                        <input className='border-2 border-gray-400 mb-5' type="text" name='touristSpotName' placeholder='Tourist Spot Name' required />

                        <input className='border-2 border-gray-400 mb-5' type="text" name='location' placeholder='Location' required />

                        <input className='border-2 border-gray-400 mb-5' type="text" name='description' placeholder='Description' required />

                        <input className='border-2 border-gray-400 mb-5' type="text" name='averageCost' placeholder='Average Cost' required />

                        <input className='border-2 border-gray-400 mb-5' type="text" name='seasonality' placeholder='Seasonality' required />

                        <input className='border-2 border-gray-400 mb-5' type="text" name='travelTime' placeholder='Travel Time(days)' required />

                        <input className='border-2 border-gray-400 mb-5' type="text" name='totalVisitorsPerYear' placeholder='Tota Visitors Per Year' required />

                        <input className='btn btn-sm btn-primary text-white' type="submit" value="Add Tourist Spot" />

                    </form>
                </div>
            </div>
        </>
    )
}

export default AddTouristSpot
