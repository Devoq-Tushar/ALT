import { useState } from "react";

interface RegulationPoint {
    text: string;
    regulationList?: string[];
}


interface FAQ {
    id: number;
    title: string;
    subtitle?: string;
    points?: RegulationPoint[];
}


const faqs: FAQ[] = [
    {
        id: 1,
        title: "1. Performance Benchmarks",
        subtitle: "For Manager selection and Manager appraisal",
        points: [
            {
                text: "Who are Fund’s peers using our TruePeer™ methodology and why?",
                regulationList: [
                    "Peer groups are identified based on observed investing behavior rather than self-reported labels. Eg 2016–2019, North America, SaaS AI",
                ],
            },
            {
                text: "How does this manager’s investment pattern?",
                regulationList: [
                    "Pattern analysis uses rolling exposure windows.",
                ],
            },
            {
                text: "How should this fund be classified?",
                regulationList: [
                    "Peer groups are identified based on observed investing behavior rather than self-reported labels. Eg 2016–2019, North America, SaaS AI",
                ],
            },
            {
                text: "How does our performance look after adjusting for fund size?",
                regulationList: [
                    "Peer groups are identified based on observed investing behavior rather than self-reported labels. Eg 2016–2019, North America, SaaS AI",
                ],
            },
        ],
    },
    {
        id: 2,
        title: "2. Risk Benchmarks",
        subtitle: "For Risk and Compliance departments",
        points: [
            {
                text: "What concentration risk do we face if a sector weakens across managers?",
                regulationList: [
                    "Stress-tested using correlated drawdown models.",
                ],
            },
            {
                text: "Will adding this manager create conflict-of-interest risks?",
                regulationList: [
                    "Peer groups are identified based on observed investing behavior rather than self-reported labels. Eg 2016–2019, North America, SaaS AI",
                ],
            },
        ],
    },
];


