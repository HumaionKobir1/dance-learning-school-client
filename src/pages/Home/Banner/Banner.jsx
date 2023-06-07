import bannerImg from '../../../assets/images/banner/banner-1.jpg'
import Container from '../../../components/Share/Container';
const Banner = () => {
    return (
        <div className="bg-gray-100 h-screen  flex w-full items-center justify-center">
        <Container>
            <div className="rounded-lg shadow-lg md:p-8 py-5 px-3 flex justify-center items-center">
                <div className="w-full">
                    <h1 className="md:text-4xl text-3xl font-bold mb-4">Dance classes for everyone. </h1>
                    <p className="text-lg">Unlimited access to 100+ Lessons for all skill levels. </p>
                    <button className='text-2xl font-semibold px-4 py-2 bg-gray-600 hover:bg-black text-white rounded-lg mt-3 '>Get Started</button>
                </div>
                <div className="w-full flex justify-center md:h-full h-[280px]">
                    <img
                        src={bannerImg}
                        alt="Banner Image"
                        className=" animate-float"
                    />
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Banner;