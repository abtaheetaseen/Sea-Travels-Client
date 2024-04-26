import React from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {

    

  return (
    <>
    <div className='min-h-screen flex justify-center items-center'>
        
      <div>
      <form className='my-10 flex flex-col justify-center items-center'>
        <div>
                <input className='border-2 border-gray-400 mb-5' type="email" name='email' placeholder='Your E-Mail' required />

                <div className='flex justify-center items-center gap-1'>
                <input className='border-2 border-gray-400' type="password" name="password" placeholder='Type Password' required />
                
                <div className='cursor-pointer'>
                    <FaEye />
                    
                
                </div>
                </div>
                </div>
                <br />

                <input className='btn btn-sm btn-primary text-white' type="submit" value="Login" />

                <p className='mt-5'>Don't have an account? <Link to="/register">
                <span className='underline text-blue-600'>Register</span>
                </Link></p>
            </form>

            <div>
                <h1 className='text-center font-light mb-5'>or login with</h1>
                
                <div className='flex gap-5 justify-center items-center'>
                <button className='btn btn-neutral btn-sm text-white'>
                <FaGoogle />
                </button>
                <button className='btn btn-neutral btn-sm text-white'>
                <FaGithub />
                </button>
                </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default Login

