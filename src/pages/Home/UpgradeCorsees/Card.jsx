import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({card}) => {
    const {title, img, description, id} = card;
    AOS.init()
    const [selectedId, setSelectedId] = useState(null)

 

  return (
    <>
    
    <motion.div data-aos="slide-up" layoutId={card.id} onClick={() => setSelectedId(id)}>
    <img
        className="w-full h-64 object-cover"
        src={img}
        alt="Card"
      />
    <motion.h5 className="font-bold text-xl mb-1">{title}</motion.h5>
    <motion.h2 className="text-gray-700 text-base">{description}</motion.h2>
    </motion.div>

    <AnimatePresence data-aos="slide-up">
    {selectedId && (
        <motion.div layoutId={selectedId}>
        <img src={img} alt="" />
        <motion.h5 className="font-bold text-xl mb-1">{title}</motion.h5>
        <motion.h2 className="text-gray-700 text-base">{description}</motion.h2>
        <motion.button onClick={() => setSelectedId(null)} />
        </motion.div>
    )}
    </AnimatePresence>
    {/* <div
      className="max-w-md mx-auto rounded overflow-hidden shadow-lg"
    >
      <img
        className="w-full h-64 object-cover"
        src={img}
        alt="Card"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}.</p>
      </div>
    </div> */}
    </>
  );
};

export default Card;