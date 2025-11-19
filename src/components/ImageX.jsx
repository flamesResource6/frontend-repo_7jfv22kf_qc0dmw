import { useState, useMemo } from 'react'

// Reusable image with fallback + best-practice attributes for Drive-hosted assets
export default function ImageX({ src, alt, className = '', loading = 'lazy', fetchpriority, sizes, draggable = false, style }) {
  const [fail, setFail] = useState(false)

  // Neutral branded gradient fallback (dark charcoal to gunmetal)
  const fallback = useMemo(() => (
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`\
      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 9\" preserveAspectRatio=\"none\">\
        <defs>\
          <linearGradient id=\"g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\
            <stop offset=\"0%\" stop-color=\"#30363D\"/>\
            <stop offset=\"100%\" stop-color=\"#2F343A\"/>\
          </linearGradient>\
        </defs>\
        <rect width=\"100%\" height=\"100%\" fill=\"url(#g)\"/>\
      </svg>`)
  ), [])

  const commonProps = {
    alt,
    className,
    loading,
    sizes,
    draggable,
    style,
    referrerPolicy: 'no-referrer',
    decoding: 'async',
    onError: () => setFail(true),
  }

  // If the primary src fails, render fallback SVG so layout remains polished
  if (fail || !src) {
    return <img src={fallback} {...commonProps} alt={alt || 'Image placeholder'} />
  }

  // Prefer Drive view link as-is; referrerPolicy helps with some Drive permissions
  return (
    <img
      src={src}
      {...commonProps}
      fetchpriority={fetchpriority}
    />
  )
}
