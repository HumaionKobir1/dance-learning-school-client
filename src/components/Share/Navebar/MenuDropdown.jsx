import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from './Avatar'
import { useCallback,  useContext,  useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

const MenuDropdown = () => {
  const {user, logOut} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])
  return (
    <div className='relative text-black'>
      <div className='flex flex-row items-center gap-3 '>
        
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition '
        >
          <AiOutlineMenu className='text-white'/>
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[200px] bg-white overflow-hidden right-10 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            
           
          {user ? (
              <>
              <Link
                  to='/dashboard'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Dashboard
              </Link>

              <div
                onClick={logOut}
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                Logout
              </div>
              
              </>
              
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/signUp'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
              </>
            )}
           
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown;