import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useClassCart from "../../hook/useClassCart";

const MyClass = () => {
    const [classCart, refetch] = useClassCart();
    const total = classCart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/enroll/${item._id}`, {
                    method: 'DELETE',
                    
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch()
                        
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            ) 
                    }
                })
                
        }
    })
    }
    return (
        <div className="w-full mx-auto bg-white rounded-lg shadow-lg max-h-full md:p-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dance Learning || My Class</title>
            </Helmet>
            <div className="bg-white w-full p-8 border-2">
                <div className="uppercase flex justify-between border p-2">
                    <h3 className="md:text-2xl ">Total Class: {classCart.length}</h3>
                    <h3 className="md:text-2xl text-lg">Total Price: ${total}</h3>
                    <button className="btn btn-sm border-none md:mr-10 bg-[#D1A054]"><Link to='/dashboard/payment'>pay</Link> </button>
                </div>
                
                <div className="overflow-x-auto w-full mt-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
                            <label>
                                #
                            </label>
                            </th>
                            <th>Class Photo</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            classCart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>

                                <td className="text-xl font-semibold">
                                    {item.className}
                                </td>
                                <td className="font-semibold">
                                    {item.instructorName}
                                </td>
                                <td className="text-start">
                                    ${item.price}
                                </td>
                                <th>
                                <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                        


                        </tbody>
                        
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;