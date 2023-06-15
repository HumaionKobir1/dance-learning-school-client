import EmptyState from "./EmptyState";

const MyEnrollClasses = () => {

    return (
        <EmptyState
                message={'No Class Data Available!'}
                address={'/dashboard/add-classes'}
        ></EmptyState>
    )   

};

export default MyEnrollClasses;