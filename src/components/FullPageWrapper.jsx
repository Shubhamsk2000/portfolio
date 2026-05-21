import React, { useCallback, useEffect, useRef, useState } from 'react'
import { animate } from 'motion'

// FullPageWrapper
// Wrap multiple <section className="fp-section"> children. Each section will be 100vh.
// Handles: wheel (desktop), touch (mobile), keyboard arrows, and left-side index navigation.
// Smooth CSS translateY transition is used for fluid animation.

const FullPageWrapper = ({ children, className = '' }) => {
  const containerRef = useRef(null)
  const [page, setPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStart = useRef(null)
  const sections = React.Children.toArray(children)
  const pageCount = sections.length

  const innerRef = useRef(null)
  const animRef = useRef(null)
  const dotsRef = useRef([])

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= pageCount) return
      if (isAnimating) return
      setIsAnimating(true)

      // animate container translateY using Motion One for smoother control
      const to = `translateY(-${index * 100}vh)`
      if (animRef.current && typeof animRef.current.cancel === 'function') {
        try { animRef.current.cancel() } catch { /* ignore */ }
      }
      animRef.current = animate(
        innerRef.current,
        { transform: to },
        { duration: 0.7, easing: [0.22, 1, 0.36, 1] }
      )

      animRef.current.finished.then(() => {
        setIsAnimating(false)
      }).catch(() => setIsAnimating(false))

      // animate dots: scale up the new one and scale down others
      dotsRef.current.forEach((el, i) => {
        if (!el) return
        if (i === index) {
          animate(el, { scale: 1.5, background: '#FF4D5A', borderColor: '#c93d47' }, { duration: 0.5 })
        } else {
          animate(el, { scale: 1, background: 'white', borderColor: 'rgba(0,0,0,0.25)' }, { duration: 0.5 })
        }
      })

      setPage(index)
    },
    [pageCount, isAnimating]
  )

  // wheel handler
  useEffect(() => {
  const el = containerRef.current
    if (!el) return

    let scrollTimeout = null
    const onWheel = (e) => {
      const scrollable = e.target.closest('.allow-scroll')
      if (scrollable) {
        const atTop = scrollable.scrollTop === 0
        const atBottom = Math.abs(scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight) < 1
        
        if (e.deltaY > 0 && !atBottom) {
          return // allow native scroll down
        }
        if (e.deltaY < 0 && !atTop) {
          return // allow native scroll up
        }
      }

      e.preventDefault()
      if (isAnimating) return
      const delta = e.deltaY
      if (delta > 30) goTo(Math.min(page + 1, pageCount - 1))
      else if (delta < -30) goTo(Math.max(page - 1, 0))

      // simple throttle
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null
      }, 300)
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [goTo, isAnimating, page, pageCount])

  // keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown') goTo(Math.min(page + 1, pageCount - 1))
      if (e.key === 'ArrowUp') goTo(Math.max(page - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goTo, page, pageCount])

  // touch handlers for mobile
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onTouchStart = (e) => {
      touchStart.current = { y: e.touches[0].clientY, target: e.target }
    }
    const onTouchMove = (e) => {
      const scrollable = e.target.closest('.allow-scroll')
      if (scrollable) {
        return // allow native touch scroll
      }
      // prevent the default page scroll while inside our container
      e.preventDefault()
    }
    const onTouchEnd = (e) => {
      if (!touchStart.current) return
      const scrollable = touchStart.current.target.closest('.allow-scroll')
      if (scrollable) {
        touchStart.current = null
        return
      }

      const endY = e.changedTouches[0].clientY
      const diff = touchStart.current.y - endY
      if (Math.abs(diff) > 50) {
        if (diff > 0) goTo(Math.min(page + 1, pageCount - 1))
        else goTo(Math.max(page - 1, 0))
      }
      touchStart.current = null
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [goTo, page, pageCount])

  return (
    <div ref={containerRef} className={`fp-container ${className}`}>
      <div
        ref={innerRef}
        className="fp-inner"
      >
        {sections.map((child, i) => (
          <section key={i} className="fp-section">
            {child}
          </section>
        ))}
      </div>

      {/* left-side index */}
      <nav className="fp-index" aria-hidden>
        {sections.map((_, i) => (
          <button
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className={`fp-dot ${i === page ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </nav>

      {/* optional arrows */}
      <div className="fp-arrows" aria-hidden>
        <button
          className="fp-arrow up"
          onClick={() => goTo(Math.max(page - 1, 0))}
          disabled={page === 0}
        >
          ▲
        </button>
        <button
          className="fp-arrow down"
          onClick={() => goTo(Math.min(page + 1, pageCount - 1))}
          disabled={page === pageCount - 1}
        >
          ▼
        </button>
      </div>
    </div>
  )
}

export default FullPageWrapper
