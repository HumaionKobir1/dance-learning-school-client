import { useEffect, useState } from "react";
import Instructor from "./Instructor";
import Container from "../../../components/Share/Container";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(()=> {
        fetch('allInstructor.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
        
    }, [])
    console.log(instructors)

    return (
        <div className="md:mt-20 mt-12">
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
                <div className="flex justify-center">
                    <button className="bg-gradient-to-r mt-5 w-48 mx-auto from-purple-950 to-gray-800 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded shadow-lg">
                    View All Instructors
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default PopularInstructors;