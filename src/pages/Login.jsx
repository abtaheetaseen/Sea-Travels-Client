import React, { useContext, useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const providerGoogle = new GoogleAuthProvider();
    const providerGitHub = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, providerGoogle)
        .then(result => {
            console.log(result.user)
            toast.success("Google login successfully");
            navigate("/");
        })
        .catch((error) => {
            console.log(error.message)
        });
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, providerGitHub)
        .then(result => {
            console.log(result.user)
            toast.success("GitHub login successfully");
            navigate("/");
        })
        .catch((error) => {
            console.log(error.message)
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // sign in
        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
                form.reset();
                toast.success("User logged in successfully")
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message)
                form.reset()
            });
    }

    return (
        <>
            <div className='min-h-screen flex justify-center items-center'>

                <div>
                    <form onSubmit={handleLogin} className='my-10 flex flex-col justify-center items-center'>
                        <div>
                            <input className='border-2 border-gray-400 mb-5' type="email" name='email' placeholder='Your E-Mail' required />

                            <div className='flex justify-center items-center gap-1'>
                                <input className='border-2 border-gray-400' type={showPass ? "text" : "password"} name="password" placeholder='Type Password' required />

                                <div className='cursor-pointer' onClick={() => setShowPass(!showPass)}>
                    {
                        showPass ? <FaEyeSlash /> : <FaEye />
                    }
                
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
                            <button onClick={handleGoogleSignIn} className='btn btn-neutral btn-sm text-white'>
                                <FaGoogle />
                            </button>
                            <button onClick={handleGitHubSignIn} className='btn btn-neutral btn-sm text-white'>
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

