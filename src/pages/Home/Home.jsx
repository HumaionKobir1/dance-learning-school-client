import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import UpgradeCorses from "./UpgradeCorsees/UpgradeCorses";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <UpgradeCorses></UpgradeCorses>
        </div>
    );
};

export default Home;