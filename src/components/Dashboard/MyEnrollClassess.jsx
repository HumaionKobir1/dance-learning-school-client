
const MyEnrollClasses = () => {
    return (
        <div className="bg-gradient-to-br group from-purple-200 to-slate-500-200 rounded-lg shadow-lg p-4">
            <img
                src={image}
                alt="Card Image"
                className="w-full group-hover:scale-105 h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-900 mb-2">{className}</h2>
            <p className="text-gray-700 mb-2">{instructorName}</p>
            <div className="flex items-center justify-between">
                <button  className="btn bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Start Your Class
                </button>
            </div>
        </div>
    );
};

export default MyEnrollClasses;