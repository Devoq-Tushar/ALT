import { useEffect, useRef, type RefObject } from 'react'

/* ---------------------------------------
   Global typings for jQuery + dFlip
---------------------------------------- */
declare global {
  interface Window {
    jQuery: any
  }
}

/* ---------------------------------------
   dFlip options interface (partial but safe)
---------------------------------------- */
export interface DFlipOptions {
  webgl?: boolean
  autoEnableOutline?: boolean
  autoEnableThumbnail?: boolean
  overwritePDFOutline?: boolean
  soundEnable?: boolean
  backgroundColor?: string
  autoPlay?: boolean
  autoPlayDuration?: number
  autoPlayStart?: boolean
  hard?: string
  maxTextureSize?: number
  pageMode?: number
  singlePageMode?: number
  responsive?: boolean
  transparent?: boolean
  direction?: number
  duration?: number
  zoom?: number
  enableSound?: boolean

  /* Allow custom / undocumented options */
  [key: string]: unknown
}

/* ---------------------------------------
   Custom hook
---------------------------------------- */
const useDFlip = (
  containerRef: RefObject<HTMLDivElement>,
  pdfURL: string,
  options: DFlipOptions = {}
) => {
  const flipbookRef = useRef<any>(null)

  /* Load script with existence check */
  const loadScript = (src: string): Promise<void> => {
    if (document.querySelector(`script[src="${src}"]`)) {
      return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
      document.body.appendChild(script)
    })
  }

  /* Load stylesheet with existence check */
  const loadStyle = (href: string): void => {
    if (document.querySelector(`link[href="${href}"]`)) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = href
    document.head.appendChild(link)
  }

  useEffect(() => {
    if (
      containerRef.current &&
      containerRef.current.dataset.dflipInitialized === 'true'
    ) {
      return
    }

    const initFlipbook = async () => {
      try {
        /* Load CSS first */
        loadStyle('/dflip/css/dflip.min.css')

        /* Load JS dependencies */
        await loadScript('/dflip/js/libs/jquery.min.js')

        if (!window.jQuery) {
          await new Promise(resolve => setTimeout(resolve, 100))
        }

        await loadScript('/dflip/js/dflip.min.js')
        await new Promise(resolve => setTimeout(resolve, 10))

        /* Initialize dFlip */
        if (containerRef.current && window.jQuery) {
          if (containerRef.current.dataset.dflipInitialized === 'true') return

          const defaultOptions: DFlipOptions = {
            webgl: true,
            autoEnableOutline: false,
            autoEnableThumbnail: false,
            overwritePDFOutline: false,
            soundEnable: true,
            backgroundColor: 'rgb(217, 217, 217)',
            autoPlay: false,
            autoPlayDuration: 5000,
            autoPlayStart: false,
            hard: 'none',
            maxTextureSize: 1600,
            pageMode: window.innerWidth <= 768 ? 1 : 2,
            singlePageMode: window.innerWidth <= 768 ? 1 : 0,
            responsive: true,
            transparent: false,
            direction: 1,
            duration: 800,
            zoom: 1,
            enableSound: true,
          }

          const mergedOptions: DFlipOptions = {
            ...defaultOptions,
            ...options,
          }

          containerRef.current.dataset.dflipInitialized = 'true'

          flipbookRef.current = window
            .jQuery(containerRef.current)
            .flipBook(pdfURL, mergedOptions)
        }
      } catch (error) {
        console.error('Error loading dFlip:', error)
      }
    }

    initFlipbook()

    return () => {
      if (flipbookRef.current?.dispose) {
        flipbookRef.current.dispose()
      }

      if (containerRef.current) {
        containerRef.current.dataset.dflipInitialized = 'false'
      }
    }
  }, [containerRef, pdfURL, options])

  return flipbookRef.current
}

export default useDFlip
