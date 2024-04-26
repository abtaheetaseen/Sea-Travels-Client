import React from 'react'

const AddTouristSpot = () => {

    const handleAddTouristSpot = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const countryName = form.countryName.value;
        const touristSpotName = form.touristSpotName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

        const user = {name, photoURL, email, countryName, touristSpotName, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear}
        console.log(user)
    }

    return (
        <>
            <div className='min-h-screen flex justify-center items-center'>
                <div>
                    <form onSubmit={handleAddTouristSpot} className='my-10 flex flex-col justify-center items-center'>

                        <input className='border-2 border-gray-400 mb-5' type="text" name='name' placeholder='Your Name' required />

                        <input className='border-2 border-gray-400 mb-5' type="text" name='photoURL' placeholder='Photo URL' required />

                        <input className='border-2 border-gray-400 mb-5' type="email" name='email' placeholder='Your E-Mail' required />

                        <input className='border-2 border-gray-400 mb-5' type="text" name='countryName' placeholder='Country Name' required />

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
