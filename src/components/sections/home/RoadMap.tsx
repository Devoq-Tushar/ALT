import { type FC, useState, useRef, useEffect, lazy, Suspense } from 'react'

/* Lazy DearFlipViewer */
const DearFlipViewer = lazy(() => import('../../../components/DearFlipViewer'))

interface PDFSkeletonProps {
    height?: string
}

/* Skeleton placeholder while PDF loads */
const PDFSkeleton: FC<PDFSkeletonProps> = ({ height = '600px' }) => {
    return (
        <div
            className="w-full rounded-xl bg-[#e0e0e0]"
            style={{ height }}
        />
    )
}

const RoadMap: FC = () => {
    const [loadPDF, setLoadPDF] = useState<boolean>(false)
    const pdfWrapperRef = useRef<HTMLDivElement | null>(null)

    /* Intersection Observer: load PDF only when in viewport */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoadPDF(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '200px' }
        )

        if (pdfWrapperRef.current) observer.observe(pdfWrapperRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section className="relative container flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-8 sm:gap-[50px] px-6 py-8 md:py-[120px]">
            {/* Left: Flip Viewer */}
            <div className="w-full max-w-[522px] bg-[#F2F4FA] rounded-2xl py-3.5 px-4 md:pt-[23px] md:px-[26px] md:pb-[50px]">
                <div className="flex h-full w-full flex-col items-start justify-start rounded-lg md:gap-5">
                    <label className="mt-4 text-left bg-[#FFFFFF] rounded-lg px-3 py-1 text-black font-semibold text-sm md:text-base">
                        Sample digital report
                    </label>

                    <div ref={pdfWrapperRef} className="w-full">
                        {!loadPDF && <PDFSkeleton />}
                        {loadPDF && (
                            <Suspense fallback={<PDFSkeleton />}>
                                <DearFlipViewer
                                    pdfURL="/pdf/the-three-musketeers.pdf"
                                    // height="600px"
                                    options={{
                                        webgl: true,
                                        autoEnableOutline: false,
                                    }}
                                />
                            </Suspense>
                        )}
                    </div>
                </div>
            </div>

            {/* Right: Text & Icons */}
            <div className="w-full max-w-[593px] flex flex-col justify-center items-center md:items-start gap-6 md:gap-8">
                <div className='flex flex-col justify-center items-center md:items-start gap-5 md:gap-6'>
                    <div
                        className="flex flex-col items-center md:items-start gap-1.5 text-start">
                        <span className="text-[#5172E7] text-xs md:text-sm font-medium border border-[#5172E7] px-1.5 md:px-[9.5px] py-[0.5] md:py-[1.2px] rounded-full leading-normal md:leading-[26px]">
                            How It work
                        </span>

                        <h5 className="text-center md:text-left text-[28px] md:text-[48px] font-semibold leading-normal md:leading-[51px]">
                            Roadmap to <br /> Transparency
                        </h5>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-2 text-start">
                        <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-x-7 md:gap-y-4">
                            {[
                                {
                                    Icon: "assets/icons/compass.svg",
                                    title: 'Standardized performance metrics',
                                    desc: 'We provide a unified benchmark to compare private funds reliably.',
                                },
                                {
                                    Icon: "assets/icons/eye-slash.svg",
                                    title: 'Expose hidden risks',
                                    desc: 'Shines light on disintermediation and adverse selection in co-investing.',
                                },
                                {
                                    Icon: "assets/icons/slash.svg",
                                    title: 'No more benchmark shopping',
                                    desc: 'Eliminates the practice of cherry-picking favorable indexes.',
                                },
                                {
                                    Icon: "assets/icons/blue-lock.svg",
                                    title: 'Counter distorted returns',
                                    desc: 'Adjusts for time-zero bias and subscription credit distortions.',
                                },
                            ].map(({ Icon, title, desc }, i) => (
                                <div
                                    key={i}
                                    className="flex w-full max-w-[282px] flex-col items-center sm:items-start">
                                    <div className="mb-3 md:mb-4 bg-white rounded-xl shadow-[0_9.4px_18.8px_rgba(0,0,0,0.12)] p-[9px] py-[8.5px] md:p-2.5">
                                        <Suspense fallback={null}>
                                            <img src={Icon} alt="" className='w-auto h-[21px] md:w-[27px] md:h-[27px]' />
                                        </Suspense>
                                    </div>

                                    <h6 className="font-semibold text-sm md:text-base leading-normal md:leading-[26px] mb-0.5">{title}</h6>
                                    <p className="text-center md:text-left font-normal text-sm md:text-base leading-normal md:leading-6 text-[#676767]/70">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center md:text-left bg-[#5172E7] rounded-lg md:rounded-xl py-[12.5px] md:py-4 px-6 w-full md:w-fit">
                    <div
                        className="read-btn cursor-pointer font-semibold text-white text-sm md:text-base leading-normal"
                        data-source="/pdf/whitepaper.pdf"
                    >
                        Read our Whitepaper
                    </div>
                </div>

            </div>
        </section>
    )
}

export default RoadMap
