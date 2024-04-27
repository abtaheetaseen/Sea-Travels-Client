import React from 'react'
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateTouristSpot = () => {

    const touristSpots = useLoaderData();
    
    const {id} = useParams();

    const touristSpot = touristSpots.find(touristSpot => touristSpot._id === id);
    console.log(touristSpot)

    const {_id, photoURL, countryName, touristSpotName, location, description, averageCost, seasonality, travelTimeDays, totalVisitorsPerYear} = touristSpot;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const photoURL = form.photoURL.value;
        const countryName = form.countryName.value;
        const touristSpotName = form.touristSpotName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTimeDays = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

        const updatedTouristSpot = {photoURL, countryName, touristSpotName, location, description, averageCost, seasonality, travelTimeDays, totalVisitorsPerYear}
        console.log(updatedTouristSpot)

        // send to backend server
        fetch(`http://localhost:3000/touristSpots/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedTouristSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success("Tourist spot updated.");
            }
        })
    }

  return (
    <>
    <div data-aos="fade-down" className='text-center w-10/12 mx-auto mt-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>Update Tourist Spot</h1>
        
    </div>
            <div className='min-h-screen flex justify-center items-center'>
                <div>
                    <form onSubmit={handleUpdate} className='my-10 flex flex-col justify-center items-center'>

                        <div>
                            <label>PhotoURL</label>
                            <br />
                        <input className='border-2 border-gray-400 mb-5' type="text" name='photoURL' placeholder='Photo URL' required defaultValue={photoURL}/>
                        </div>

                        <div>
                        <label>Country Name</label>
                        <br />
                        <input className='border-2 border-gray-400 mb-5' type="text" name='countryName' placeholder='Country Name' required defaultValue={countryName}/>
                        </div>

                        <div>
                        <label>Tourist Spot Name</label>
                        <br />
                        <input className='border-2 border-gray-400 mb-5' type="text" name='touristSpotName' placeholder='Tourist Spot Name' required defaultValue={touristSpotName}/>
                        </div>

                        <div>
                        <label>Location</label>
                        <br />
                        <input className='border-2 border-gray-400 mb-5' type="text" name='location' placeholder='Location' required defaultValue={location}/>
                        </div>

                        <div>
                        <label>Description</label>
                        <br />
                        <input className='border-2 border-gray-400 mb-5' type="text" name='description' placeholder='Description' required defaultValue={description}/>
                        </div>

                        <div>
                        <label>Average Cost</label>
                        <br />
                        <input className='border-2 border-gray-400 mb-5' type="text" name='averageCost' placeholder='Average Cost' required defaultValue={averageCost}/>
                        </div>

                        <div>
                        <label>Seasonality</label>
                        <br />
                        <input className='border-2 border-gray-400 mb-5' type="text" name='seasonality' placeholder='Seasonality' required defaultValue={seasonality}/>
                        </div>

                        <div>
                        <label>Travel Time Days</label>
                        <br />
                        <input className='border-2 border-gray-400 mb-5' type="text" name='travelTime' placeholder='Travel Time(days)' required defaultValue={travelTimeDays}/>
                        </div>

                        <div>
                        <label>Total Visitors Per Year</label>
                        <br />
                        <input className='border-2 border-gray-400 mb-5' type="text" name='totalVisitorsPerYear' placeholder='Tota Visitors Per Year' required defaultValue={totalVisitorsPerYear}/>
                        </div>

                        <input className='btn btn-sm btn-primary text-white' type="submit" value="Update" />

                    </form>
                </div>
            </div>
        </>
  )
}

export default UpdateTouristSpot
