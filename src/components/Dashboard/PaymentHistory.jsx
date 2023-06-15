import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import { getPayment } from "../../api/classes";

const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
    const [payments, setPayments] = useState([]);
    const fetchPayment = () => getPayment(user?.email).then(data => setPayments(data))

    useEffect(()=> {
        fetchPayment()
    }, [user])
    return (
        <div className="w-full max-h-full md:p-16">
            <Helmet>
                <title>Dance Learning | All users</title>
            </Helmet>
            <h3 className="text-2xl font-semibold my-4">Total Payment History: {payments.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>TransactionId</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        payments.map((payment, index) => <tr
                            key={payment._id}
                        >
                            <th>{index + 1}</th>
                            <td>{payment.date}</td>
                            <td>{payment.email}</td>
                            <td>{payment.transactionId}</td>
                            
                        </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;