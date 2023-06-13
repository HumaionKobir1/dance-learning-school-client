import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClassCart = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const {refetch, data: classCart = []} = useQuery({
        queryKey: ['classCart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enroll?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    return [classCart, refetch]
    
};

export default useClassCart;




