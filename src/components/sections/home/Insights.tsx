import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Insights = () => {

    const [openText, setOpenText] = useState<number | null>(null);
    const [activeText, setActiveText] = useState<string | null>(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: "16px",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    centerPadding: "16px",

                }
            },
        ]
    };


    return (
        <div className="relative overflow-hidden bg-[#F2F4FA]">
            <div className="relative flex flex-col lg:flex-row justify-between gap-6 sm:gap-6 container w-full px-0! pb-8 pt-8 md:py-[120px] md:pt-0 z-10 lg:px-0">

                {/* LEFT */}
                <div className="flex flex-row lg:flex-col justify-between lg:justify-start w-full gap-10 lg:max-w-[350px] md:px-0 px-6">
                    <span className="text-text-primary font-semibold text-[28px] sm:text-[48px] leading-normal md:leading-[58px]">
                        Insights
                    </span>

                    <button className="bg-[#5172E7] flex gap-4 items-center justify-center px-5 py-[13px] md:px-6 md:py-4 rounded-lg md:rounded-xl w-fit transition-all duration-300 hover:scale-[1.04] shadow-lg">
                        <span className="text-white font-semibold text-sm md:text-base leading-[21px] md:leading-[24px]">
                            View All
                        </span>
                    </button>
                </div>

                {/* mobile Card design */}
                {/* RIGHT – CAROUSEL */}
                <div className="w-full lg:max-w-[770px] max-w-full insights">
                    <Slider {...settings} className="insights-slider">

                        {/* CARD 1 */}
                        <div className="px-2 lg:pl-[30px] lg:px-0">
                            <div className="flex flex-col rounded-xl bg-white h-full">
                                <img
                                    src="assets/images/alt-EsCommerce-1.png"
                                    alt=""
                                    loading="lazy"
                                    className="rounded-t-xl md:h-auto h-[260px]"
                                />
                                <div className="flex flex-col gap-3.5 md:gap-4 p-4 md:p-5">
                                    <span
                                        className="text-black text-sm sm:text-[15px] leading-[21px] md:leading-[22px]
      line-clamp-6 lg:line-clamp-5"
                                    >
                                        SEBI eases compliance for alternative funds, enabling flexible benchmarking.
                                        SEBI eases For information about the accessibility of our websites, applications,
                                        content and services, please visit our... <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveText(
                                                    "SEBI eases compliance for alternative funds, enabling flexible benchmarking. SEBI eases For information about the accessibility of our websites, applications, content and services, please visit our full detailed article content here..."
                                                );
                                            }}
                                            className="text-black text-sm sm:text-[15px] leading-[21px] md:leading-[22px]"
                                        >
                                            Read More
                                        </a>
                                    </span>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <img src="assets/icons/alt-user-icn.svg" alt="" className="w-auto h-[42px] md:h-auto" />
                                            <div>
                                                <span className="block font-semibold text-sm">EsCommerce</span>
                                                <span className="text-black/60 text-xs">21/06/2024</span>
                                            </div>
                                        </div>
                                        <img src="assets/icons/alt-linkedin.svg" alt="" className="w-auto h-[22px] md:h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="px-2 lg:pl-[30px] lg:px-0">
                            <div className="flex flex-col rounded-xl bg-white h-full">
                                <img
                                    src="assets/images/alt-EsCommerce-2.png"
                                    alt=""
                                    loading="lazy"
                                    className="rounded-t-xl md:h-auto h-[260px]"
                                />
                                <div className="flex flex-col gap-3.5 md:gap-4 p-4 md:p-5">
                                    <span className="text-black text-sm sm:text-[15px] leading-[21px] md:leading-[22px]">
                                        If we are notified that any User Content infringes another’s intellectual property rights, we may remove such User Content pursuant to the DMCA. In accordance with the DMCA, we have a repeat infringer policy.
                                    </span>

                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <img src="assets/icons/alt-user-icn.svg" alt="" className="w-auto h-[42px] md:h-auto" />
                                            <div>
                                                <span className="block font-semibold text-sm">EsCommerce</span>
                                                <span className="text-black/60 text-xs">21/06/2024</span>
                                            </div>
                                        </div>
                                        <img src="assets/icons/alt-linkedin.svg" alt="" className="w-auto h-[22px] md:h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CARD 1 */}
                        <div className="px-2 lg:pl-[30px] lg:px-0">
                            <div className="flex flex-col rounded-xl bg-white h-full">
                                <img
                                    src="assets/images/alt-EsCommerce-1.png"
                                    alt=""
                                    loading="lazy"
                                    className="rounded-t-xl md:h-auto h-[260px]"
                                />
                                <div className="flex flex-col gap-3.5 md:gap-4 p-4 md:p-5">
                                    <span
                                        className="text-black text-sm sm:text-[15px] leading-[21px] md:leading-[22px] line-clamp-6 lg:line-clamp-5"
                                    >
                                        SEBI eases compliance for alternative funds, enabling flexible benchmarking.
                                        SEBI eases For information about the accessibility of our websites, applications,
                                        content and services, please visit our... <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveText(
                                                    "SEBI eases compliance for alternative funds, enabling flexible benchmarking. SEBI eases For information about the accessibility of our websites, applications, content and services, please visit our full detailed article content here..."
                                                );
                                            }}
                                            className="text-black text-sm sm:text-[15px] leading-[21px] md:leading-[22px]"
                                        >
                                            Read More
                                        </a>
                                    </span>


                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <img src="assets/icons/alt-user-icn.svg" alt="" className="w-auto h-[42px] md:h-auto" />
                                            <div>
                                                <span className="block font-semibold text-sm">EsCommerce</span>
                                                <span className="text-black/60 text-xs">21/06/2024</span>
                                            </div>
                                        </div>
                                        <img src="assets/icons/alt-linkedin.svg" alt="" className="w-auto h-[22px] md:h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="px-2 lg:pl-[30px] lg:px-0">
                            <div className="flex flex-col rounded-xl bg-white h-full">
                                <img
                                    src="assets/images/alt-EsCommerce-2.png"
                                    alt=""
                                    loading="lazy"
                                    className="rounded-t-xl md:h-auto h-[260px]"
                                />
                                <div className="flex flex-col gap-3.5 md:gap-4 p-4 md:p-5">
                                    <span className="text-black text-sm sm:text-[15px] leading-[21px] md:leading-[22px]">
                                        If we are notified that any User Content infringes another’s intellectual property rights, we may remove such User Content pursuant to the DMCA. In accordance with the DMCA, we have a repeat infringer policy.
                                    </span>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <img src="assets/icons/alt-user-icn.svg" alt="" className="w-auto h-[42px] md:h-auto" />
                                            <div>
                                                <span className="block font-semibold text-sm">EsCommerce</span>
                                                <span className="text-black/60 text-xs">21/06/2024</span>
                                            </div>
                                        </div>
                                        <img src="assets/icons/alt-linkedin.svg" alt="" className="w-auto h-[22px] md:h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    {activeText && (
                        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4">
                            <div className="bg-white max-w-[600px] w-full rounded-xl p-6 relative animate-fadeIn">

                                {/* Close Button */}
                                <button
                                    onClick={() => setActiveText(null)}
                                    className="absolute right-4 top-4 text-black text-xl font-bold cursor-pointer"
                                >
                                    ✕
                                </button>

                                {/* Content */}
                                <div className="max-h-[70vh] overflow-y-auto pr-2">
                                    <p className="text-black text-sm sm:text-[15px] leading-[22px]">
                                        {activeText}
                                    </p>
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Insights;
