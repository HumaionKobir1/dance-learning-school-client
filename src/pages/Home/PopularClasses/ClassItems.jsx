import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { updateStatus } from "../../../api/enrolled";
import useClassCart from "../../../hook/useClassCart";

const ClassItems = ({items}) => {
    const {image, price, className, instructorName, availableSeat, _id} = items;
    const {user, role} = useContext(AuthContext);
    const [, refetch] = useClassCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleEnrollClass = items => {
        console.log(items);
        if(user){
            const enrollClasses = {
                classId: _id,
                image,
                email: user.email,
                price,
                className,
                instructorName

            }
            fetch('http://localhost:5000/enroll', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(enrollClasses)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    updateStatus(items._id, true)
                    .then(data => {
                        refetch()
                        console.log(data)
                        toast.success('You are Successfully Enrolled')
                    })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}});
                }
              })
        }
    }
    
    return (
        <div className="bg-gradient-to-br group from-purple-200 to-slate-500-200 rounded-lg shadow-lg p-4">
            <img
                src={image}
                alt="Card Image"
                className="w-full group-hover:scale-105 h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-900 mb-2">{className}</h2>
            <p className="text-gray-700 mb-2">{instructorName}</p>
            <p className="text-gray-700 mb-2">Available Seats: {availableSeat}</p>
            <div className="flex items-center justify-between">
                <p className="text-gray-700 font-bold text-lg">$ {price}</p>
                <button disabled={role === 'admin' || role === 'instructor'  } onClick={()=>handleEnrollClass(items)} className="btn bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Enroll
                </button>
            </div>
        </div>
    );
};

export default ClassItems;