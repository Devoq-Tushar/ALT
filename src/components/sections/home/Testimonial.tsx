import type { FC } from "react";
import Slider, { type Settings, type CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* =======================
   ARROWS
======================= */

const PrevArrow: FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute md:bottom-[-67px] bottom-1 left-1/2 -translate-x-[120%] z-10 bg-white/10 rounded-full w-[38px] h-[38px] md:w-12 md:h-12 flex items-center justify-center cursor-pointer">
            <img src="assets/icons/arrow-left.svg" alt="" className="w-[19px] h-[19px] md:w-6 md:h-6" />
        </button>
    );
};

const NextArrow: FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute md:bottom-[-67px] bottom-1 left-1/2 translate-x-[20%] z-10 bg-white/10 rounded-full w-[38px] h-[38px] md:w-12 md:h-12 flex items-center justify-center cursor-pointer">
            <img src="assets/icons/arrow-right.svg" alt="" className="w-[19px] h-[19px] md:w-6 md:h-6" />
        </button>
    );
};

/* =======================
   SLIDER SETTINGS
======================= */

const settings: Settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2,
                arrows: true,
                prevArrow: <PrevArrow />,
                nextArrow: <NextArrow />,
            },
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2,
                arrows: true,
                prevArrow: <PrevArrow />,
                nextArrow: <NextArrow />,
            },
        },
        {
            breakpoint: 575,
            settings: {
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
                variableWidth: true,
                arrows: true,
            },
        },
    ],
};

/* =======================
   DATA
======================= */

interface Slide {
    label: string;
    title: string;
    description: string;
    bg: string;
}

const slides: Slide[] = [
    {
        label: "Portfolio Policy Benchmark",
        title: "Have we outperformed a mix of indexes that represents our long-term strategic asset allocation?",
        description:
            "Assesses outperformance against a mix of indices representing long- term strategic asset allocation.",
        bg: "bg-1.svg",
    },
    {
        label: "Model Portfolio Benchmark",
        title:
            "Have we done better than a simple, investable & passive approach?",
        description:
            "Evaluates pool performance against a traditional 60/40 portfolio. Offers customization based on investment constraints and the investable universe, providing flexibility for different equity and fixed-income allocations.",
        bg: "bg-2.svg",
    },
    {
        label: "Portfolio Policy Benchmark",
        title: "Have we outperformed a mix of indexes that represents our long-term strategic asset allocation?",
        description:
            "Assesses outperformance against a mix of indices representing long- term strategic asset allocation.",
        bg: "bg-3.svg",
    },
    {
        label: "Model Portfolio Benchmark",
        title:
            "Have we done better than a simple, investable & passive approach?",
        description:
            "Evaluates pool performance against a traditional 60/40 portfolio. Offers customization based on investment constraints and the investable universe, providing flexibility for different equity and fixed-income allocations.",
        bg: "bg-4.svg",
    },
    {
        label: "Portfolio Policy Benchmark",
        title:
            "Have we outperformed a mix of indexes that represents our long-term strategic asset allocation?",
        description:
            "Assesses outperformance against a mix of indices representing long- term strategic asset allocation.",
        bg: "bg-5.svg",
    },
    {
        label: "Portfolio Policy Benchmark",
        title: "Have we outperformed a mix of indexes that represents our long-term strategic asset allocation?",
        description:
            "Assesses outperformance against a mix of indices representing long- term strategic asset allocation.",
        bg: "bg-1.svg",
    },
    {
        label: "Model Portfolio Benchmark",
        title:
            "Have we done better than a simple, investable & passive approach?",
        description:
            "Evaluates pool performance against a traditional 60/40 portfolio. Offers customization based on investment constraints and the investable universe, providing flexibility for different equity and fixed-income allocations.",
        bg: "bg-2.svg",
    },
    {
        label: "Portfolio Policy Benchmark",
        title: "Have we outperformed a mix of indexes that represents our long-term strategic asset allocation?",
        description:
            "Assesses outperformance against a mix of indices representing long- term strategic asset allocation.",
        bg: "bg-3.svg",
    }
];

/* =======================
   COMPONENT
======================= */

const Testimonial: FC = () => {
    return (
        <section
            id="what-we-do"
            className="
        w-full
        bg-home-primary
        overflow-hidden
        py-[120px] pb-48
        max-md:py-[30px]
      "
        >
            {/* Header */}
            <div className="flex flex-col items-center gap-3 mb-12 max-md:mb-8 px-6 md:py-0">
                <h3 className="text-white font-semibold text-[48px] text-center max-lg:text-[32px] max-md:text-[28px] max-w-[640px] leading-normal md:leading-[58px]">
                    Turn Complexity into Clarity
                </h3>

                <p className="text-white/70 text-center max-w-[640px] leading-[26px]">
                    Our platform is designed to help you effectively address key questions
                    and seamlessly convert information into investor confidence.
                </p>
            </div>

            {/* Slider */}
            <div className="relative testimonial">

                <Slider {...settings}>
                    {slides.map((item, idx) => (
                        <div key={idx} className="px-2">
                            <div className="relative rounded-xl md:min-h-[378px] min-h-[328px] overflow-hidden flex justify-center items-center">

                                {/* Background image (blurred) */}
                                <div
                                    className="absolute inset-0 bg-no-repeat bg-cover bg-center blur-md scale-110"
                                    style={{
                                        backgroundImage: `url(/assets/images/${item.bg})`,
                                    }}
                                />

                                {/* Dark overlay (optional) */}
                                <div className="absolute inset-0 bg-black/35" />

                                {/* Content (NOT blurred) */}
                                <div className="relative z-10 md:p-6 p-5 flex h-full justify-center items-center">
                                    <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
                                        <label className="text-white/70 text-xs font-normal bg-[#FFFFFF1A] py-1.5 px-3 rounded-[20px]">
                                            {item.label}
                                        </label>
                                        <div className="flex flex-col justify-center items-center gap-3">
                                            <h3 className="text-white font-semibold text-[20px] md:text-2xl text-center">
                                                {item.title}
                                            </h3>

                                            <p className="text-white/80 text-sm md:text-base leading-6 text-center">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
};

export default Testimonial;
