
const Instructor = ({detailsIn}) => {
    const {name, image, email} = detailsIn;
    return (
        <div className="bg-gradient-to-br group from-purple-200 to-slate-500-200 rounded-lg shadow-lg p-4">
        <img
            src={image}
            alt="Card Image"
            className="w-full  group-hover:scale-105 h-72 rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold text-purple-900 ">{name}</h2>
        <p className="text-gray-700 font-semibold text-lg">{email}</p>

        <div className="flex items-center justify-between mt-5">
            <button className="bg-gray-600 w-full hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
            View Profile
            </button>
        </div>
    </div>
    );
};

export default Instructor;