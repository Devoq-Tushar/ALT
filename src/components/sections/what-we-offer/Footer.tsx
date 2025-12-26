const Footer = () => {
    return (
        <div className="bg-bg-primary content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="container relative shrink-0 w-full">
                <div className="size-full">
                    <div className="box-border content-stretch flex flex-col md:flex-row gap-8 md:gap-14 lg:gap-[72px] items-start py-6 md:py-20 lg:py-[100px] relative w-full">
                        <div className="content-stretch flex flex-col gap-5 sm:gap-[30px] items-start relative shrink-0 w-full md:max-w-[234px]">
                            <img src="assets/Logo/ALT-white-logo.svg" alt="ALT-white-logo" loading="lazy" className="w-[87px] h-8 sm:w-[109px] sm:h-10 cursor-pointer" onClick={() => window.location.reload()} />
                            <p className="font-medium leading-normal min-w-full relative shrink-0 text-[16px] lg:text-[18px] text-white w-min">The benchmark layer for private assets.</p>
                        </div>
                        <div className="content-stretch flex flex-wrap  items-start justify-between gap-6 md:gap-6 min-h-px w-full max-w-[864px] relative">
                            <div className="content-stretch flex flex-col gap-5 sm:gap-7 items-start relative shrink-0 max-w-[40%] sm:w-fit">
                                <p className="font-semibold leading-normal relative text-[20px] text-center text-white">Company</p>
                                <div className="content-stretch flex flex-col font-normal gap-3 items-start leading-normal relative shrink-0 text-[14px] lg:text-[16px] text-white">
                                    <a href="#" className="relative shrink-0">Home</a>
                                    <a href="#" className="relative shrink-0">About Us</a>
                                    <a href="#" className="relative shrink-0">Insights</a>
                                </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-5 sm:gap-7 items-start relative shrink-0 w-[50%] sm:w-fit">
                                <p className="font-semibold leading-normal relative text-[20px] text-center text-white">Services</p>
                                <div className="content-stretch flex flex-col font-normal gap-3 items-start leading-normal relative shrink-0 text-[14px] lg:text-[16px] text-white">
                                    <a href="#" className="relative shrink-0">Banking HHI</a>
                                    <a href="#" className="relative shrink-0">Insurance HHI</a>
                                    <a href="#" className="relative shrink-0">Telecom HHI</a>
                                </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-5 sm:gap-7 items-start relative shrink-0 w-[40%] sm:w-fit">
                                <p className="font-semibold leading-normal relative text-[20px] text-center text-white">Support</p>
                                <div className="content-stretch flex flex-col font-normal gap-3 items-start leading-normal relative shrink-0 text-[14px] lg:text-[16px] text-white">
                                    <a href="#" className="relative shrink-0">Contact Us</a>
                                    <a href="#" className="relative shrink-0">Help Center</a>
                                </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-5 sm:gap-7 items-start relative shrink-0 w-[50%] sm:w-fit">
                                <p className="font-semibold leading-normal relative text-[20px] text-center text-white">Contact Us</p>
                                <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0">
                                    <div className="content-stretch flex gap-3 items-center relative shrink-0">
                                        <img src="assets/icons/sms.svg" alt="sms" loading="lazy" className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <a href="mailto:info@altindices.com" className="font-normal leading-normal relative shrink-0 text-[14px] lg:text-[16px] text-white">info@altindices.com</a>
                                    </div>
                                    <div className="content-stretch flex gap-3 items-center relative shrink-0">
                                        <img src="assets/icons/call-calling.svg" loading="lazy" alt="call-calling" className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <a href="tel:(01) 123-4567-890" className="font-normal leading-normal relative shrink-0 text-[14px] lg:text-[16px] text-white">(01) 123-4567-890</a>
                                    </div>
                                    <div className="content-stretch flex gap-3 items-center relative shrink-0">
                                        <img src="assets/icons/location.svg" alt="location" loading="lazy" className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <p className="font-normal leading-normal relative text-[14px] lg:text-[16px] text-white w-full lg:w-[258px]">Lorem Ipsum is simply dummy text of the printing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white relative shrink-0 w-full">
                <div className="container flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-0 md:px-20 lg:px-[135px] py-[16.5px] sm:py-6 relative w-full">
                        <p className="font-normal leading-normal relative shrink-0 text-text-secondary text-[14px] lg:text-[16px] text-center">© 2025 Alt Indices. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;