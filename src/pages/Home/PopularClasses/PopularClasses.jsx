import { useEffect, useState } from "react";
import Container from "../../../components/Share/Container";
import ClassItems from "./ClassItems";
import { Link } from "react-router-dom";
import { getAllClass } from "../../../api/classes";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularClass = () => {
    AOS.init();
    const [classes, setClasses] = useState([]);
  
useEffect(() => {
    getAllClass()
    .then(data => setClasses(data.slice(0, 6)))
}, [])




  return (
    <div className="md:-mt-16">
        <h1 className='md:text-4xl text-3xl md:mt-0 mt-20 font-semibold text-center text-slate-600 uppercase'>Popular Classes</h1>

        <Container>
            <div  className="grid md:grid-cols-3 justify-between items-center gap-5 mt-6 md:mt-14">
                {
                    classes.map(item => <ClassItems
                        key={item._id}
                        items={item}
                    ></ClassItems>)
                }
            </div>
            <div data-aos="flip-right" className="flex justify-center">
                    <Link to='/allClasses' className="bg-gradient-to-r mb-2 mt-5 w-48 mx-auto from-purple-950 to-gray-800 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded shadow-lg">
                    View All Classes
                    </Link>
            </div>
            <hr />

        </Container>
    </div>
  );
};

export default PopularClass;
