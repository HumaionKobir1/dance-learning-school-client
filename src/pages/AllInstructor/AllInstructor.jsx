import { useEffect, useState } from "react";
import Container from "../../components/Share/Container";
import Instructor from "../Home/PopularInstructors/Instructor";

const AllInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/instructor')
        .then(res => res.json())
        .then(data => setInstructors(data))
        
    }, [])
    console.log(instructors)

    return (
        <div className="pt-24">
            <h1 className="md:text-4xl text-3xl font-semibold text-center text-slate-600 uppercase mt-6">Popular Instructors</h1>
            <Container>
                <div className="grid md:grid-cols-3 justify-center items-center gap-5 mt-8 ">
                    {
                        instructors.map(detailsIn => <Instructor
                            key={detailsIn.id}
                            detailsIn={detailsIn}
                        ></Instructor>)
                    }
                </div>
                
            </Container>
        </div>
    );
};

export default AllInstructor;