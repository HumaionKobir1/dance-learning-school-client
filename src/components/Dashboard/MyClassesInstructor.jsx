import { useContext, useEffect, useState } from "react";
import { getClasses } from "../../api/classes";
import { AuthContext } from "../../providers/AuthProvider";
import EmptyState from "./EmptyState";

const MyClassesInstructor = () => {
    const {user} = useContext(AuthContext);
    const [classes, setClasses] = useState([]);
    const fetchClasses = () => getClasses(user?.email).then(data => setClasses(data))

    useEffect(()=> {
        fetchClasses()
    }, [user])

    const handleUpdate = () => {

    }
    return (
        <>
        {classes && Array.isArray(classes) && classes.length > 0 ? (
            <div >
            <h1 className="text-3xl font-semibold text-center mb-2">My all Classes: {classes.length}</h1>
            <hr />
        <div>
            {
                classes.map(item => <div
                key={item._id}
                 className="bg-gradient-to-br group w-2/6 from-purple-200 to-slate-500-200 mt-10 rounded-lg shadow-lg p-4">
                <img
                    src={item.image}
                    alt="Card Image"
                    className="w-full group-hover:scale-105 h-auto rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-purple-900 mb-2">{item.className}</h2>
                <p className="text-gray-700 mb-2">Status: <span className="bg-purple-900 text-white px-1">{item.status}</span></p>
                <p className="text-gray-700 mb-2">Enrolled Student: 0</p>
                <div className="flex items-center justify-between">
                    <p className="text-gray-700 font-bold text-lg">Feedback: </p>
                    <button onClick={()=>handleUpdate()} className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                    Update
                    </button>
                </div>
            </div>)
            }
        </div>
        </div>
        ) : (
            <EmptyState
                message={'No Class Data Available!'}
                address={'/dashboard/add-class'}
                name={'Add Class'}
            ></EmptyState>
        )}
        </>
    );
};

export default MyClassesInstructor;