import { Fade, Slide } from 'react-awesome-reveal';
import bannerImg from '../../../assets/images/banner/banner-1.jpg'
import Container from '../../../components/Share/Container';
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg2 from '../../../assets/images/banner/banner-2.jpg'
import bannerImg3 from '../../../assets/images/banner/banner-2.jpg.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./carousel.css";

// import required modules
import { Navigation } from "swiper";


const Banner = () => {
    return (


        <div className="w-full  pt-10 bg-gray-100 h-screen  flex items-center justify-center">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:-mt-10 ">
            
            <SwiperSlide>
                <Container>
                    <div className="rounded-lg shadow-lg md:p-8 py-5 px-3 md:flex gap-3 justify-center items-center md:mt-0 mt-14">
                    <div className="w-full">
                        <Slide>
                            <h1 className='md:text-6xl text-center md:text-start text-4xl font-bold text-cyan-500 uppercase'>Let's Dance</h1>
                            <h1 className='md:text-6xl text-center md:text-start text-4xl font-semibold uppercase'>with us</h1>
                            <h5 className='text-lg text-center md:text-start  text-orange-300 uppercase my-4'>Ballet | line dance | hip hop</h5>
                            <h1 className="md:text-3xl md:block hidden text-2xl text-center md:text-start font-bold mb-4">Dance classes for everyone. </h1>
                            
                        </Slide>
                        <Fade delay={1e3} cascade damping={1e-1}>
                        <p className="text-lg text-center md:text-start">Unlimited access to 100+ Lessons for all skill levels. </p>
                        <p className='md:block hidden'>Learn dance moves and routines through watching videos and watching yourself in the mirror to see where you can make improvements.</p>
                        <div className='flex justify-center md:justify-start'>
                            <button className='text-2xl  font-semibold px-4 py-2 bg-gray-600 hover:bg-black text-white rounded-lg mt-3 '>Get Started</button>
                        </div>
                        </Fade>
                    </div>
                        <div className="w-full flex justify-center md:h-full md:mt-0 mt-5 h-[280px]">
                            <img
                                src={bannerImg}
                                alt="Banner Image"
                                className=" animate-float md:h-[429px] w-full"
                            />
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container>
                    <div className="rounded-lg shadow-lg md:p-8 py-5 px-3 md:flex gap-3 justify-center items-center md:mt-0 mt-14">
                    <div className="w-full">
                        <Slide>
                            <h1 className='md:text-6xl text-center md:text-start text-4xl font-bold text-cyan-500 uppercase'>Let's Dance</h1>
                            <h1 className='md:text-6xl text-center md:text-start text-4xl font-semibold uppercase'>with us</h1>
                            <h5 className='text-lg text-center md:text-start  text-orange-300 uppercase my-4'>Ballet | line dance | hip hop</h5>
                            <h1 className="md:text-3xl md:block hidden text-2xl text-center md:text-start font-bold mb-4">Dance classes for everyone. </h1>
                            
                        </Slide>
                        <Fade delay={1e3} cascade damping={1e-1}>
                        <p className="text-lg text-center md:text-start">Unlimited access to 100+ Lessons for all skill levels. </p>
                        <p className='md:block hidden'>Learn dance moves and routines through watching videos and watching yourself in the mirror to see where you can make improvements.</p>
                        <div className='flex justify-center md:justify-start'>
                            <button className='text-2xl  font-semibold px-4 py-2 bg-gray-600 hover:bg-black text-white rounded-lg mt-3 '>Get Started</button>
                        </div>                        </Fade>
                    </div>
                        <div className="w-full flex justify-center  md:h-full md:mt-0 mt-5 h-[280px]">
                            <img
                                src={bannerImg2}
                                alt="Banner Image"
                                className=" animate-float md:h-[429px] w-full"
                            />
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container>
                    <div className="rounded-lg shadow-lg md:p-8 py-5 px-3 md:flex gap-3 justify-center items-center md:mt-0 mt-14">
                    <div className="w-full">
                        <Slide>
                            <h1 className='md:text-6xl text-center md:text-start text-4xl font-bold text-cyan-500 uppercase'>Let's Dance</h1>
                            <h1 className='md:text-6xl text-center md:text-start text-4xl font-semibold uppercase'>with us</h1>
                            <h5 className='text-lg text-center md:text-start  text-orange-300 uppercase my-4'>Ballet | line dance | hip hop</h5>
                            <h1 className="md:text-3xl md:block hidden text-2xl text-center md:text-start font-bold mb-4">Dance classes for everyone. </h1>
                            
                        </Slide>
                        <Fade delay={1e3} cascade damping={1e-1}>
                        <p className="text-lg text-center md:text-start ">Unlimited access to 100+ Lessons for all skill levels. </p>
                        <p className='md:block hidden'>Learn dance moves and routines through watching videos and watching yourself in the mirror to see where you can make improvements.</p>
                        <div className='flex justify-center md:justify-start'>
                            <button className='text-2xl  font-semibold px-4 py-2 bg-gray-600 hover:bg-black text-white rounded-lg mt-3 '>Get Started</button>
                        </div>                        </Fade>
                    </div>
                        <div className="w-full flex justify-center md:h-full md:mt-0 mt-5 h-[280px]">
                            <img
                                src={bannerImg3}
                                alt="Banner Image"
                                className=" animate-float h-80 md:h-[430px] w-full"
                            />
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            
        </Swiper>
    </div>
    );
};

export default Banner;