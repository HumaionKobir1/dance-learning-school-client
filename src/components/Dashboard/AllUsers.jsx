import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res =await fetch('https://dance-learning-school-server-gamma.vercel.app/users')
        return res.json()
    })


    const handleMakeAdmin = user =>{
        console.log(user)
        fetch(`https://dance-learning-school-server-gamma.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                
                toast.success(`${user.name} is an Admin Now!`)
            }
        })
    }

    const handleMakeInstructor = user =>{
        console.log(user)
        fetch(`https://dance-learning-school-server-gamma.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                toast.success(`${user.name} is an Instructor Now!`)
            }
        })
    }


    const handleDelete = (user) => {
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
                fetch(`https://dance-learning-school-server-humaionkobir341-gmailcom.vercel.app/users/${user._id}`, {
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
        <div className="w-full max-h-full md:p-16">
            <Helmet>
                <title>Dance Learning | All users</title>
            </Helmet>
            <h3 className="text-2xl font-semibold my-4">Total Users: {users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>Remove User</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => <tr
                            key={user._id}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td className="flex gap-2">
                                {user.role === 'admin' ? 'admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-orange-400"><FaUserShield></FaUserShield></button> }
                                {user.role === 'instructor' ? 'Instructor' : <button onClick={()=>handleMakeInstructor(user)} className="btn btn-ghost btn-sm bg-orange-400">Instr</button>}
                            </td>
                            <td><button onClick={()=>handleDelete(user)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
</td>
                        </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;