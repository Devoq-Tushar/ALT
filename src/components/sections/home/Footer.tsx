import type { FC } from 'react'

const Footer: FC = () => {
    return (
        <footer className="relative w-full bg-home-primary md:pt-20 md:pb-6 py-8">
            <div className="container max-w-[1200px]!">

                {/* Top Section */}
                <div
                    className="flex w-full flex-row gap-[116px] border-b border-white/10 pb-8 md:pb-12 max-[1366px]:gap-[74px] max-[1199px]:gap-8 max-[1199px]:justify-between max-[991px]:flex-col max-[991px]:mt-[60px] max-[767px]:mt-0">

                    {/* Logo Section */}
                    <div
                        className="flex w-full max-w-[288px] flex-col gap-5 max-[991px]:w-full max-[991px]:gap-4">
                        <img src="assets/icons/Add copy.svg" alt="" className='w-[57px] md:h-10 h-5' />
                        <p className="text-sm md:text-base text-white font-normal">
                            Convert information into investor confidence.
                        </p>
                    </div>

                    {/* Menu */}
                    <div
                        className="mx-auto flex flex-wrap md:flex-nowrap w-full max-w-[796px] flex-row md:justify-between gap-[72px] max-[1199px]:mx-0 max-[1199px]:w-auto max-[1199px]:gap-6 max-[767px]:w-full">
                        {/* Company */}
                        <ul
                            className="flex flex-col gap-3 md:gap-4 list-none p-0 m-0 w-full max-w-40 max-[991px]:w-[30%] max-[767px]:w-[46%] max-[767px]:border-white/25 max-[767px]:pt-0">
                            <h3 className="text-base md:text-[18px] font-semibold text-white leading-normal md:leading-[26px]">Company</h3>
                            <li className="flex flex-col gap-4">
                                <a href="https://altindices.com/" className="text-sm md:text-base text-white/70">Home</a>
                                <a href="https://altindices.com/about-us/" className="text-sm md:text-base text-white/70">About Us</a>
                                <a href="https://altindices.com/insights/" className="text-sm md:text-base text-white/70">Insights</a>
                            </li>
                        </ul>

                        {/* Services */}
                        <ul
                            className="flex flex-col gap-3 md:gap-4 list-none p-0 m-0 w-full max-w-40 max-[991px]:w-[30%] max-[767px]:w-[30%] max-[767px]:border-white/25 max-[767px]:pt-0">
                            <h3 className="text-base md:text-[18px] font-semibold text-white leading-normal md:leading-[26px]">Services</h3>
                            <li className="flex flex-col gap-4">
                                <a href="https://altindices.com/hhi/banking/" className="text-sm md:text-base text-white/70">Banking HHI</a>
                                <a href="https://altindices.com/hhi/insurance/" className="text-sm md:text-base text-white/70">Insurance HHI</a>
                                <a href="https://altindices.com/hhi/telecom/" className="text-sm md:text-base text-white/70">Telecom HHI</a>
                            </li>
                        </ul>

                        {/* Support */}
                        <ul
                            className="flex flex-col gap-3 md:gap-4 list-none p-0 m-0 w-full max-w-40 max-[991px]:w-[30%] max-[767px]:w-[40%] max-[767px]:border-white/25 max-[767px]:pt-0">
                            <h3 className="text-base md:text-[18px] font-semibold text-white leading-normal md:leading-[26px]">Support</h3>
                            <li className="flex flex-col gap-3 md:gap-4">
                                <a href="#contact-us" className="text-sm md:text-base text-white/70">Contact Us</a>
                                <a href="#help-center" className="text-sm md:text-base text-white/70">Help Center</a>
                            </li>
                        </ul>
                        <div className="flex flex-col text-white gap-5">
                            <div className="flex flex-col text-white">
                                <label className="text-base md:text-[18px] font-semibold text-white leading-normal md:leading-[26px]">Contact Us</label>
                                <span className="mt-2 flex items-center gap-2 text-white">
                                    <img src="assets/icons/mail.svg" alt="" className='md:w-6 md:h-6 w-5 h-5' />

                                    <a href="mailto:info@altindices.com" className="text-white no-underline">
                                        info@altindices.com
                                    </a>
                                </span>
                            </div>
                            <div className="flex flex-col text-white">
                                <label className="text-base md:text-[18px] font-semibold text-white leading-normal md:leading-[26px]">Visit Us</label>
                                <span className="mt-2 flex items-center gap-2 text-white">
                                    <img src="assets/icons/icn-home-footer-map.svg" alt="" className='md:w-6 md:h-6 w-5 h-5' />

                                    <a href="mailto:info@altindices.com" className="text-white no-underline">
                                        Adelaide St E Toronto, ON M5A 4S3
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div
                    className="flex flex-col items-center justify-center gap-3 pt-6 md:py-6 md:pb-0 md:flex-row md:justify-between md:gap-0">
                    <p className="mb-0 text-white text-sm md:text-base font-normal">
                        ©Copyright 2025 Alt. All Rights Reserved
                    </p>

                    <div className="flex w-full max-w-full md:max-w-[277px] md:justify-center justify-between items-center md:gap-10">
                        <a
                            href="https://www.linkedin.com/company/alt-indices/"
                            className="border-b border-white text-white text-sm md:text-base font-normal"
                        >
                            Privacy Policy
                        </a>

                        <div className="flex items-center gap-2.5 md:gap-4">
                            <a
                                href="https://www.linkedin.com/company/alt-indices/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className='bg-white/10 rounded-full p-[11px]'
                            >
                                <img src="assets/icons/Linkedin.svg" alt="" className='w-2.5 h-2.5 md:w-2.5 md:h-2.5' />
                            </a>

                            <a
                                href="https://www.instagram.com/alt_indicies/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Instagram"
                                className='bg-white/10 rounded-full p-[11px]'
                            >
                                <img src="assets/icons/Insta.svg" alt="" className='w-2.5 h-2.5 md:w-2.5 md:h-2.5' />
                            </a>

                            <a
                                href="https://www.facebook.com/altindices/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Facebook"
                                className='bg-white/10 rounded-full p-[11px]'
                            >
                                <img src="assets/icons/Facebook.svg" alt="" className='w-2.5 h-2.5 md:w-2.5 md:h-2.5' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
