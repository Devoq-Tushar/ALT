const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-home-primary">


            <div className="relative w-full flex flex-col lg:flex-row justify-between gap-6 md:gap-0 items-center lg:items-start p-6 pt-8 pb-10 md:py-[43px] container max-w-[1257px]! mr-12! z-10">
                <div className="flex flex-col gap-8 md:gap-[60px] w-full max-w-[670px]">
                    <div className="flex flex-col gap-6 md:gap-8">
                        <div className="flex flex-col gap-4 md:gap-5">
                            <h1 className="mb-0 text-[28px] md:text-[32px] lg:text-[48px] text-white font-semibold md:leading-[60px]">The intelligence layer for post-trade benchmarking.</h1>
                            <span className="font-normal text-text-white text-[16px] lg:text-[18px] w-full max-w-[608px]">An AI intelligence layer on top of transactional data that transforms unstructured private-market information into institutional decision support.</span>
                            <div className="flex flex-col gap-3.5">
                                <div className="flex justify-start items-center gap-2.5">
                                    <img src="assets/icons/alt-home-hero-icn-1.svg" alt="" className="w-5 h-5 md:w-auto md:h-auto" />
                                    <span className="font-normal text-text-white text-[16px] lg:text-[18px] w-full">Tailored benchmarks for private markets</span>
                                </div>
                                <div className="flex justify-start items-center gap-2.5">
                                    <img src="assets/icons/alt-home-hero-icn-2.svg" alt="" className="w-5 h-5 md:w-auto md:h-auto" />
                                    <span className="font-normal text-text-white text-[16px] lg:text-[18px] w-full">Standardised Methodology using TruePeer™</span>
                                </div>
                                <div className="flex justify-start items-center gap-2.5">
                                    <img src="assets/icons/alt-home-hero-icn-3.svg" alt="" className="w-5 h-5 md:w-auto md:h-auto" />
                                    <span className="font-normal text-text-white text-[16px] lg:text-[18px] w-full">Compare funds across asset classes.</span>
                                </div>
                                <div className="flex justify-start items-center gap-2.5">
                                    <img src="assets/icons/alt-home-hero-icn-4.svg" alt="" className="w-5 h-5 md:w-auto md:h-auto" />
                                    <span className="font-normal text-text-white text-[16px] lg:text-[18px] w-full">Bridging private and public market Taxonomy</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-start items-center gap-3 md:gap-3.5">
                            <input type="text" placeholder="Enter email address" className="bg-[#293040] rounded-xl p-3 py-2.5 md:py-[15px] md:px-4 text-[#999999] text-sm md:text-base border border-[#FFFFFF1A] w-full max-w-[351px] leading-6" />
                            <button className="bg-[#5172E7] box-border flex gap-4 items-center justify-center px-6 py-[13px] md:px-6 md:py-[18px] relative rounded-xl w-full md:w-fit transition-all duration-300 ease-out
    hover:scale-[1.04] hover:shadow-lg hover:bg-[#1b6de8] cursor-pointer shadow-[0px_2px_18px_0px_rgba(0,0,0,0.5)]">
                                <span className="font-medium leading-5 text-sm sm:text-base text-nowrap text-white whitespace-pre">
                                    Sign up for Free Trial
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 md:gap-4">
                        <span className="font-medium text-text-gray text-xs lg:text-sm w-full leading-[26px] uppercase">Trusted by Institutional Investors</span>
                        <img src="assets/icons/logo-manulife.svg" alt="" className="w-[100px] h-5 md:w-[125px] md:h-[25px]" />
                    </div>
                </div>
                <div className="w-full max-w-[515px] flex flex-col gap-5">
                    <div className="flex flex-col gap-[5px] md:gap-[9px] w-full">
                        {/* Section Title */}
                        <span className="font-medium text-text-gray text-[11px] md:text-base lg:text-[18px] uppercase">
                            Alt Asset Management
                        </span>

                        {/* CARD 1 */}
                        <div className="bg-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-[14px] md:py-[17px] md:px-[22px] flex flex-row justify-between gap-0 md:gap-6">
                            {/* Left */}
                            <div className="flex flex-col justify-between">
                                <div className="flex  justify-start items-center gap-[11px]">
                                    <span className="font-medium text-text-white text-[8px] md:text-[12px] leading-[9px]">Alt REIT III</span>
                                    <span className="w-fit font-medium bg-[#FFFFFF1A] rounded-full text-text-white text-[7px] lg:text-[9px] p-px px-1">2018</span>
                                </div>
                                <div className="flex justify-center items-end gap-[5px]">
                                    <div className="flex flex-col">
                                        <span className="text-[#636B7A] text-[7px] uppercase tracking-wide">
                                            Net Asset Value
                                        </span>

                                        <span className="text-[#B5E4CA] text-base md:text-[18px] lg:text-[25px] font-semibold leading-none">
                                            $165.2
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#B5E4CA] text-[7px] flex items-center gap-1">
                                            ↗ 3.0%
                                        </span>
                                        <span className="text-[#636B7A] text-[7px]">vs last year</span>
                                    </div>
                                </div>

                                <div className="text-white text-[7px]">
                                    Last Reported date:
                                    <span className="text-[#636B7A]">
                                        Sep 2024
                                    </span>
                                </div>
                            </div>

                            {/* Right Chart Placeholder */}
                            <img src="assets/images/alt-reit-chart.svg" alt="" className="w-auto h-[55px] md:w-auto md:h-auto" />
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-3.5 md:py-[20.5px] md:px-[22px] flex flex-row justify-between gap-0 md:gap-6">
                            {/* Left */}
                            <div className="flex flex-col justify-between">
                                <div className="flex  justify-start items-center gap-[11px]">
                                    <span className="font-medium text-text-white text-[8px] md:text-[12px] leading-[9px] text-nowrap">Alt Growth Fund</span>
                                    <span className="w-fit font-medium bg-[#FFFFFF1A] rounded-full text-text-white text-[7px] lg:text-[9px] p-px px-1">2024</span>
                                </div>
                                <div className="flex justify-center items-end gap-[5px]">
                                    <div className="flex flex-col">
                                        <span className="text-[#636B7A] text-[7px] uppercase tracking-wide">
                                            Net Asset Value
                                        </span>

                                        <span className="text-[#5172E7] text-base md:text-[18px] lg:text-[25px] font-semibold leading-none">
                                            $2.75M
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#5172E7] text-[7px] flex items-center gap-1">
                                            ↗ 2.4%
                                        </span>
                                        <span className="text-[#636B7A] text-[7px]">vs last year</span>
                                    </div>
                                </div>

                                <div className="text-white text-[7px]">
                                    Last Reported date:
                                    <span className="text-[#636B7A]">
                                        Sep 2024
                                    </span>
                                </div>
                            </div>

                            {/* Right Chart Placeholder */}
                            <img src="assets/images/alt-growth-fund.svg" alt="" className="w-full h-12 md:w-auto md:h-auto" />
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-[14px] md:py-[17px] md:px-[22px] flex flex-row justify-between gap-0 md:gap-6">
                            {/* Left */}
                            <div className="flex flex-col justify-between">
                                <div className="flex  justify-start items-center gap-[11px]">
                                    <span className="font-medium text-text-white text-[8px] md:text-[12px] leading-[9px]">Alt Long Short</span>
                                    <span className="w-fit font-medium bg-[#FFFFFF1A] rounded-full text-text-white text-[7px] lg:text-[9px] p-px px-1">2021</span>
                                </div>
                                <div className="flex justify-center items-end gap-[5px]">
                                    <div className="flex flex-col">
                                        <span className="text-[#636B7A] text-[7px] uppercase tracking-wide">
                                            Net Asset Value
                                        </span>

                                        <span className="text-[#FFBC99] text-base md:text-[18px] lg:text-[25px] font-semibold leading-none">
                                            $958.00
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#FFBC99] text-[7px] flex items-center gap-1">
                                            ↗ 1.5%
                                        </span>
                                        <span className="text-[#636B7A] text-[7px]">vs last year</span>
                                    </div>
                                </div>

                                <div className="text-white text-[7px]">
                                    Last Reported date:
                                    <span className="text-[#636B7A]">
                                        Sep 2024
                                    </span>
                                </div>
                            </div>

                            {/* Right Chart Placeholder */}
                            <img src="assets/images/alt-long-short.svg" alt="" className="w-auto h-[55px] md:w-auto md:h-auto" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2.5 md:gap-4">
                        <div>
                            <span className="font-medium text-white text-xs md:text-[20px] w-full leading-7">Recently Accessed Reports</span>
                            <div className="flex gap-2 items-center justify-start">
                                <span className="font-normal text-[5px] md:text-[8px] text-[#1D2939] bg-[#EFEFEF] px-1.5 py-px md:py-0.5 rounded">Recently viewed</span>
                                <span className="font-normal text-[5px] md:text-[8px] text-[#959AA5] border border-[#EFEFEF] px-1.5 py-px md:py-0.5 rounded">Oldest first</span>
                                <span className="font-normal text-[5px] md:text-[8px] text-[#959AA5] border border-[#EFEFEF] px-1.5 py-px md:py-0.5 rounded">Newest first</span>
                            </div>
                        </div>
                        <div className="flex gap-1 md:gap-1.5">
                            <img src="assets/images/alt-quarterly-img.svg" alt="" className="w-auto h-[81px] md:h-auto" />
                            <img src="assets/images/alt-Private-img.svg" alt="" className="w-auto h-[81px] md:h-auto" />
                            <img src="assets/images/alt-fund-performance-img.svg" alt="" className="w-auto h-[81px] md:h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero;