// const Insights = () => {


//     return (
//         <div className="relative overflow-hidden bg-[#F2F4FA]">
//             <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-[50px] container w-full p-6 md:py-[120px] md:pt-0 rounded-2xl z-10">
//                 <div className="flex flex-row md:flex-col justify-between w-full md:justify-start gap-10">
//                     <span className="text-text-primary font-semibold text-[28px] md:text-[48px] leading-normal md:leading-[58px]">Insights</span>
//                     <button className="bg-[#5172E7] box-border gap-4 items-center justify-center px-4 py-2.5 md:px-6 md:py-4 relative rounded-xl w-fit transition-all duration-300 ease-out
//     hover:scale-[1.04] hover:shadow-lg cursor-pointer shadow-[0px_2px_18px_0px_rgba(0,0,0,0.5)]">
//                         <span className="leading-6 relative text-sm sm:text-base text-nowrap text-white whitespace-pre font-semibold">
//                             View All
//                         </span>
//                     </button>
//                 </div>
//                 <div className="w-full max-w-[770px] flex justify-center items-center gap-6 md:gap-[30px]">
//                     <div className="w-full max-w-[370px] flex flex-col justify-center items-center rounded-xl bg-white">
//                         <div className="">
//                             <img src="assets/images/alt-EsCommerce-1.png" alt="" className="rounded-tl-xl rounded-tr-xl" />
//                         </div>
//                         <div className="flex flex-col justify-center items-center gap-3.5 md:gap-4 p-4 md:p-5">
//                             <span className="text-black font-normal text-sm sm:text-[15px] leading-normal md:leading-[22px]">SEBI eases compliance for alternative funds, enabling flexible benchmarking. SEBI eases For information about the accessibility of our websites, applications, content and services, please visit our... Read More</span>
//                             <div className="flex justify-between items-center w-full">
//                                 <div className="flex justify-start items-center gap-3 md:gap-4">
//                                     <img src="assets/icons/alt-user-icn.svg" alt="" className="w-auto h-[42px] md:h-auto" />
//                                     <div className="flex flex-col gap-0.5 justify-center items-start">
//                                         <span className="text-black font-semibold text-sm sm:text-base">EsCommerce</span>
//                                         <span className="text-black/60 font-normal text-xs sm:text-sm">21/06/2024</span>
//                                     </div>
//                                 </div>
//                                 <img src="assets/icons/alt-linkedin.svg" alt="" className="w-auto h-[22px] md:h-auto" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full max-w-[370px] flex flex-col justify-center items-center rounded-xl bg-white">
//                         <div className="">
//                             <img src="assets/images/alt-EsCommerce-2.png" alt="" className="rounded-tl-xl rounded-tr-xl" />
//                         </div>
//                         <div className="flex flex-col justify-center items-center gap-3.5 md:gap-4 p-4 md:p-5">
//                             <span className="text-black font-normal text-sm sm:text-[15px] leading-normal md:leading-[22px]">If we are notified that any User Content infringes another’s intellectual property rights, we may remove such User Content pursuant to the DMCA. In accordance with the DMCA, we have a repeat infringer policy.</span>
//                             <div className="flex justify-between items-center w-full">
//                                 <div className="flex justify-start items-center gap-3 md:gap-4">
//                                     <img src="assets/icons/alt-user-icn.svg" alt="" className="w-auto h-[42px] md:h-auto" />
//                                     <div className="flex flex-col gap-0.5 justify-center items-start">
//                                         <span className="text-black font-semibold text-sm sm:text-base">EsCommerce</span>
//                                         <span className="text-black/60 font-normal text-xs sm:text-sm">21/06/2024</span>
//                                     </div>
//                                 </div>
//                                 <img src="assets/icons/alt-linkedin.svg" alt="" className="w-auto h-[22px] md:h-auto" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Insights;



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Insights = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    arrows: false,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="relative overflow-hidden bg-[#F2F4FA]">
            <div className="relative flex flex-col lg:flex-row justify-between gap-6 sm:gap-[50px] container w-full px-0! pb-8 pt-8 md:py-[120px] md:pt-0 z-10">

                {/* LEFT */}
                <div className="flex flex-row lg:flex-col justify-between lg:justify-start w-full gap-10 lg:max-w-[350px] md:px-0 px-6">
                    <span className="text-text-primary font-semibold text-[28px] sm:text-[48px] leading-normal md:leading-[58px]">
                        Insights
                    </span>

                    <button className="bg-[#5172E7] flex gap-4 items-center justify-center px-5 py-[13px] md:px-6 md:py-4 rounded-xl w-fit transition-all duration-300 hover:scale-[1.04] shadow-lg">
                        <span className="text-white font-semibold text-sm md:text-base">
                            View All
                        </span>
                    </button>
                </div>

                {/* RIGHT – CAROUSEL */}
                <div className="w-full max-w-[770px]">
                    <Slider {...settings} className="insights-slider">

                        {/* CARD 1 */}
                        <div className="px-3">
                            <div className="flex flex-col rounded-xl bg-white h-full">
                                <img
                                    src="assets/images/alt-EsCommerce-1.png"
                                    alt=""
                                    className="rounded-t-xl"
                                />
                                <div className="flex flex-col gap-3.5 md:gap-4 p-4 md:p-5">
                                    <span className="text-black text-sm sm:text-[15px] leading-[22px]">
                                        SEBI eases compliance for alternative funds, enabling flexible benchmarking...
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
                        <div className="px-3">
                            <div className="flex flex-col rounded-xl bg-white h-full">
                                <img
                                    src="assets/images/alt-EsCommerce-2.png"
                                    alt=""
                                    className="rounded-t-xl"
                                />
                                <div className="flex flex-col gap-3.5 md:gap-4 p-4 md:p-5">
                                    <span className="text-black text-sm sm:text-[15px] leading-[22px]">
                                        If we are notified that any User Content infringes intellectual property rights...
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
                        <div className="px-3">
                            <div className="flex flex-col rounded-xl bg-white h-full">
                                <img
                                    src="assets/images/alt-EsCommerce-2.png"
                                    alt=""
                                    className="rounded-t-xl"
                                />
                                <div className="flex flex-col gap-3.5 md:gap-4 p-4 md:p-5">
                                    <span className="text-black text-sm sm:text-[15px] leading-[22px]">
                                        If we are notified that any User Content infringes intellectual property rights...
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
                </div>
            </div>
        </div>
    );
};

export default Insights;
