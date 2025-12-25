import Navbar from "../components/sections/what-we-offer/Navbar";
import Footer from "../components/sections/what-we-offer/Footer";
import { Outlet } from "react-router-dom";


export default function OfferLayout() {
    return (
        <>
            <Navbar />
            <main className="overflow-hidden relative"><Outlet /></main>
            <Footer />
        </>
    );
}
