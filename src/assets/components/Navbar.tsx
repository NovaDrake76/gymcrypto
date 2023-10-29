
const Navbar = () => {
    return (
        <nav className="flex justify-center w-screen bg-gray-800 p-6 ">
            <div className="flex items-center w-full max-w-[1920px] justify-between ">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">GymCrypto</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            Home
                        </a>
                        <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            About
                        </a>
                        <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
                            Contact
                        </a>
                    </div>
                    <div>
                        <select className="bg-gray-700 text-white py-1 px-2 rounded-md">
                            <option value="en">EN</option>
                            <option value="es">PT-BR</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
