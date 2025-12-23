import { useState } from "react";

interface FAQ {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    points?: string[];
}


const faqs: FAQ[] = [
    {
        id: 1,
        title: "1. Performance Benchmarks",
        subtitle: "For manager selection and manager appraisal*",
        description:
            "Independent, methodology-driven benchmarks designed to align with global compliance and marketing frameworks.",
        points: [
            "Aligned to global regulations and standards",
            "Vintage-year, strategy, geography, and industry segmentation",
            "Fund-level and deal-level benchmarks",
            "Thematic and category-based cohorts (AI, Climate, Cyber, etc.)",
            "Realistic quartile stabilization — removing noise from outliers and gaps",
        ],
    },
    {
        id: 2,
        title: "2. Investable Benchmarks",
        subtitle: "For ETF Products & Asset Managers**",
        description:
            "Benchmarks engineered for replication — not just comparison.",
        points: [
            "Rule-based eligibility criteria",
            "Transparent methodology",
            "Supports index-linked products such as ETFs, SMAs, or structured offerings",
            "Licensing for regulated index products",
        ],
    },
    {
        id: 3,
        title: "3. Risk Benchmarks",
        subtitle: "For Risk, Portfolio Design & TPA Teams**",
        description: "Risk benchmarking aligned with TPA frameworks.",
        points: [
            "Risk-adjusted benchmarks (Sortino-aligned) designed for private markets, where upside variance should not be penalized the way Sharpe-based models do."
        ],
    },
];

const regulationList = [
    "ILPA Reporting Standards",
    "AIFMD — Directive 2011/61/EU",
    "MiFID II Product & Marketing Rules",
    "SEC Marketing Rule (Investment Advisers Act Rule 206(4)-1)",
    "Anti-Fraud Rule (Investment Advisers Act Rule 206(4)-8)",
    "FINRA Rule 2210",
];

