import  { useContext, useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
import { AuthContext } from '../../providers/AuthProvider';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddClassForm = () => {
    const {user} = useContext(AuthContext);
//   const [classImage, setClassImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [UploadButtonText, setUploadButtonText] = useState('Upload Image')
  

  const handleImageChange = image => {
    setUploadButtonText(image.name);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const className = form.name.value;
    const instructorName = user.displayName
    const instructorEmail =  user.email
    const availableSeat = form.seats.value;
    const price = form.price.value;

    // upload image in ImageBB
    const image = form.image.files[0]
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    fetch(url, {
      method: 'POST',
      body: formData
    })

    .then(res => res.json())
    .then(data => {
      const classData = {
        image: data.data.display_url,
        className,
        instructorName,
        instructorEmail,
        availableSeat,
        price,
        host: {
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email,
        }
      }
      console.log(classData)
      setLoading(false);
    })
    
  };

  return (
    <>
        <h1 className='md:text-4xl text-3xl font-semibold mb-5 text-center text-slate-700'>ADD YOUR CLASS</h1>

    <form onSubmit={handleSubmit} className="md:w-3/4 w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4 md:flex">
        <div className="w-full mr-2">
          <label htmlFor="className" className="block text-gray-700 font-bold mb-2">
            Class Name
          </label>
          <input
            type="text"
            id="className"
            name='name'
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 shadow-sm"
            required
          />
        </div>
        <div className=' px-4 pt-6 bg-white w-full md:w-1/2  m-auto rounded-lg'>
              <div className='file_upload px-5 py-2 relative border-2 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                    onChange={event => {handleImageChange(event.target.files[0])}}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-gray-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-black'>
                      {UploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
      </div>
      <div className="mb-4">
        <label htmlFor="instructorName" className="block text-gray-700 font-bold mb-2">
          Instructor Name
        </label>
        <input
          type="text"
          id="instructorName"
          className="w-full border border-gray-300 p-2 rounded-md bg-gray-100 cursor-not-allowed shadow-sm"
          value={user.displayName}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instructorEmail" className="block text-gray-700 font-bold mb-2">
          Instructor Email
        </label>
        <input
          type="email"
          id="instructorEmail"
          className="w-full border border-gray-300 p-2 rounded-md bg-gray-100 cursor-not-allowed shadow-sm"
          value={user.email}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label htmlFor="availableSeats" className="block text-gray-700 font-bold mb-2">
          Available Seats
        </label>
        <input
          type="number"
          id="availableSeats"
          name='seats'
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          name='price'
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 shadow-sm"
          required
        />
      </div>
      <button
            type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                {loading?<TbFidgetSpinner size={24} className='mx-auto animate-spin'></TbFidgetSpinner> : 'Sign In'}

                    
        </button>
    </form>
    </>
  );
};

export default AddClassForm;
