import { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'


const Features: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [altModal, setAltModal] = useState<boolean>(false)
    const [aptlyModal, setAptlyModal] = useState<boolean>(false)
    const [transparentModal, setTransparentModal] = useState<boolean>(false)
    console.log(altModal);
    console.log(aptlyModal);
    console.log(transparentModal);
    return (
        <section
            id="why-alt"
            className="w-full flex flex-col py-[120px] bg-white bg-[url('/assets/landing/bg-circle.svg')] gap-8 md:gap-8 bg-no-repeat bg-position-[110%_center]
      max-[991px]:p-6 max-[991px]:py-8"
        >
            {/* HEADER */}
            <div className="max-w-[1170px] mx-auto px-4">
                <div className="flex flex-col items-center justify-between text-center max-[767px]:flex-col gap-3">
                    <p className=" text-black text-sm md:text-[16px] bg-[#F2F4FA] rounded-full px-4 py-2 font-medium leading-[26px]">
                        Better storytelling
                    </p>
                    <h2 className="text-[48px] leading-normal md:leading-[58px] font-bold text-black max-[991px]:text-[28px]">
                        Why Alt?
                    </h2>
                </div>
            </div>

            {/* FEATURES */}
            <div className="max-w-[1170px] mx-auto flex gap-4 md:gap-[25px] items-start max-[1199px]:flex-wrap">
                {/* LEFT */}
                <div className="w-1/2 max-[1199px]:w-full bg-[#D5E8F6] rounded-2xl p-5 md:p-6 flex flex-col justify-between md:h-[464px] group gap-3">
                    <div className='flex flex-col gap-4 md:gap-5'>
                        <p className="text-xs md:text-sm text-black">
                            Our tailored benchmarking platform ensure precise, apple-to-apple
                            comparisons for relevant assessments of risk and rewards.
                        </p>

                        <ul className="text-xs md:text-[14px] font-normal list-disc ml-3 md:ml-5">
                            <li>
                                Are you still comparing your VC performance against the S&P500 instead of a small or mid cap index, thereby understating your performance and overstating your risk?
                            </li>
                            <li>
                                Are you factoring in fees in your comparison with a passive benchmark?
                            </li>
                            <li>
                                Are you comparing by adding a fixed premium against the index?
                            </li>
                        </ul>

                        <p className="text-xs md:text-sm text-black">
                            Alt Indices eliminates these concerns, ensuring your benchmarks align
                            with your investment goals. Choose customized benchmarks for a
                            strategic edge in your investment journey!
                        </p>
                    </div>
                    <div
                        className="flex justify-between items-center md:items-end cursor-pointer"
                        onClick={() => setModal(true)}
                    >
                        <label className="text-[20px] md:text-[28px] font-semibold leading-normal md:leading-10">
                            Tailored Benchmarking <br /> Solutions
                        </label>
                        <img
                            src="assets/icons/arrow-up-right.svg"
                            alt="Why Alt?"
                            loading="lazy"
                            className="transition-all duration-[2000ms] group-hover:translate-x-1"
                        />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/2 max-[1199px]:w-full flex flex-col sm:flex-row gap-[25px] sm:h-[464px]">
                    {/* LEFT COLUMN */}
                    <div className="w-full sm:w-1/2 flex flex-col gap-[25px]">
                        {/* TOP */}
                        <div
                            className="bg-[#C5DFFF] rounded-[16px] p-5 md:p-[24px] flex flex-col justify-between gap-2.5 md:gap-3.5 group cursor-pointer"
                            onClick={() => setAptlyModal(true)}
                        >
                            <p className="text-xs md:text-sm text-black leading-normal md:leading-[22px]">
                                Intuitive user-friendly interface for self-assessment and stakeholder engagement.
                            </p>
                            <div className="flex justify-between items-center md:items-end">
                                <label className="text-[20px] md:text-[28px] font-semibold leading-normal md:leading-10">
                                    Aptly <br className='md:block hidden' /> Aligned
                                </label>
                                <img
                                    src="assets/icons/arrow-up-right.svg"
                                    className="transition-all duration-[2000ms] group-hover:translate-x-1"
                                />
                            </div>
                        </div>

                        {/* BOTTOM */}
                        <div
                            className="bg-[#D6F6FD] rounded-[16px] p-5 md:p-[24px] flex flex-col justify-between gap-3 md:gap-4 group cursor-pointer"
                            onClick={() => setAltModal(true)}
                        >
                            <p className="text-xs md:text-sm text-black leading-normal md:leading-[22px]">
                                Deliver a comprehensive outlook through a combination of complementary data and insightful visualizations.
                            </p>
                            <div className="flex justify-between items-center md:items-end">
                                <label className="text-[20px] md:text-[28px] font-semibold leading-normal md:leading-10">
                                    Comprehensive <br /> Insights
                                </label>
                                <img
                                    src="assets/icons/arrow-up-right.svg"
                                    className="transition-all duration-[2000ms] group-hover:translate-x-1 -ml-6"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div
                        className="w-full sm:w-1/2 bg-[#D8FDF2] rounded-[16px] p-5 md:p-[24px] flex flex-col justify-between gap-3 sm:gap-2 group cursor-pointer"
                        onClick={() => setTransparentModal(true)}
                    >
                        <p className="text-xs md:text-sm text-black leading-normal md:leading-[22px]">
                            Alt Indices stands out by adhering to global standards like the IOSCO financial benchmarks framework, setting a new standard for reliability and transparency in private market benchmarking. Our service aligns incentives, eliminating biases in performance reporting.
                        </p>
                        <div className="flex justify-between items-center md:items-end">
                            <label className="text-[20px] md:text-[28px] font-semibold leading-normal md:leading-10">
                                Transparent Performance Metrics
                            </label>
                            <img
                                src="assets/icons/arrow-up-right.svg"
                                className="transition-all duration-[2000ms] group-hover:translate-x-1"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* MODALS */}
            <Modal isOpen={modal} toggle={() => setModal(false)} centered>
                <ModalHeader toggle={() => setModal(false)}>
                    Tailored Benchmarking Solutions
                </ModalHeader>
                <ModalBody>
                    <div className="w-full aspect-video">
                        <iframe
                            className="w-full h-full"
                            loading="lazy"
                            src="https://www.canva.com/design/DAFNfjhaI-8/Ocv09SuSWvHBwF53BAHJGQ/view?embed"
                            allowFullScreen
                        />
                    </div>
                </ModalBody>
            </Modal>

            {/* repeat same modal structure for others (unchanged logic) */}
        </section>
    )
}

export default Features
