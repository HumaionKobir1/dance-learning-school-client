import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../../../components/Share/Container";

const UpgradeCorses = () => {
    const [cards, setCards] = useState([]);


    useEffect(() => {
        fetch('upgradeData.json')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        
    }, [])


    return (
        <Container>
            <hr />
            <div className="md:mt-16 mt-10">
            <h1 className="text-3xl font-semibold text-center text-gray-800 ">Undergraduate courses</h1>
            <p className="font-bold text-center text-orange-400"> Click The cart and see Beautiful animation and see undergraduate course</p>
                <div className="grid md:grid-cols-3 justify-center items-center gap-5 mt-8 p-5 bg-gray-200">
                    {

                        cards.map(card => <Card
                            key={card.id}
                            card={card}
                        ></Card>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default UpgradeCorses;