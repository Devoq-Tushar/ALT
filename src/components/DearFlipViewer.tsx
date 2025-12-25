import { type FC, useRef } from 'react'
import useDFlip, { type DFlipOptions } from '../hooks/useDearFlip'

interface DearFlipViewerProps {
    pdfURL?: string
    options?: DFlipOptions
}

const DearFlipViewer: FC<DearFlipViewerProps> = ({
    pdfURL = '/pdf/the-three-musketeers.pdf',
    options = {},
}) => {
    const containerRef = useRef<HTMLDivElement | null | any>(null)

    // Initialize dFlip
    useDFlip(containerRef, pdfURL, options)

    return (
        <div
            ref={containerRef}
            className="dflip-container"
            data-pdf-url={pdfURL}
        />
    )
}

export default DearFlipViewer
