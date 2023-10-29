interface MainButtonProps {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    color?: "primary" | "secondary";
}

const MainButton = ({ text, icon, onClick, color = "primary" }: MainButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center bg-transparent border-none hover:border-none transition-none p-0"
        >
            <div className={`rounded-full border-2 py-3 px-8 uppercase ${color === "primary" ? 'border-white text-white' : 'border-black text-black'}`}>
                {text}
            </div>
            <div className={`rounded-full border-2 p-3 text-black z-10 -ml-5 
            ${color === "primary" ? 'bg-gray-200 border-white' : 'bg-white border-black'}`}>{icon}
            </div>
        </button>
    );
};

export default MainButton;
