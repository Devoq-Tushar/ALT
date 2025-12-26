const ContactUs = () => {

    return (
        <div className="relative overflow-hidden bg-[#5172E7]">
            <div className="relative flex flex-col justify-center items-center gap-8 sm:gap-10 container w-full px-6 py-8 md:py-[120px] rounded-2xl z-10">
                <div className="flex flex-col justify-center items-center gap-3 md:gap-4">
                    <span className="text-text-white font-bold text-[26px] sm:text-[44px] leading-normal md:leading-[57px] tracking-[-0.3px] md:tracking-normal">Let’s get started with ALT</span>
                    <span className="text-text-white/70 font-medium text-base sm:text-[18px] max-w-[588px] text-center">Join us and convert complex Information into compelling narratives
                        with ease</span>
                </div>
                <button className="bg-bg-white box-border flex gap-4 items-center justify-center px-5 py-[12.5px] md:px-6 md:py-4 relative rounded-lg md:rounded-xl w-fit transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-lg cursor-pointer shadow-[0px_2px_18px_0px_rgba(0,0,0,0.25)]">
                    <span className="leading-[21px] md:leading-6 relative text-sm sm:text-base text-nowrap text-[#5172E7] whitespace-pre font-semibold">
                        Sign Up
                    </span>
                </button>
            </div>

        </div>
    );
};

export default ContactUs;
