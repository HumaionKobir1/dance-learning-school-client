import { useContext, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import {TbFidgetSpinner} from 'react-icons/tb'
import { saveUser } from "../../api/Auth";

const SignUp = () => {
    const { createUser, loading, setLoading, updateUserProfile, signInWithGoogle} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;



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
    console.log(name)
    setPasswordError(' ')

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.')
          }
      
          // Capital letter check
          if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must contain at least one capital letter.')
          }
      
          // Special character check
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordError('Password must contain at least one special character.')
          }

    // Image Upload
    const image = form.image.files[0]
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(imageData => {
     const imageUrl = (imageData.data.display_url)
      createUser(email, password)
      .then(result => {        
        console.log(result);
        updateUserProfile(name, imageUrl)
        .then(() => {
        const saveUser = {
                name: name,
                email: email,
                image: imageUrl
        }
        // save user to db
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
                toast.success('SignUp successful')
            }
          })

          navigate(from, {replace: true});
        })
        .catch(error => {
            setLoading(false);
            console.log(error.message)
            toast.error(error.message);
            
        })
      })
      .catch(error => {
          setLoading(false);
          console.log(error.message)
          toast.error(error.message);
          
      })

    })
    .catch(err => {
      setLoading(false);
      console.log(err.message)
      toast.error(err.message);
    })
    
  }

    // Handle Google signIn
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            const saveUser = {
                name: loggedUser.displayName,
                email: loggedUser.email,
                image: loggedUser.photoURL
        }
        // save user to db
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
                toast.success('Login successful')
            }
          })
            navigate(from, {replace: true});
        })
        .catch(error => {
            setLoading(false);
            toast.error(error.message);
            
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
                    <label htmlFor='image' className='block mb-2 text-sm'>
                        Select Image:
                    </label>
                    <input
                        required
                        type='file'
                        id='image'
                        name='image'
                        accept='image/*'
                    />
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

                        {passwordError && (
                        <p className="mt-2 text-xs text-red-500">{passwordError}</p>
                        )}
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
                <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:text-gray-400'>
                    SignUp with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <FcGoogle size={32} />

                <p>Continue with Google</p>
                </div>
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