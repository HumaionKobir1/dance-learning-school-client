import  { useState } from 'react';

const AddClassForm = () => {
  const [className, setClassName] = useState('');
  const [classImage, setClassImage] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [price, setPrice] = useState('');

  // Assuming you have the instructor information from the logged-in user
  const instructorName = 'John Doe';
  const instructorEmail = 'john.doe@example.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the form data and create a class in the database with status: 'pending'
    // You can use an API call or any other method for this
    // Example: createClass(className, classImage, instructorName, instructorEmail, availableSeats, price);
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
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 shadow-sm"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className=' px-4 pt-6 bg-white w-full md:w-1/2  m-auto rounded-lg'>
              <div className='file_upload px-5 py-2 relative border-2 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-gray-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-black'>
                      Upload Image
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
          value={instructorName}
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
          value={instructorEmail}
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
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 shadow-sm"
          value={availableSeats}
          onChange={(e) => setAvailableSeats(e.target.value)}
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
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500 shadow-sm"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-800 w-full shadow-lg"
      >
        Add
      </button>
    </form>
    </>
  );
};

export default AddClassForm;
