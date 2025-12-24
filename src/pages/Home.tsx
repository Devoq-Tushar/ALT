import Hero from "../components/sections/Hero";
import WhatWeOffer from "../components/sections/WhatWeOffer";
import WhatWeSolve from "../components/sections/WhatWeSolve";
import HowWeDoIt from "../components/sections/HowWeDoIt";
import StartWithALT from "../components/sections/StartWithALT";

export default function Home() {
    return (
        <>
            <Hero />
            <WhatWeOffer />
            <WhatWeSolve />
            <HowWeDoIt />
            <StartWithALT />


            {/* Glow image left */}
            <div className="absolute top-[2000px] sm:top-[1750px] left-[-420px] h-[750px] w-[750px] sm:h-[1100px] sm:w-[900px] z-1">
                <img src="assets/images/glow-img-1.svg" alt="" className="blur-[100px]" />
            </div>

            {/* Glow image right */}
            <div className="absolute top-[3400px] sm:top-[2400px] right-[-420px] h-[750px] w-[750px] sm:h-[1100px] sm:w-[900px] z-1">
                <img src="assets/images/glow-img-1.svg" alt="" className="blur-[100px]" />
            </div>

            {/* Glow image right What we offer mobile */}
            <div className="sm:hidden block absolute top-[1250px] sm:top-20 right-[-280px] h-[690px] w-[610px] z-1 rotate-90">
                <img src="assets/images/glow-img-1.svg" alt="" className="blur-[100px] sm:blur-[50px]" />
            </div>
        </>
    );
}
