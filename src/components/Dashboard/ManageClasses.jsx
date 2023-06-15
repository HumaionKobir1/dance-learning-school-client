import Container from "../Share/Container";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { updateClassStatus } from "../../api/enrolled";

const ManageClasses = () => {
  
  const {data: classes = [], refetch} = useQuery(['classes'], async() => {
    const res =await fetch('https://dance-learning-school-server-gamma.vercel.app/classes')
    return res.json()
})


  const handleApprovedClass = item => {
    updateClassStatus(item._id, 'approved')
    .then(data => {
      console.log(data)
      refetch()
      toast('approved successful')
    })
    
  }
  const handleDenyClass = item => {
    updateClassStatus(item._id, 'deny')
    .then(data => {
      console.log(data)
      refetch()
      toast('deny successful')
    })
  }
  const handleFeedbackClass = item => {
    console.log(item)
  }

    return (
        <div className="pt-5">
              <h1 className='md:text-4xl border-b-2 pb-2 text-3xl md:mt-0 mt-24 font-semibold text-center text-slate-600 uppercase'>Total Classes: {classes.length}</h1>

              <Container>
                  <div className="grid md:grid-cols-3 justify-between items-center gap-5 mt-6 md:mt-10">
                      {
                          classes.map(item => <div key={item._id} className="bg-gradient-to-br from-purple-200 to-slate-500-200 rounded-lg shadow-lg p-4">
                          <img
                              src={item.image}
                              alt="Card Image"
                              className="w-full h-auto rounded-lg mb-4"
                          />
                          <h2 className="text-2xl font-bold text-purple-900 mb-2">{item.className}</h2>
                          <p>{item.email}</p>
                          <p className="text-gray-700 mb-2">{item.instructorName}</p>
                          <div className="flex justify-between">
                            <p className="text-gray-700 mb-2">Available Seats: {item.availableSeat}</p>
                            <p>Status: <span className="bg-purple-900 text-white px-1">{item.status}</span></p>
                          </div>
                          <div className="flex items-center justify-between">
                              <p className="text-gray-700 font-bold text-lg">$ {item.price}</p>
                              <button onClick={()=>handleApprovedClass(item)} className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                              Approved
                              </button>
                          </div>
                          <div className="flex justify-between items-center mt-3">
                              
                              <button onClick={()=>handleDenyClass(item)} className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                              Deny
                              </button>
                              <button onClick={()=>handleFeedbackClass(item)} className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                              Send feedback
                              </button>
                          </div>
                      </div>)
                      }
                  </div>
                  
              </Container>
          </div>
    );
};

export default ManageClasses;