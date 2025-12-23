const StartWithALT = () => {

    return (
        <div id="contact-us" className="relative overflow-hidden">

            {/* Glow image right */}
            <div className="absolute top-0 right-[-420px] h-[1100px] w-[900px] z-1">
                <img src="assets/images/glow-img-1.svg" alt="" className="blur-[100px]" />
            </div>

            <div className="relative flex flex-col justify-center items-center gap-6 sm:gap-[50px] container w-full p-6 sm:py-[100px] sm:pt-0 rounded-2xl z-10">
                <div className="relative overflow-hidden box-border bg-bg-primary rounded-[20px] content-stretch flex flex-col gap-8 md:gap-12 lg:gap-[72px] items-center p-10 md:p-14 lg:p-[72px] w-full">
                    <div className="content-stretch flex flex-col gap-5 items-center relative shrink-0 text-center text-white w-full">
                        <p className="font-semibold leading-[1.3] relative shrink-0 text-[24px] md:text-[38px] lg:text-[48px] uppercase ">Let’s get <br className="block md:hidden" /> started with <br className="block md:hidden" /> ALT</p>
                        <p className="font-normal leading-normal relative shrink-0 text-[14px] md:text-[15px] lg:text-[16px] w-full max-w-[468px]">Join us and convert complex Information into compelling narratives with ease</p>
                    </div>

                    <button className="bg-[#1877f2] box-border content-stretch flex gap-4 items-center justify-center px-6 py-[11.5px] md:px-[34px] md:py-4 relative rounded-[48px] shrink-0 w-fit transition-all duration-300 ease-out
    hover:scale-[1.04] hover:shadow-lg hover:bg-[#1b6de8] cursor-pointer border-[1.42px] border-solid border-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)]">
                        <span className="font-semibold leading-normal relative shrink-0 text-sm sm:text-base text-nowrap text-white whitespace-pre">
                            Sign Up
                        </span>
                    </button>

                    <div className="absolute block h-[368px] items-center justify-center -right-8 md:-right-10 top-[-174px] md:top-[-150px] w-[120px] lg:w-[213px] rotate-180">
                        <img alt="" className="block max-w-none size-full" src="assets/images/start-with-alt-fetured-img.svg" />
                    </div>
                    <div className="absolute block h-[368px] -left-8 bottom-[-174px] md:-left-10 md:bottom-[-150px] w-[120px] lg:w-[213px]">
                        <img alt="" className="block max-w-none size-full" src="assets/images/start-with-alt-fetured-img.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartWithALT;
