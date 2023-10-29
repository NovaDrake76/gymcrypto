import Hero from "./Hero"
import AboutUs from "./AboutUs"

const LandingPage = () => {

    return (
        <div className="flex flex-col md:px-12 py-4 gap-2  w-screen">
            <Hero />
            <AboutUs />
        </div>
    )
}

export default LandingPage
