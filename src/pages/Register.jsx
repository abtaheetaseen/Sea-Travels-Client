import React, { useContext, useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const {createUser, setName, setPhotoURL} = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPass, setShowPass] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.toLowerCase();
        const photoURL = form.photoURL.value;
        const email = form.email.value.toLowerCase();
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        // pass validation
        if(!/[A-Z]/.test(password)){
            toast.error("Password must have at least one capital letter");
            return;
        } else if(!/[a-z]/.test(password)){
            toast.error("Password must have at least one small letter");
            return;
        }

        // create user
        createUser(email, password)
            .then((result) => {
                setName(name);
                setPhotoURL(photoURL);
                console.log(result.user);
                form.reset();
                toast.success("User created successfully");
                navigate("/");

            })
            .catch((error) => {
                console.log(error)
                toast.error(error.message)
            });
    }

  return (
    <>
   
    <div className='min-h-screen flex justify-center items-center'>
    <div>
      <form onSubmit={handleRegister} className='my-10 flex flex-col justify-center items-center'>
        
        <input className='border-2 border-gray-400 mb-5' type="text" name='name' placeholder='Your Name' required />

        <input className='border-2 border-gray-400 mb-5' type="text" name='photoURL' placeholder='Photo URL' required />

                <input className='border-2 border-gray-400 mb-5' type="email" name='email' placeholder='Your E-Mail' required />

                <div className=' gap-1'>
                <input className='border-2 border-gray-400' type={showPass ? "text" : "password"} name="password" placeholder='Type Password' required />
                
                <div className='cursor-pointer flex justify-center items-center' onClick={() => setShowPass(!showPass)}>
                    {
                        showPass ? <FaEyeSlash /> : <FaEye />
                    }
                
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

