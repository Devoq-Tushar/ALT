import { useState, useRef, useEffect, lazy, Suspense } from 'react'



import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaMuteButton,
    MediaFullscreenButton,
} from 'media-chrome/react'

/* 🔹 Lazy load ReactPlayer */
const ReactPlayer = lazy(() => import('react-player'))

/* 🔹 Skeleton placeholder */
const VideoSkeleton: React.FC = () => {
    return (
        <div className="w-full aspect-video bg-[#111] rounded-xl" />
    )
}

const WhyYouNeed: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [loadVideo, setLoadVideo] = useState<boolean>(false)

    const hideTimeoutRef = useRef<number | null>(null)
    const videoWrapperRef = useRef<HTMLDivElement | null>(null)

    /* 🔹 Intersection Observer */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoadVideo(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '200px' }
        )

        if (videoWrapperRef.current) observer.observe(videoWrapperRef.current)

        return () => observer.disconnect()
    }, [])

    const handleMouseEnter = () => {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        hideTimeoutRef.current = setTimeout(() => {
            setIsHovered(false)
        }, 3000)
    }

    return (
        <section className="w-full container p-6 md:py-[120px] md:pb-[60px] flex flex-col justify-center items-center md:gap-9">
            <div className="flex flex-col justify-center items-center gap-6 w-full">
                {/* 🔹 Header */}
                <div className="flex flex-col items-center text-center gap-1 md:gap-1.5">
                    <span className="text-[#5172E7] text-xs md:text-sm font-medium border border-[#5172E7] px-1.5 md:px-[9.5px] py-[0.5] md:py-[1.2px] rounded-full leading-normal md:leading-[26px]">
                        WHY YOU NEED
                    </span>
                    <h1 className="text-[28px] md:text-[48px] text-black font-semibold leading-normal md:leading-[51px]">
                        The Benchmarking Dilemma
                    </h1>
                </div>

                {/* 🔹 Content */}
                {/* <div className="grid grid-cols-4 text-center max-md:grid-cols-2 max-sm:grid-cols-1"> */}
                <div className="flex flex-wrap text-center justify-center md:gap-6 lg:gap-0">
                    {[
                        {
                            Icon: "assets/icons/waterfall.svg",
                            title: 'Lack of standard benchmarks',
                            desc: 'Private investors lack tools like the S&P 500 for reliable comparisons.',
                        },
                        {
                            Icon: "assets/icons/search-normal.svg",
                            title: 'Limited transparency',
                            desc: 'Investors struggle to assess real returns in private equity and VC.',
                        },
                        {
                            Icon: "assets/icons/cube.svg",
                            title: 'Misleading performance claims',
                            desc: 'Non-standardized methods let many funds claim “top quartile” status.',
                        },
                        {
                            Icon: "assets/icons/blue-lock.svg",
                            title: 'Difficulty comparing strategies',
                            desc: 'Differences in methodology can distort performance and risk profiles.',
                        },
                    ].map(({ Icon, title, desc }, i) => (
                        <div key={i} className={`flex flex-col items-center border-b md:border-b-0 md:border-r border-[#E6E6E6] last:border-0 w-full pb-6 pt-6 md:pb-0 md:pt-0 md:px-3 first:pl-0 last:pr-0
                            ${i === 0 && "max-w-full sm:max-w-[278px]"}
                            ${i === 1 && "max-w-full sm:max-w-[284px]"}
                            ${i === 2 && "max-w-full sm:max-w-[296px]"}
                            ${i === 3 && "max-w-full sm:max-w-[284px]"}
                            `}>
                            <div className="mb-3 md:mb-4 bg-white w-full max-w-[38px] md:max-w-[47px] h-auto p-3 rounded-[5px] shadow-[0_9.4px_18.8px_rgba(0,0,0,0.12)]">
                                <Suspense fallback={null}>
                                    <img src={Icon} alt="" />
                                </Suspense>
                            </div>
                            <h6 className="font-semibold text-sm md:text-base mb-0.5 leading-normal md:leading-[26px]">{title}</h6>
                            <p className="font-normal text-sm md:text-base leading-normal md:leading-6 text-[#676767]/70 w-full">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔹 Video Section */}
            <div
                ref={videoWrapperRef}
                className="relative rounded-xl overflow-hidden w-full "
            >
                {!loadVideo && <VideoSkeleton />}

                {loadVideo && (
                    <MediaController
                        className="w-full aspect-video"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Suspense fallback={<VideoSkeleton />}>
                            <ReactPlayer
                                slot="media"
                                src="https://www.youtube.com/watch?v=o4u70nPdu84"
                                controls={false}
                                playing={isPlaying}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                width="100%"
                                height="100%"
                                style={{ '--controls': 'none' } as React.CSSProperties}
                            />
                        </Suspense>

                        <MediaControlBar>
                            <MediaTimeRange />
                            <MediaTimeDisplay showDuration />
                            <MediaMuteButton />
                            <MediaVolumeRange />
                            <MediaPlaybackRateButton />
                            <MediaFullscreenButton />
                        </MediaControlBar>

                        {/* Play / Pause Overlay */}
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            w-[52px] h-[52px] md:w-[140px] md:h-[140px] rounded-full flex items-center justify-center
                            transition-opacity duration-300
                            ${isHovered ? 'flex' : 'hidden'}`}
                        >
                            {isPlaying ? <img src="assets/icons/push.svg" alt="" /> : <img src="assets/icons/play.svg" alt="" />}
                        </button>
                    </MediaController>
                )}
            </div>
        </section>
    )
}

export default WhyYouNeed
