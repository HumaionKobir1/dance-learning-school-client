import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm/CheckoutForm";
import useClassCart from "../../hook/useClassCart";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway}`)
const Payment = () => {
    const [classCart] = useClassCart();
    const total = classCart.reduce((sum, item) => sum + item.price, 0);

    console.log(classCart)
    return (
        <div className="w-full md:p-20 p-5">
            
            <Elements stripe={stripePromise}>
                <CheckoutForm price={total} classCart={classCart}></CheckoutForm>
            </Elements>
        </div>
        
    );
};

export default Payment;