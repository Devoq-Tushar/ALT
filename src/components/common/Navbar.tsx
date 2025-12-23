import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.05)]">
            <div className="container flex items-center justify-between py-4 md:py-6">

                {/* Logo */}
                <a href="#">
                    <img src="assets/Logo/alt-logo.svg" alt="" className="w-full md:h-full h-5" />
                </a>
                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <div className="flex gap-[30px] items-center">
                        <a href="#" className="text-text-primary font-medium hover:text-text-blue transition-colors duration-200 text-[14px] whitespace-nowrap">Whitepaper</a>
                        <a href="#" className="text-text-primary font-medium hover:text-text-blue transition-colors duration-200 text-[14px] whitespace-nowrap">What we do</a>
                        <a href="#" className="text-text-primary font-medium hover:text-text-blue transition-colors duration-200 text-[14px] whitespace-nowrap">Why Alt?</a>
                        <a href="#" className="text-text-primary font-medium hover:text-text-blue transition-colors duration-200 text-[14px] whitespace-nowrap">About Us</a>
                        <a href="#contact-us" className="text-text-primary font-medium hover:text-text-blue transition-colors duration-200 text-[14px] whitespace-nowrap">Contact</a>

                        <div className="flex gap-1 items-center cursor-pointer">
                            <a href="#" className="text-text-primary font-medium hover:text-text-blue transition-colors duration-200 text-[14px] whitespace-nowrap">
                                HHI Benchmarks
                            </a>
                            <img src="assets/icons/Huge-icon.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* Desktop SignUp Button */}
                <button className="bg-[#1877f2] box-border content-stretch hidden lg:flex gap-4 items-center justify-center px-6 py-3 md:px-[34px] md:py-4 relative rounded-[48px] shrink-0 w-fit transition-all duration-300 ease-out
    hover:scale-[1.04] hover:shadow-lg hover:bg-[#1b6de8] cursor-pointer border-[1.42px] border-solid border-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)]">
                    <span className="font-semibold leading-normal relative shrink-0 text-sm sm:text-base text-nowrap text-white whitespace-pre">
                        Sign Up
                    </span>
                </button>


                {/* Mobile Menu Icon */}
                <button
                    className="lg:hidden flex flex-col gap-[5px]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`w-6 h-[3px] bg-text-primary transition-all rounded-full ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`w-6 h-[3px] bg-text-primary transition-all rounded-full ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-[3px] bg-text-primary transition-all rounded-full ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute w-full lg:hidden bg-white shadow-md px-6 py-4 animate-fadeIn flex flex-col gap-5">

                    <a href="#" className="text-text-primary font-medium text-[16px]">Whitepaper</a>
                    <a href="#" className="text-text-primary font-medium text-[16px]">What we do</a>
                    <a href="#" className="text-text-primary font-medium text-[16px]">Why Alt?</a>
                    <a href="#" className="text-text-primary font-medium text-[16px]">About Us</a>
                    <a href="#contact-us" className="text-text-primary font-medium text-[16px]">Contact</a>

                    <div className="flex gap-2 items-center cursor-pointer">
                        <a href="#" className="text-text-primary font-medium text-[16px]">HHI Benchmarks</a>
                        <img src="assets/icons/Huge-icon.svg" alt="" />
                    </div>

                    {/* SignUp Button (Mobile) */}
                    <button className="bg-[#1877f2] box-border content-stretch flex gap-4 items-center justify-center px-6 py-3 md:px-[34px] md:py-4 relative rounded-[48px] shrink-0 w-fit transition-all duration-300 ease-out
    hover:scale-[1.04] hover:shadow-lg hover:bg-[#1b6de8] cursor-pointer border-[1.42px] border-solid border-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)]">
                        <span className="font-semibold leading-normal relative shrink-0 text-sm sm:text-base text-nowrap text-white whitespace-pre">
                            Sign Up
                        </span>
                    </button>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
