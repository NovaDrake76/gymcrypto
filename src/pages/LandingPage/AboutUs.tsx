import MainButton from "../../assets/components/MainButton";
import { BsArrowDownRight } from "react-icons/bs";

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full ">
            <div className="flex bg-white w-full custom-top-notch h-8 md:-mt-6 " />
            <div className="relative flex flex-col justify-center w-full max-w-[1920px] gap-8 rounded-md bg-white p-16 pt-0 custom-notch-top min-h-[550px]">
                <h3 className="text-5xl font-bold text-center text-black -mt-10">ABOUT US</h3>
                <div className="flex flex-col md:flex-row relative w-full h-full ">
                    <div className="md:w-[45%]">
                        <img src="/hero.webp" alt="About Us" className="rounded-lg" width={400} />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center items-start text-gray-500 gap-4 px-12 border-l-[#d5d6d8] border-l-2">
                        <span className='max-w-sm z-10'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </span>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
                            <MainButton text="Learn More" color="secondary" icon={<BsArrowDownRight style={{ fontSize: '1.5rem' }} />} />
                            <MainButton text="Contact Us" color="secondary" icon={<BsArrowDownRight style={{ fontSize: '1.5rem' }} />} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
