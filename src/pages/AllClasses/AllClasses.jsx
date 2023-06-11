import './allClass.css'
import ClassItems from '../Home/PopularClasses/ClassItems';
import {  useState } from 'react';
import Container from '../../components/Share/Container';
import { getAllClass } from '../../api/classes';

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  
  getAllClass()
  .then(data => setClasses(data))

    return (
            <div className="pt-28">
              <h1 className='md:text-4xl text-3xl md:mt-0 mt-24 font-semibold text-center text-slate-600 uppercase'>All Classes</h1>

              <Container>
                  <div className="grid md:grid-cols-3 justify-between items-center gap-5 mt-6 md:mt-14">
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

export default AllClasses;