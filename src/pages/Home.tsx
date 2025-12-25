import Hero from "../components/sections/home/Hero";
import WhatWeOffer from "../components/sections/home/WhatWeOffer";
import Testimonial from "../components/sections/home/Testimonial";
import Features from "../components/sections/home/Features";
import HowItWorks from "../components/sections/home/HowItWorks";
import ContactUs from "../components/sections/home/ContactUs";
import WhyYouNeed from "../components/sections/home/WhyYouNeed";
import Insights from "../components/sections/home/Insights";
import RoadMap from "../components/sections/home/RoadMap";

export default function Home() {
    return (
        <>
            <Hero />
            <WhyYouNeed />
            <RoadMap />
            <WhatWeOffer />
            <Testimonial />
            <Features />
            <HowItWorks />
            <Insights />
            <ContactUs />
        </>
    );
}
