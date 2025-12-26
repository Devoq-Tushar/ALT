import { useEffect, useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hhiOpen, setHhiOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup (important)
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);


    return (
        <nav className="sticky top-0 z-50 bg-home-primary shadow-[0px_4px_14px_rgba(0,0,0,0.05)]">
            <div className={`container flex items-center justify-between md:py-3.5 ${menuOpen ? "py-4.5" : "py-4"}`}>

                {/* Logo */}
                <a href="" onClick={() => window.location.reload()}>
                    <img src="assets/Logo/alt-home-white-logo.svg" alt="" className="md:block hidden" />
                    <img src="assets/Logo/alt-home-responsive-icn.svg" alt="" className="block md:hidden" />
                </a>
                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <div className="flex gap-8 items-center">
                        <a href="#" className="text-text-gray font-normal hover:text-text-blue transition-colors duration-200 text-sm md:text-base whitespace-nowrap">Whitepaper</a>
                        <a href="#" className="text-text-gray font-normal hover:text-text-blue transition-colors duration-200 text-sm md:text-base whitespace-nowrap">What we do</a>
                        <a href="#" className="text-text-gray font-normal hover:text-text-blue transition-colors duration-200 text-sm md:text-base whitespace-nowrap">Why Alt?</a>
                        <a href="#" className="text-text-gray font-normal hover:text-text-blue transition-colors duration-200 text-sm md:text-base whitespace-nowrap">About Us</a>
                        <a href="#contact-us" className="text-text-gray font-normal hover:text-text-blue transition-colors duration-200 text-sm md:text-base whitespace-nowrap">Contact</a>
                        <div className="relative group">
                            <div className="flex gap-1 items-center cursor-pointer">
                                <span className="text-text-gray font-normal hover:text-text-blue transition-colors duration-200 text-sm md:text-base whitespace-nowrap">
                                    HHI Benchmarks
                                </span>
                                <img src="assets/icons/alt-home-hi-banchmark-icn.svg" alt="" />
                            </div>
                            <div className="absolute right-0 top-full mt-3 w-44 bg-white rounded-lg shadow-lg opacity-0 invisible
                                            group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50
                            ">
                                <ul className="py-2">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Banking
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Telecom
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Insurance
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop SignUp Button */}
                <button className="bg-bg-turnary box-border hidden lg:flex gap-4 items-center justify-center px-4 py-2.5 md:px-6 md:py-3 relative rounded-lg md:rounded-xl w-fit transition-all duration-300 ease-out
    hover:scale-[1.04] hover:shadow-lg hover:bg-[#1b6de8] cursor-pointer shadow-[0px_2px_18px_0px_rgba(0,0,0,0.25)]">
                    <span className="font-semibold leading-normal md:leading-6 relative text-sm sm:text-base text-nowrap text-white whitespace-pre">
                        Sign Up
                    </span>
                </button>


                {/* Mobile Menu Icon */}
                <button
                    className="lg:hidden flex flex-col"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <img src="assets/icons/menu-icn.svg" alt="" className={`${menuOpen ? "hidden" : "block"}`} />
                    <span className={`w-6 h-0.5 bg-text-white transition-all rounded-full ${menuOpen ? "rotate-45 translate-y-0.5" : "hidden"}`}></span>
                    <span className={`w-6 h-0.5 bg-text-white transition-all rounded-full ${menuOpen ? "opacity-0" : "hidden"}`}></span>
                    <span className={`w-6 h-0.5 bg-text-white transition-all rounded-full ${menuOpen ? "-rotate-45 -translate-y-0.5" : "hidden"}`}></span>
                </button>

            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute w-full lg:hidden bg-white shadow-md px-6 py-4 animate-fadeIn flex flex-col gap-5 overflow-y-auto">

                    <a href="#" className="text-text-primary font-medium text-[16px]">Whitepaper</a>
                    <a href="#" className="text-text-primary font-medium text-[16px]">What we do</a>
                    <a href="#" className="text-text-primary font-medium text-[16px]">Why Alt?</a>
                    <a href="#" className="text-text-primary font-medium text-[16px]">About Us</a>
                    <a href="#contact-us" className="text-text-primary font-medium text-[16px]">Contact</a>

                    <button
                        onClick={() => setHhiOpen(!hhiOpen)}
                        className="flex items-center justify-between text-text-primary font-medium text-[16px]"
                    >
                        <span>HHI Benchmarks</span>
                        <img src="assets/icons/Huge-icon.svg" alt="" className={`transition-transform ${hhiOpen ? "rotate-180" : ""}`} />
                    </button>

                    {hhiOpen && (
                        <div className="pl-2 flex flex-col gap-3">
                            <a href="#" className="text-sm text-text-primary">Banking</a>
                            <a href="#" className="text-sm text-text-primary">Telecom</a>
                            <a href="#" className="text-sm text-text-primary">Insurance</a>
                        </div>
                    )}

                    {/* SignUp Button (Mobile) */}
                    <button className="bg-home-primary box-border content-stretch flex gap-4 items-center justify-center px-4 py-2 md:px-[34px] md:py-4 relative rounded-lg md:rounded-xl w-fit transition-all duration-300 ease-out
    hover:scale-[1.04] hover:shadow-lg cursor-pointer shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)]">
                        <span className="font-normal leading-normal relative text-sm sm:text-base text-nowrap text-white whitespace-pre">
                            Sign Up
                        </span>
                    </button>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
