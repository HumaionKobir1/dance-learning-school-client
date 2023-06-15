import  { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { SiGoogleclassroom, SiGooglepodcasts } from 'react-icons/si'
import Logo from '../Share/Navebar/Logo'
import { FaMoneyCheck, FaUsers } from 'react-icons/fa'
import useClassCart from '../../hook/useClassCart'


const Sidebar = () => {
  const [classCart] = useClassCart();
  console.log(classCart)
  const navigate = useNavigate()
  const { user, logOut, role } = useContext(AuthContext)
  const [isActive, setActive] = useState('false')
  const isInstructor = role === 'instructor';
  const isAdmin = role === 'admin';
  const isStudent = role === 'student'
  
  console.log(isInstructor, isAdmin, isStudent)

  
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  const handleLogOut = () => {
    logOut()
    navigate('/')
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className='w-full hidden md:flex py-2 justify-center items-center bg-black mx-auto'>
              <Logo />
            </div>
            <div className='flex flex-col items-center mt-6 -mx-2'>
              <Link to='/dashboard'>
                <img
                  className='object-cover w-24 h-24 mx-2 rounded-full'
                  src={user?.photoURL}
                  alt='avatar'
                  referrerPolicy='no-referrer'
                />
              </Link>
              <Link to='/dashboard'>
                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                  {user?.displayName}
                </h4>
              </Link>
              <Link to='/dashboard'>
                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          {
            isInstructor ? <>
            <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              <>
                <hr />
                {/* Menu Links */}
                <NavLink
                  to='add-class'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <SiGoogleclassroom className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Add Class</span>
                </NavLink>

                <NavLink
                  to='my-classes'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <SiGoogleclassroom className='w-5 h-5' />

                  <span className='mx-4 font-medium'>My Classes</span>
                </NavLink>
              </>
            </nav>
          </div>
            </>

             : isAdmin ? 
            
            <>
            <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              <>
                <hr />
                {/* Menu Links */}
                <NavLink
                  to='manage-class'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <SiGoogleclassroom className='w-5 h-5' />

                  <span className='mx-4 font-medium'>Manage Classes</span>
                </NavLink>
              </>
            </nav>
          </div>

          <div className='flex flex-col justify-between flex-1 -mt-4'>
            <nav>
              <>
                {/* Menu Links */}
                <NavLink
                  to='all-users'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <FaUsers className='w-5 h-5' />

                  <span className='mx-4 font-medium'>All Users</span>
                </NavLink>
              </>
            </nav>
          </div>
            </>
            :
            <>
            <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              <>
                <hr />
                {/* Menu Links */}
                <NavLink
                  to='my-class'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <SiGoogleclassroom className='w-5 h-5' />

                  <span className='mx-4 font-medium'>My Selected Classes</span>
                  <div className='badge badge-secondary'>{classCart?.length || 0 }</div>
                </NavLink>

                <NavLink
                  to='my-enroll-class'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <SiGooglepodcasts className='w-5 h-5' />

                  <span className='mx-4 font-medium'>My Enrolled Classes</span>
                </NavLink>

                <NavLink
                  to='my-payments'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <FaMoneyCheck className='w-5 h-5' />

                  <span className='mx-4 font-medium'>My Payment History</span>
                </NavLink>
              </>
            </nav>
          </div>
            </>
          }
        </div>

        <div>
          <hr />
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar