
const ClassItems = ({items}) => {
    const {image, price, className, instructorName, availableSeat} = items;

    
    return (
        <div className="bg-gradient-to-br from-purple-200 to-slate-500-200 rounded-lg shadow-lg p-4">
            <img
                src={image}
                alt="Card Image"
                className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-900 mb-2">{className}</h2>
            <p className="text-gray-700 mb-2">{instructorName}</p>
            <p className="text-gray-700 mb-2">Available Seats: {availableSeat}</p>
            <div className="flex items-center justify-between">
                <p className="text-gray-700 font-bold text-lg">$ {price}</p>
                <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Book
                </button>
            </div>
        </div>
    );
};

export default ClassItems;