const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg-img.png')] bg-no-repeat bg-bottom bg-size-[100%]">

            {/* Glow image left */}
            <div className="absolute top-0 left-0 h-[250px] w-[250px] sm:h-[690px] sm:w-[610px] z-1">
                <img src="assets/images/hero-glow-img.svg" alt="" className="blur-[0px]" />
            </div>

            {/* Glow image right */}
            <div className="absolute top-[-45px] right-0 h-[250px] w-[250px] sm:h-[690px] sm:w-[610px] z-1 rotate-90">
                <img src="assets/images/hero-glow-img.svg" alt="" className="blur-[0px]" />
            </div>
            <div className="relative w-full flex flex-col justify-center items-center gap-6 sm:gap-[70px] p-6 pt-8 pb-10 md:pt-[70px] md:pb-[70px] container z-10">

                <div className="content-stretch flex flex-col gap-5 md:gap-6 items-center justify-center w-full max-w-[970px]">
                    <div className="bg-white box-border content-stretch flex gap-4 sm:h-12 items-center justify-center px-4 py-[3.5px] sm:px-6 sm:py-2.5 relative rounded-[50px] shrink-0 border-4 border-bg-secondary/10">
                        <p className="leading-normal relative shrink-0 text-text-blue text-sm sm:text-base font-semibold text-nowrap uppercase whitespace-pre">Alt Indices</p>
                    </div>
                    <div className="leading-[1.2] min-w-full relative shrink-0 text-text-primary font-semibold text-center uppercase w-min">
                        <p className="mb-0 text-[30px] md:text-[48px] lg:text-[68px]">Benchmarking for</p>
                        <p className="text-text-blue text-[30px] md:text-[48px] lg:text-[68px]">Private Markets</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-3 md:gap-4 items-start leading-normal relative shrink-0 text-center w-full">
                        <p className="relative shrink-0 text-text-primary text-[18px] lg:text-[20px] font-semibold w-full">Making compliance easier. Making comparison fair. Making performance real.</p>
                        <p className="font-normal relative shrink-0 text-text-secondary text-[16px] lg:text-[18px] w-full">We are a private markets benchmark administrator built to help LPs and GPs report, compare, and govern performance with confidence — whether for internal marking, reporting, allocation models.</p>
                    </div>
                </div>

                <div className="relative bg-bg-primary rounded-2xl lg:rounded-[20px] w-full max-w-[970px]">
                    <div className="box-border content-stretch flex flex-col gap-3 md:gap-4 items-start overflow-clip px-6 md:px-[60px] lg:px-[100px] pb-6 pt-8 md:py-8 lg:py-10 relative rounded-[inherit] w-full">
                        <div className="absolute h-[173.099px] lg:h-[242.339px] right-[-34px] md:right-[-34px] lg:right-[-42px] top-[-75px] lg:top-[-101px] w-[100px] lg:w-[140px]">
                            <img alt="" className="block max-w-none size-full" height="269.135" src="assets/images/hero-Alt-Indices-fetured-img-2.svg" width="166.796" />
                        </div>
                        <div className="absolute flex h-[173.099px] lg:h-[242.339px] items-center justify-center left-[-34px] lg:left-[-42px] top-[-75px] lg:top-[-101px] w-[100px] lg:w-[140px]">
                            <img alt="" className="block max-w-none size-full" height="269.135" src="assets/images/hero-Alt-Indices-fetured-img-1.svg" width="166.796" />
                        </div>
                        <p className="font-semibold leading-normal min-w-full relative shrink-0 text-[20px] lg:text-[24px] text-center text-white uppercase w-min">Alt Indices</p>
                        <p className="font-normal leading-normal min-w-full relative shrink-0 text-[14px] lg:text-[16px] text-center text-white w-min">
                            <span>As institutions transition from traditional Strategic Asset Allocation (SAA) models to the Total Portfolio Approach (TPA), private assets need the same</span>
                            <span className="font-semibold"> transparency, comparability,</span>
                            <span> and</span>
                            <span className="font-semibold"> benchmark rigor </span>
                            <span>long-established in public markets.</span>
                        </p>
                    </div>
                    <div aria-hidden="true" className="absolute border lg:border-2 border-solid border-white -inset-px lg:-inset-0.5 pointer-events-none rounded-[17px] lg:rounded-[22px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)]" />
                </div>


                {/* <div className="hidden xl:flex absolute rotate-350 h-[200px] items-center justify-center left-[-45px] top-[180px] translate-y-[-50%] w-[168px]">
                    <div className="bg-white box-border flex flex-col justify-center gap-[30px] items-start p-6 relative rounded-[20px] border-4 border-[rgba(24,119,242,0.1)] border-solid">
                        <div className="flex flex-col gap-1 items-start leading-normal relative shrink-0 text-center text-nowrap whitespace-pre">
                            <span className="font-semibold relative shrink-0 text-[#1c1c1c] text-[24px] uppercase leading-9">12,500+</span>
                            <p className="font-normal relative shrink-0 text-[#7c7575] text-[16px] leading-6">Verified Funds</p>
                        </div>
                        <img src="assets/images/Verified-Funds-chart-img.svg" alt="" />
                    </div>
                </div> */}
                <img src="assets/images/hero-graphics-img-1.svg" alt="" className="hidden xl:flex absolute left-[-45px] top-[180px] translate-y-[-50%] w-[168px] h-[200px]" />

                <img src="assets/images/hero-graphics-img-2.svg" alt="" className="hidden xl:flex absolute rotate-0 h-[193px] right-[-45px] top-[180px] translate-y-[-50%] w-[168px]" />
                {/* <div className="hidden xl:flex absolute rotate-10 h-[193px] items-center justify-center right-[-45px] top-[180px] translate-y-[-50%] w-[168px]">
                    <div className="bg-white box-border flex flex-col gap-[30px] items-start p-6 relative rounded-[20px] border-4 border-[rgba(24,119,242,0.1)] border-solid">
                        <div className="content-stretch flex flex-col gap-1 items-start leading-normal relative shrink-0 text-center text-nowrap whitespace-pre">
                            <p className="font-semibold relative shrink-0 text-[#1c1c1c] text-[24px] uppercase">85,000+</p>
                            <p className="font-normal relative shrink-0 text-[#7c7575] text-[16px]">Global Deals</p>
                        </div>
                        <div className="h-[51.171px] relative shrink-0 w-[120px]" data-name="Small line chart widget">
                            <div className="absolute inset-[-8.93%_-1.06%_-1.84%_-0.06%]">
                                <img src="assets/images/Global-Deals-chart-img.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}


export default Hero;