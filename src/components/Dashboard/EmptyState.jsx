import { Link } from 'react-router-dom';
const EmptyState = ({ message, address }) => {
  return (
    <div className='h-screen gap-5 flex flex-col justify-center items-center pb-16 '>
      <p className='text-gray-600 text-xl lg:text-3xl'>{message}</p>
      <Link to={address}>
        <button className='bg-gradient-to-r mt-5 w-48 mx-auto from-purple-950 to-gray-800 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded shadow-lg'>Add Class</button>
      </Link>
    </div>
  )
}

export default EmptyState;