const WhatWeOffer = () => {
    const [openId, setOpenId] = useState<number | null>(1);
    const [openSubPoint, setOpenSubPoint] = useState<string | null>(null);

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
            <div className="relative flex flex-col justify-center items-center gap-6 sm:gap-[50px] container w-full p-6 md:py-[100px] md:pt-[77px] md:pb-[135px] rounded-2xl z-10">
                <span className="text-text-primary font-semibold text-2xl sm:text-[48px] uppercase">What We Answer</span>
                <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-6 md:gap-[30px] w-full">
                    <div className="relative overflow-hidden flex flex-col gap-3 max-w-[470px] w-full border-4 border-bg-secondary/10 rounded-[20px] p-3.5 pt-4 pb-6 md:p-[30px] md:pt-6 box-border">

                        <div className="absolute top-0 md:top-0 left-[42px] md:left-[66px] z-0 h-full">
                            <div className="w-[1.49px] md:w-[1.8px] h-full bg-[#EDAB5D]"></div>
                        </div>
                        <div className="absolute -top-10 md:-top-3 right-[-110px] md:right-[-90px] z-0">
                            <img src="assets/images/fetured-img-what-we-offer.png" alt="" className="w-full md:h-full h-[350px]" />
                        </div>
                        <div className="w-full flex justify-end md:justify-center">
                            <p className="relative shrink-0 text-text-primary text-[18px] lg:text-2xl font-semibold max-w-[222px] md:max-w-[278px]">Regulatory-Aligned Reporting</p>
                        </div>
                        <div className=" flex flex-col justify-start items-start gap-2 md:gap-2.5 w-full max-w-[374px]">
                            {/* ILPA */}
                            <div className="flex justify-start items-center gap-3 md:gap-5 relative">
                                <div className="w-2.5 h-2.5 bg-[#EDAB5D] rounded-full absolute z-1 -top-1 left-6 md:left-[31px]"></div>
                                <div className="bg-white box-border flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative z-2 rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-ilpa.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">ILPA</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">Reporting Standards</p>
                                </div>
                            </div>

                            {/* AIFMD */}
                            <div className="flex justify-start items-center gap-3 md:gap-5">
                                <div className="bg-white box-border flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)] md:shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-aifmd.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">AIFMD</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">Directive 2011/61//EU</p>
                                </div>
                            </div>

                            {/* MIFID II */}
                            <div className="flex justify-start items-center gap-3 md:gap-5">
                                <div className="bg-white box-border flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-gips.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">MIFID II</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">Product & Marketing Rules</p>
                                </div>
                            </div>

                            {/* SEC */}
                            <div className="flex justify-start items-center gap-3 md:gap-5">
                                <div className="bg-white box-border flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
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
                                <div className="bg-white box-border flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-anti-fraud-rule.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">Anti-Fraud Rule</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">(Investment Advisers Act Rule 206(4)-8)</p>
                                </div>
                            </div>

                            {/* FINRA */}
                            <div className="flex justify-start items-center gap-3 md:gap-5 relative">
                                <div className="w-2.5 h-2.5 bg-[#EDAB5D] rounded-full absolute z-1 -bottom-1 left-6 md:left-[31px]"></div>
                                <div className="bg-white box-border flex gap-4 items-center justify-center p-[17px] md:p-[21px] relative z-2 rounded-[50px] shrink-0 shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
                                    <img src="assets/icons/icn-mifid.svg" alt="" className="w-6 md:w-[30px] h-full" />
                                </div>
                                <div className="flex flex-col justify-start items-center gap-1.5 md:gap-2">
                                    <p className=" relative shrink-0 text-text-primary font-semibold text-[16px] lg:text-[18px] w-full">FINRA</p>
                                    <p className="relative shrink-0 text-text-secondary font-normal text-[12px] lg:text-[14px] w-full">Rule 2210</p>
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
                                            className={`w-full flex items-center justify-between cursor-pointer ${isOpen ? "md:py-6 md:pb-4 py-4 pb-3" : "md:py-6 py-4"} text-left`}
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

                                                        {faq.points && (
                                                            <ul className="space-y-3.5">
                                                                {faq.points.map((point, idx) => {
                                                                    const hasDropdown = point.regulationList?.length;
                                                                    const key = `${faq.id}-${idx}`;
                                                                    const isOpenSub = openSubPoint === key;

                                                                    return (
                                                                        <li
                                                                            key={idx}
                                                                            className={`bg-[#F7F7F7] px-3 ${hasDropdown
                                                                                ? isOpenSub
                                                                                    ? "rounded-2xl"
                                                                                    : "rounded-full"
                                                                                : "rounded-full"
                                                                                }`}
                                                                        >
                                                                            {/* HEADER */}
                                                                            <button
                                                                                onClick={() =>
                                                                                    hasDropdown
                                                                                        ? setOpenSubPoint(isOpenSub ? null : key)
                                                                                        : null
                                                                                }
                                                                                className={`w-full flex items-center justify-between gap-3 ${openSubPoint ? "py-2 md:py-3.5 md:pb-2.5" : "py-2 md:py-3"}`}
                                                                            >
                                                                                <div className="flex items-center gap-2 md:gap-3">
                                                                                    <img
                                                                                        src="assets/icons/icn-check.svg"
                                                                                        alt=""
                                                                                        className="md:w-5 md:h-6 w-4 h-4"
                                                                                    />
                                                                                    <span className="font-medium text-xs md:text-sm text-text-secondary text-start leading-[21px]">
                                                                                        {point.text}
                                                                                    </span>
                                                                                </div>

                                                                                {hasDropdown && (
                                                                                    <svg
                                                                                        className={`w-4 h-4 transition-transform ${isOpenSub ? "rotate-180" : ""
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
                                                                                )}
                                                                            </button>

                                                                            {/* DROPDOWN */}
                                                                            {hasDropdown && isOpenSub && (
                                                                                <div className="pt-2 pb-3 space-y-2 text-xs md:text-sm text-text-secondary border-t border-[#EEEEEE]">
                                                                                    {point.regulationList!.map((item, i) => (
                                                                                        <p key={i}>{item}</p>
                                                                                    ))}
                                                                                </div>
                                                                            )}
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
