import { Outlet } from "react-router-dom";
import Navber from "../components/Share/Navebar/Navber";
import Footer from "../components/Share/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;