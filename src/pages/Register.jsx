import React from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {

    

  return (
    <>
   
    <div className='min-h-screen flex justify-center items-center'>
    <div>
      <form className='my-10 flex flex-col justify-center items-center'>
        
        <input className='border-2 border-gray-400 mb-5' type="text" name='name' placeholder='Your Name' required />

        <input className='border-2 border-gray-400 mb-5' type="text" name='photoURL' placeholder='Photo URL' required />

                <input className='border-2 border-gray-400 mb-5' type="email" name='email' placeholder='Your E-Mail' required />

                <div className=' gap-1'>
                <input className='border-2 border-gray-400' type="password" name="password" placeholder='Type Password' required />
                
                <div className='cursor-pointer flex justify-center items-center'>
                     <FaEye />
                    
                
                </div>
                </div>
                
                <br />

                <input className='btn btn-sm btn-primary text-white' type="submit" value="Register" />

                <p className='mt-5'>Already have an account? <Link to="/login">
                <span className='underline text-blue-600'>Login</span>
                </Link></p>
            </form>
    </div>
    </div>
    </>
  )
}

export default Register

