
const MyClassesInstructor = () => {

    const handleUpdate = () => {

    }
    return (
        <div >
            <h1 className="text-3xl font-semibold text-center mb-2">My all Classes</h1>
            <hr />
        <div className="bg-gradient-to-br w-2/6 from-purple-200 to-slate-500-200 mt-10 rounded-lg shadow-lg p-4">
            <img
                src=""
                alt="Card Image"
                className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-900 mb-2">className</h2>
            <p className="text-gray-700 mb-2">Status: </p>
            <p className="text-gray-700 mb-2">Enrolled Student: </p>
            <div className="flex items-center justify-between">
                <p className="text-gray-700 font-bold text-lg">Feedback: </p>
                <button onClick={()=>handleUpdate()} className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Update
                </button>
            </div>
        </div>
        </div>
    );
};

export default MyClassesInstructor;