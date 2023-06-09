import { Link } from "react-router-dom";

const NavbarItems = () => {
    return (
        <div className='border-[1px] md:p-2 rounded-xl shadow-sm hover:shadow-md transition'>
        <div className='flex flex-row items-center justify-between'>
            
            <Link
              to='/'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100 hover:text-black transition font-semibold'
            >
              Home
            </Link>
             
             <Link
              to='/allInstructor'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100  hover:text-black transition font-semibold'
            >
              Instructors
            </Link>
            
            <Link
              to='/allClasses'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100 hover:text-black transition font-semibold'
            >
              Classes
            </Link>
        </div>
        </div>
    );
};

export default NavbarItems;