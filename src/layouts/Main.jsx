import { Outlet } from "react-router-dom";
import Navber from "../components/Share/Navebar/Navber";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;