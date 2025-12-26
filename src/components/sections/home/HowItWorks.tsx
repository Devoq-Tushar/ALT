const HowItWorks: React.FC = () => {
    return (
        <section className="w-full flex bg-[#F2F4FA] py-[120px] max-lg:p-6 max-lg:py-8 justify-center">
            <div className="w-full md:container flex flex-col md:gap-8 gap-6 justify-center items-center">
                {/* Header */}
                <div className="w-full flex flex-col items-center gap-2.5 md:gap-3">
                    <label className="text-black text-sm md:text-base font-medium bg-white rounded-full py-1.5 px-3 md:py-2 md:px-4 leading-normal md:leading-[26px]">
                        How it works?
                    </label>
                    <h3 className="text-black font-semibold leading-normal md:leading-[58px] text-[48px] max-lg:text-[32px] max-md:text-[28px] text-center">
                        Demystifying Performance
                    </h3>
                </div>

                {/* White Section */}
                <div className="w-full lg:max-w-[920px] bg-white rounded-2xl flex gap-[120px] p-12 sm:flex-row flex-col max-lg:gap-4 max-lg:p-5 items-center">

                    {/* Steps */}
                    <div className="w-full max-w-[282px] max-lg:w-full flex">
                        <ul className="list-none p-0 mb-0 w-full max-lg:max-w-full">
                            {/* Step 1 */}
                            <li className="flex items-center gap-4 border-b border-[#F0F0F0] py-4 md:py-6 first:pt-0 last:border-none last:pb-0">
                                <div className="w-[70px] h-[54px] md:min-w-16 md:w-16 md:h-16 rounded-full bg-[#B5E4CA] flex items-center justify-center">
                                    <img src="assets/icons/mouse.svg" alt="company" loading="lazy" className="w-auto h-5 md:h-auto" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-black font-semibold text-sm md:text-base leading-normal">
                                        Enroll & Signup
                                    </h3>
                                    <p className="text-black text-xs md:text-sm mb-0 font-normal leading-normal md:leading-[22px]">
                                        Verify identity and gain access by signing up.
                                    </p>
                                </div>
                            </li>

                            {/* Step 2 */}
                            <li className="flex gap-4 border-b border-[#F0F0F0] py-4 md:py-6 last:border-none">
                                <div className="w-[70px] h-[54px] md:min-w-16 md:w-16 md:h-16 rounded-full bg-[#FFBC99] flex items-center justify-center">
                                    <img src="assets/icons/Craft.svg" alt="company" loading="lazy" className="w-auto h-5 md:h-auto" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-black font-semibold text-sm md:text-base leading-normal">
                                        Craft Your Narrative
                                    </h3>
                                    <p className="text-black text-xs md:text-sm mb-0 font-normal leading-normal md:leading-[22px]">
                                        Review your data and craft customized dashboards.
                                    </p>
                                </div>
                            </li>

                            {/* Step 3 */}
                            <li className="flex gap-4 md:py-6 py-4 pb-0">
                                <div className="w-[70px] h-[54px] md:min-w-16 md:w-16 md:h-16 rounded-full bg-[#CABDFF] flex items-center justify-center">
                                    <img src="assets/icons/Share.svg" alt="company" loading="lazy" className="w-auto h-5 md:h-auto" />

                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-black font-semibold text-sm md:text-base leading-normal">
                                        Share Your Story
                                    </h3>
                                    <p className="text-black text-xs md:text-sm mb-0 font-normal leading-normal md:leading-[22px]">
                                        Easily share your insights with stakeholders
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Pricing Section */}
                    <div className="w-full max-w-[422px] max-lg:w-full flex flex-col">
                        <h2 className="text-black font-semibold text-[20px] md:text-[28px] leading-normal md:leading-10 mb-4">
                            Sign Up & Start Sharing!
                        </h2>

                        <ul className="flex flex-col md:gap-4 gap-3 list-none p-0 text-black">
                            {[
                                'Start your journey by enrolling and signing up for our platform, where your identity is verified for secure access.',
                                'Effortlessly manage and refine your data from various sources, creating customized dashboards that tell your unique story.',
                                'Share your insights seamlessly, allowing you to communicate the impact of your data-driven narrative with stakeholders.',
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="text-xs md:text-sm font-normal leading-normal md:leading-[22px] pl-8 bg-[url('/assets/icons/circle-check-black.svg')] bg-no-repeat bg-left bg-center"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Price Action */}
                        <div className="flex items-center justify-between gap-10 max-md:flex-col max-md:items-start max-md:gap-4 mt-6 md:mt-8">
                            <div>
                                <h4 className="font-semibold text-[18px] md:text-xl text-black leading-normal md:leading-7 mb-1.5">
                                    Free Sign-Up
                                </h4>
                                <label className="text-xs md:text-sm text-black leading-normal md:leading-[18px]">
                                    for Investors
                                </label>
                            </div>

                            <a
                                href="#our-pricing"
                                className="w-full md:w-fit flex items-center justify-center py-3 px-4 md:py-3 md:px-6 rounded-lg md:rounded-xl bg-[rgba(81,114,231,0.15)] text-[#5172E7] text-sm md:text-base font-semibold transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:border hover:border-[#1877F2]">
                                See our pricing
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
