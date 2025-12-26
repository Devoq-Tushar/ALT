
const WhatWeSolve = () => {
    return (
        <div className="container box-border flex flex-col-reverse md:flex-row gap-8 md:gap-20 items-center justify-between py-6 md:pb-20 md:pt-0 lg:pb-[100px] lg:pt-0 relative w-full z-10">

            {/* Desktop: Image on left */}
            <div className="max-w-[570px]">
                <img alt="what-we-solve" className="rounded-[20px] border-4 border-bg-secondary/10" src="assets/images/what-we-solve-img.png" loading="lazy" />
            </div>
            {/* Title and Description */}
            <div className="content-stretch flex flex-col gap-4 lg:gap-6 items-start relative shrink-0 w-full max-w-[327px] md:w-full lg:max-w-[470px] text-center lg:text-left">
                <p className="font-semibold leading-[1.3] relative shrink-0 text-text-primary text-[24px] md:text-[40px] lg:text-[48px] uppercase w-full">What We Solve</p>
                <div className="content-stretch flex flex-col gap-3 lg:gap-4 items-start leading-normal relative shrink-0 w-full">
                    <p className=" relative shrink-0 text-text-primary font-medium text-[16px] lg:text-[18px] w-full">Alt Indices removes noise, normalizes the skew, and restores statistical truth.</p>
                    <p className="relative shrink-0 text-text-secondary font-normal text-[14px] lg:text-[16px] w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <p className="relative shrink-0 text-text-secondary font-normal text-[14px] lg:text-[16px] w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeSolve;