const WhatWeOffer = () => {
    const [openId, setOpenId] = useState<number | null>(1);
    const [openSubPoint, setOpenSubPoint] = useState<boolean>(false);


    const toggle = (id: number) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
        <div className="relative overflow-hidden">
            {/* Glow image left */}
            <div className="absolute top-20 left-[-280px] h-[690px] w-[610px] z-1">
                <img src="assets/images/glow-img-1.svg" alt="" className="blur-[100px] sm:blur-[60px]" />
            </div>

            {/* Glow image right */}
            <div className="hidden sm:block absolute top-1/2 sm:top-20 right-[-280px] h-[690px] w-[610px] z-1 rotate-90">
                <img src="assets/images/glow-img-1.svg" alt="" className="blur-[60px]" />
            </div>
            <div className="relative flex flex-col justify-center items-center gap-6 sm:gap-[50px] container w-full p-6 md:py-[100px] md:pt-[30px] md:pb-[171px] rounded-2xl z-10">
                <span className="text-text-primary font-semibold text-2xl sm:text-[48px] uppercase">What We Offer</span>
                <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-6 md:gap-[30px]">
                    <div className="relative overflow-hidden flex flex-col gap-3 max-w-[470px] w-full border-2 md:border-4 border-bg-secondary/10 rounded-[20px] p-4 pt-4 pb-6 md:p-[30px] md:pt-6">

                        <div className="absolute -top-2.5 md:-top-2 left-10 md:left-[60px] z-0">
                            <img src="assets/icons/icn-line.png" alt="" className="w-full h-[575px] md:h-full" />
                        </div>
                        <div className="absolute -top-10 md:-top-3 right-[-110px] md:right-[-90px] z-0">
                            <img src="assets/images/fetured-img-what-we-offer.png" alt="" className="w-full md:h-full h-[350px]" />
                        </div>
                        <div className="w-full flex justify-end md:justify-center">
                            <p className="relative shrink-0 text-text-primary text-[18px] lg:text-2xl font-semibold max-w-[204px] md:max-w-[278px]">Regulatory-Aligned Reporting</p>
                        </div>
                        <div className=" flex flex-col justify-start items-start gap-2 md:gap-2.5 w-full max-w-[374px]">
                            {/* ILPA */}
                            <div className="flex justify-start items-center gap-3 md:gap-5">
                                <div className="bg-white box-border content-stretch flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-ilpa.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">ILPA</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">Reporting Standards</p>
                                </div>
                            </div>

                            {/* AIFMD */}
                            <div className="flex justify-start items-center gap-3 md:gap-5">
                                <div className="bg-white box-border content-stretch flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-aifmd.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">AIFMD</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">Directive 2011/61//EU</p>
                                </div>
                            </div>

                            {/* GIPS® */}
                            <div className="flex justify-start items-center gap-3 md:gap-5">
                                <div className="bg-white box-border content-stretch flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-gips.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">GIPS®</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">Product & Marketing Rules</p>
                                </div>
                            </div>

                            {/* SEC */}
                            <div className="flex justify-start items-center gap-3 md:gap-5">
                                <div className="bg-white box-border content-stretch flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-sec.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">SEC</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">Marketing Rule
                                        (Investment Advisers Act Rule 206(4)-1)</p>
                                </div>
                            </div>

                            {/* Anti-Fraud Rule */}
                            <div className="flex justify-start items-center gap-3 md:gap-5">
                                <div className="bg-white box-border content-stretch flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-anti-fraud-rule.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">Anti-Fraud Rule</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">(Investment Advisers Act Rule 206(4)-8)</p>
                                </div>
                            </div>

                            {/* MIFID II */}
                            <div className="flex justify-start items-center gap-3 md:gap-5">
                                <div className="bg-white box-border content-stretch flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-mifid.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">MIFID II</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">Product & Marketing Rules</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end w-full md:mt-1">
                            <p className="relative shrink-0 text-text-secondary font-normal text-[14px] lg:text-[16px] max-w-[251px] md:max-w-[307px]">Ensuring transparency, compliance, and investor-grade reporting globally.</p>
                        </div>
                    </div>
                    {/* FAQS */}
                    <div className="max-w-[670px] w-full">
                        <div className="flex flex-col gap-6 md:gap-[26px]">
                            {faqs.map(faq => {
                                const isOpen = openId === faq.id;
                                return (
                                    <div
                                        key={faq.id}
                                        className="border-2 md:border-4 border-bg-secondary/10 rounded-[20px] bg-white overflow-hidden px-4 md:px-6"
                                    >
                                        <button
                                            onClick={() => toggle(faq.id)}
                                            className={`w-full flex items-center justify-between ${isOpen ? "md:py-6 md:pb-4 py-4 pb-3" : "md:py-6 py-4"} text-left`}
                                        >
                                            <h3 className="text-lg md:text-2xl font-semibold text-text-primary md:leading-8 leading-[27px]">{faq.title}</h3>
                                            <span className="w-6 h-6 md:w-7 md:h-7 pt-0.5 flex items-center justify-center rounded-full bg-bg-secondary text-white">
                                                {isOpen ? "–" : "+"}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="pb-4 pt-3 md:pb-6 md:pt-4 border-t border-[#EEEEEE]">
                                                {/* SPECIAL LAYOUT FOR FAQ 3 */}
                                                {faq.id === 3 ? (
                                                    <>

                                                        <p className="font-semibold text-xs md:text-sm text-text-secondary mb-1.5">
                                                            {faq.subtitle}
                                                        </p>

                                                        <p className="font-normal text-xs md:text-sm text-text-secondary mb-3 md:mb-4">
                                                            {faq.description}
                                                        </p>

                                                        <p className="text-sm md:text-base text-text-secondary font-normal leading-5 md:leading-6">
                                                            <span className="font-medium text-text-primary">
                                                                Risk-adjusted benchmarks (Sortino-aligned)
                                                            </span>{" "}
                                                            designed for private markets, where upside variance should not be
                                                            penalized the way Sharpe-based models do.
                                                        </p>
                                                    </>
                                                ) : (
                                                    /* DEFAULT LAYOUT FOR FAQ 1 & 2 */
                                                    <>
                                                        {faq.subtitle && (
                                                            <p className="font-semibold text-xs md:text-sm text-text-secondary mb-1.5 md:mb-2 text-nowrap md:text-wrap">
                                                                {faq.subtitle}
                                                            </p>
                                                        )}

                                                        {faq.description && (
                                                            <p className="font-normal text-xs md:text-sm text-text-secondary mb-3 md:mb-4">
                                                                {faq.description}
                                                            </p>
                                                        )}

                                                        {/* {faq.points && (
                                                        <ul className="space-y-3.5">
                                                            {faq.points.map((point, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="flex items-center gap-3 bg-gray-100 rounded-xl p-2.5"
                                                                >
                                                                    <img
                                                                        src="assets/icons/icn-check.svg"
                                                                        alt=""
                                                                        className="w-5 h-5"
                                                                    />
                                                                    <span className="font-medium text-sm text-text-secondary leading-[21px]">
                                                                        {point}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )} */}
                                                        {faq.points && (
                                                            <ul className="space-y-3.5">
                                                                {faq.points.map((point, idx) => {
                                                                    const isFirstDropdown =
                                                                        faq.id === 1 && idx === 0;

                                                                    if (isFirstDropdown) {
                                                                        return (
                                                                            <li key={idx}>
                                                                                {/* DROPDOWN HEADER */}
                                                                                <button
                                                                                    onClick={() => setOpenSubPoint(v => !v)}
                                                                                    className="w-full flex items-center justify-between gap-2 md:gap-3 bg-gray-100 rounded-full p-2 md:p-3"
                                                                                >
                                                                                    <div className="flex items-center gap-2 md:gap-3">
                                                                                        <img
                                                                                            src="assets/icons/icn-check.svg"
                                                                                            alt=""
                                                                                            className="md:w-5 md:h-5 w-4 h-4"
                                                                                        />
                                                                                        <span className="font-medium text-xs md:text-sm text-text-secondary text-start">
                                                                                            {point}
                                                                                        </span>
                                                                                    </div>

                                                                                    <svg
                                                                                        className={`w-4 h-4 transition-transform ${openSubPoint ? "rotate-180" : ""
                                                                                            }`}
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="none"
                                                                                    >
                                                                                        <path
                                                                                            d="M6 9l6 6 6-6"
                                                                                            stroke="currentColor"
                                                                                            strokeWidth="2"
                                                                                            strokeLinecap="round"
                                                                                            strokeLinejoin="round"
                                                                                        />
                                                                                    </svg>
                                                                                </button>

                                                                                {/* DROPDOWN CONTENT */}
                                                                                {openSubPoint && (
                                                                                    <ul className="mt-2 md:mt-3 ml-8 md:ml-10 space-y-2 text-xs md:text-sm text-text-secondary list-disc">
                                                                                        {regulationList.map((item, i) => (
                                                                                            <li key={i}>{item}</li>
                                                                                        ))}
                                                                                    </ul>
                                                                                )}
                                                                            </li>
                                                                        );
                                                                    }

                                                                    /* NORMAL POINTS */
                                                                    return (
                                                                        <li
                                                                            key={idx}
                                                                            className="flex items-center gap-2 md:gap-3 bg-gray-100 rounded-full p-2 md:p-2.5"
                                                                        >
                                                                            <img
                                                                                src="assets/icons/icn-check.svg"
                                                                                alt=""
                                                                                className="md:w-5 md:h-5 w-4 h-4"
                                                                            />
                                                                            <span className="font-medium text-xs md:text-sm text-text-secondary leading-[18px] md:leading-[21px]">
                                                                                {point}
                                                                            </span>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        )}

                                                    </>
                                                )}
                                            </div>
                                        )}

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhatWeOffer;
