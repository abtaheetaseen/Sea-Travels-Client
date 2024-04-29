import React from 'react'
import toast from 'react-hot-toast';

const AddCountry = () => {

    const handleAddCountry = (e) => {
        e.preventDefault();
        const form = e.target;

        const photoURL = form.photoURL.value;
        const countryName = form.countryName.value;
        const description = form.description.value;

        const newCountry = {photoURL, countryName, description}
        console.log(newCountry)

        // send to backend server
        fetch("https://assignment-10-server-rho-drab.vercel.app/country", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCountry)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success("New country added to database");
                form.reset();
            }
        })
    }

  return (
    <>
      <div className='text-center w-10/12 mx-auto mt-[50px]'>
      <h1 className='text-3xl font-extrabold '>Add Country</h1>
        
    </div>
    
            <div className='min-h-screen flex justify-center items-center'>
            
                <div>
                    <form onSubmit={handleAddCountry} className='flex flex-col justify-center items-center'>

                        <input className='border-2 border-gray-400 mb-5' type="text" name='photoURL' placeholder='Photo URL' required />

                        

                        <input className='border-2 border-gray-400 mb-5' type="text" name='countryName' placeholder='Country Name' required />

                       

                        <input className='border-2 border-gray-400 mb-5' type="text" name='description' placeholder='Description' required />

                        

                        <input className='btn btn-sm btn-primary text-white' type="submit" value="Add Country" />

                    </form>
                </div>
            </div>
    </>
  )
}

export default AddCountry
