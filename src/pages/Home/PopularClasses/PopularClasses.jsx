import { useEffect, useState } from "react";
import Container from "../../../components/Share/Container";
import ClassItems from "./ClassItems";

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
  
    useEffect(()=> {
        fetch('allClass.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    }, [])




  return (
    <div className="-mt-16">
        <h1 className='text-4xl font-semibold text-center text-slate-600 uppercase'>Popular Classes</h1>

        <Container>
            <div className="grid grid-cols-3 justify-between items-center gap-5 mt-14">
                {
                    classes.map(item => <ClassItems
                        key={item.id}
                        items={item}
                    ></ClassItems>)
                }
            </div>
        </Container>
    </div>
  );
};

export default PopularClass;
