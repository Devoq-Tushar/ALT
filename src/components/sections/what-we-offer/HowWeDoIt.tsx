
interface dataType {
    id: number;
    title: string;
    step: string;
    desc: string;
    image: string;
}

const data: dataType[] = [
    {
        id: 1,
        title: "Clean & Normalize The Data",
        step: "Step 01",
        desc: "Data is harmonized across sources, vintages, and reporting structures using machine-assisted validation and metadata alignment.",
        image: "/assets/images/how-we-do-it-img-1.png",
    },
    {
        id: 2,
        title: "Advanced Outlier Detection",
        step: "Step 02",
        desc: "We only remove an outlier if the IRR is statistically inconsistent with the MOIC and fund size based on the joint distribution.",
        image: "/assets/images/how-we-do-it-img-2.png",
    },
    {
        id: 3,
        title: "Vintage- & Size-Adjusted Fund Ranking",
        step: "Step 03",
        desc: "We re-rank each fund after stripping out vintage year and fund size effects, so you see where it truly sits in the peer group.",
        image: "/assets/images/how-we-do-it-img-3.png",
    },
];


const HowWeDoIt = () => {

    return (
        <div className="relative overflow-hidden">
            <div className="relative flex flex-col justify-center items-center gap-6 sm:gap-12 container w-full p-6 sm:py-[100px] sm:pt-0 rounded-2xl z-10">
                <span className="text-text-primary font-semibold text-2xl sm:text-[48px] uppercase">How We Do It</span>
                <div className="content-stretch flex gap-5 flex-wrap flex-row md:gap-6 lg:gap-[30px] items-center justify-center relative shrink-0 w-full">
                    {data.map((data, index) => (
                        <div key={index} className="bg-white flex flex-col gap-4 md:gap-5 items-center overflow-clip pb-4 md:pb-6 pt-0 px-4 md:px-5 content-stretch relative rounded-xl md:rounded-[20px] shrink-0 w-full md:max-w-[370px] border-2 md:border-4 border-bg-secondary/10 box-border">
                            <div className="bg-[#f7f7f7] box-border content-stretch flex gap-3 md:gap-4 items-center justify-center px-4 md:px-5 py-2 md:py-2.5 relative rounded-bl-xl rounded-br-xl md:rounded-bl-2xl md:rounded-br-2xl shrink-0">
                                <div className="relative bg-bg-secondary w-2 h-2 rounded-full">
                                </div>
                                <p className="leading-[1.3] relative shrink-0 text-text-primary font-semibold text-[12px] md:text-[14px] text-nowrap whitespace-pre">{data.step}</p>
                                <div className="relative bg-bg-secondary w-2 h-2 rounded-full">
                                </div>
                            </div>
                            <div className="h-[250px] md:h-[286px] relative shrink-0 w-full">
                                <img alt="how-we-do-it-images" className="w-full h-full" src={data.image} loading="lazy" />
                            </div>
                            <div className="content-stretch flex flex-col gap-2 md:gap-3 items-start leading-normal relative shrink-0 w-full">
                                <p className="relative shrink-0 text-text-primary font-semibold text-[18px] lg:text-[20px] w-full sm:min-h-[60px]">
                                    {data.title}
                                </p>
                                <p className="relative shrink-0 text-text-secondary font-semibold text-[12px] md:text-[14px] w-full tracking-normal">{data.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowWeDoIt;
