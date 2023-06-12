import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClassCart = () => {
    const {user} = useContext(AuthContext);

    const {refetch, data: classCart = []} = useQuery({
        queryKey: ['classCart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enroll?email=${user?.email}`)
            return res.json();
        },
    })
    return [classCart, refetch]
    
};

export default useClassCart;




