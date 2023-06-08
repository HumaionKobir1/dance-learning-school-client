import { useContext, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaImage, FaLock, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import {TbFidgetSpinner} from 'react-icons/tb'

const SignUp = () => {
    const { createUser, loading, setLoading, updateUserProfile} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;
        console.log(name, email, password, image)

        createUser(email, password)
        .then(result => {
            console.log(result);
            updateUserProfile(name, image)
            toast.success('User create successful')
            navigate(from, {replace: true});
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    return (
        <div
            className="relative bg-img flex items-center justify-center h-screen"
            
            >
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            <div className="bg-gradient-to-r md:w-2/5 w-full  text-white py-10 px-6 rounded-lg shadow-lg relative z-10">
                <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">
                    Sign in to your account
                </h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="username" className="sr-only">
                        Username
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-200" aria-hidden="true" />
                        </div>
                        <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        className="appearance-none  bg-black opacity-70 rounded-none relative block w-full px-3 py-3 pl-10 placeholder-gray-200 border border-gray-300 text-gray-200 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Username"
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="photo-url" className="sr-only">
                        Profile Photo URL
                    </label>
                    <div className="relative mt-3">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaImage className="h-5 w-5 text-gray-200" aria-hidden="true" />
                        </div>
                        <input
                        id="photo-url"
                        name="image"
                        type="text"
                        autoComplete="off"
                        className="appearance-none bg-black opacity-70  rounded-none relative block w-full px-3 py-3 pl-10 placeholder-gray-200 border border-gray-300 text-gray-200 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Profile Photo URL"
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <div className="relative  mt-3">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-200" aria-hidden="true" />
                        </div>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-3 pl-10 placeholder-gray-300 border border-gray-300 text-white bg-black opacity-70 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        />
                    </div>
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <div className="relative  mt-3">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="h-5 w-5 text-gray-200" aria-hidden="true" />
                        </div>
                        <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block bg-black opacity-70 w-full px-3 py-3 pl-10 placeholder-gray-300 border border-gray-300 text-gray-100 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        {showPassword ? (
                            <FaEyeSlash
                            className="h-5 w-5 text-gray-200 cursor-pointer"
                            onClick={handleTogglePassword}
                            aria-label="Hide Password"
                            />
                        ) : (
                            <FaEye
                            className="h-5 w-5 text-gray-200 cursor-pointer"
                            onClick={handleTogglePassword}
                            aria-label="Show Password"
                            />
                        )}
                        </div>
                    </div>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-200">
                        Remember me
                    </label>
                    </div>

                    <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                    </a>
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    {loading?<TbFidgetSpinner size={24} className='mx-auto animate-spin'></TbFidgetSpinner> : 'Sign Up'}

                    
                    </button>
                </div>
                </form>
                <div className="text-center">
                <p className="mt-2 text-sm text-gray-200">
                    Do not have an account?
                    <Link to='/login' className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign In
                    </Link>
                </p>
                </div>
            </div>
        </div>
        
    );
};

export default SignUp;