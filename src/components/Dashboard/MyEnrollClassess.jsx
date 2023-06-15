import EmptyState from "./EmptyState";

const MyEnrollClasses = () => {

    return (
        <EmptyState
                message={'No Class Data Available!'}
                address={'/'}
                name={'Back Home'}
        ></EmptyState>
    )   

};

export default MyEnrollClasses;