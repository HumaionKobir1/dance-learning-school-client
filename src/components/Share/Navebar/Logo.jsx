import { Link } from "react-router-dom";
import logoImg from '../../../assets/images/logo/logo.png'
const Logo = () => {
    return (
        <Link to='/'>
            <img className="w-[50px] md:w-[70px]" src={logoImg} alt="logo" width='90' height='90' />
        </Link>
    );
};

export default Logo;