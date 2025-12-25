import Navbar from "../components/sections/home/Navbar";
import Footer from "../components/sections/home/Footer";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
    return (
        <>
            <Navbar />
            <main className="overflow-hidden relative">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
