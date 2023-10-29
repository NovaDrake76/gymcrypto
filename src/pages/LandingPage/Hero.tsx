import MainButton from "../../assets/components/MainButton";
import { BsArrowDownRight } from "react-icons/bs";

const Hero = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="relative flex flex-col md:justify-center w-full max-w-[1920px] gap-4 rounded-md bg-blue-500 p-16 pb-0 md:custom-notch min-h-[550px]">
                <div className="flex flex-col md:flex-row items-center justify-between z-10">
                    <div className="flex flex-col gap-2 text-start">
                        <h1 className="md:text-7xl font-bold">GYM</h1>
                        <h2 className="md:text-6xl font-bold ml-12">CRYPTO</h2>
                    </div>
                    <MainButton text="Get Started" icon={<BsArrowDownRight style={{
                        fontSize: '1.5rem'
                    }} />} />
                </div>
                <div className="flex relative w-full h-full ">
                    <span className='max-w-sm z-10'>
                        Lorem ipsum dolor sit am et, consectetur adipiscing elit. Nulla nec eros sed urna dignissim sodales. Donec
                    </span>
                    <div className="absolute left-[calc(50%-200px)] -bottom-48 items-center rounded-full" style={{
                        background: 'radial-gradient(circle, #2BA9E7, #3B82F6)',
                        width: '400px',
                        padding: '3rem',
                    }}>
                        <img src="/hero.webp" alt="mascot lifting dumbbells" className="rounded-full" width={400} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
