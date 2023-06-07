import { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
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
                <form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-200" aria-hidden="true" />
                        </div>
                        <input
                        id="email-address"
                        name="email-address"
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
                    <div className="relative">
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
                    Sign In
                    </button>
                </div>
                </form>
                <div className="text-center">
                <p className="mt-2 text-sm text-gray-200">
                    Do not have an account?
                    <Link to='/signUp' className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign up
                    </Link>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Login;