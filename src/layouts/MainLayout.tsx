import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

type Props = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            <main className="overflow-hidden relative">{children}</main>
            <Footer />
        </>
    );
}
