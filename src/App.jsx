import React, { useState, useCallback, useEffect, useRef } from 'react'
import { animate } from 'motion'
import NavBar from './components/NavBar'
import Background from './components/Background'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import githubIcon from './assets/github.svg'
import linkedinIcon from './assets/linkedin.svg'
import personImg from './assets/boy.svg'
import directdropImg from './assets/directdrop.png'
import paperwiseImg from './assets/paperwise.png'
import portfolioImg from './assets/portfolio_ss.png'
import Contact from './components/Contact'

// Thin wrapper so the FullPageWrapper can export goTo upward
const App = () => {
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const animRef = useRef(null)
  const dotsRef = useRef([])
  const touchStart = useRef(null)

  const [page, setPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const sections = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact']
  const pageCount = sections.length

  // Preload images and fade out the preloader
  useEffect(() => {
    const imagesToPreload = [
      personImg,
      githubIcon,
      linkedinIcon,
      directdropImg,
      paperwiseImg,
      portfolioImg
    ]

    let loadedCount = 0
    const totalImages = imagesToPreload.length

    const updateProgress = () => {
      const progress = (loadedCount / totalImages) * 100
      const progressBar = document.getElementById('progress-bar')
      if (progressBar) {
        progressBar.style.width = `${progress}%`
      }

      if (loadedCount === totalImages) {
        setTimeout(() => {
          const preloader = document.getElementById('preloader')
          if (preloader) {
            preloader.classList.add('fade-out')
            setTimeout(() => {
              preloader.style.display = 'none'
            }, 600)
          }
        }, 400) // Small delay for visual completion
      }
    }

    if (totalImages === 0) {
      const preloader = document.getElementById('preloader')
      if (preloader) {
        preloader.classList.add('fade-out')
        setTimeout(() => {
          preloader.style.display = 'none'
        }, 600)
      }
      return
    }

    imagesToPreload.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        updateProgress()
      }
      img.onerror = () => {
        loadedCount++
        updateProgress()
      }
    })
  }, [])

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= pageCount) return
      if (isAnimating) return
      setIsAnimating(true)

      if (animRef.current && typeof animRef.current.cancel === 'function') {
        try { animRef.current.cancel() } catch { /* ignore */ }
      }
      animRef.current = animate(
        innerRef.current,
        { transform: `translateY(-${index * 100}vh)` },
        { duration: 0.75, easing: [0.22, 1, 0.36, 1] }
      )
      animRef.current.finished
        .then(() => setIsAnimating(false))
        .catch(() => setIsAnimating(false))

      setPage(index)
    },
    [pageCount, isAnimating]
  )

  // Wheel
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let locked = false
    const onWheel = (e) => {
      const scrollable = e.target.closest('.allow-scroll')
      if (scrollable) {
        const atTop = scrollable.scrollTop === 0
        const atBottom = Math.abs(scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight) < 1
        if (e.deltaY > 0 && !atBottom) return
        if (e.deltaY < 0 && !atTop) return
      }
      e.preventDefault()
      if (isAnimating || locked) return
      locked = true
      setTimeout(() => { locked = false }, 800)
      if (e.deltaY > 30) goTo(Math.min(page + 1, pageCount - 1))
      else if (e.deltaY < -30) goTo(Math.max(page - 1, 0))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [goTo, isAnimating, page, pageCount])

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown') goTo(Math.min(page + 1, pageCount - 1))
      if (e.key === 'ArrowUp') goTo(Math.max(page - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goTo, page, pageCount])

  // Touch
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onTouchStart = (e) => {
      touchStart.current = { y: e.touches[0].clientY, target: e.target }
    }
    const onTouchMove = (e) => {
      if (e.target.closest('.allow-scroll')) return
      e.preventDefault()
    }
    const onTouchEnd = (e) => {
      if (!touchStart.current) return
      if (touchStart.current.target.closest('.allow-scroll')) { touchStart.current = null; return }
      const diff = touchStart.current.y - e.changedTouches[0].clientY
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
    <>
      <NavBar currentPage={page} goTo={goTo} />
      <Background />

      {/* Social icons */}
      <div
        className="fixed z-50 flex flex-col items-center gap-4"
        style={{ left: '28px', bottom: '32px' }}
      >
        <a href="https://github.com/Shubhamsk2000" target="_blank" rel="noopener noreferrer"
          style={{ opacity: 0.5, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.5}
        >
          <img src={githubIcon} alt="GitHub" style={{ width: '20px', filter: 'invert(1)' }} />
        </a>
        <a href="https://linkedin.com/in/Shubham-Kondhalkar" target="_blank" rel="noopener noreferrer"
          style={{ opacity: 0.5, transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.5}
        >
          <img src={linkedinIcon} alt="LinkedIn" style={{ width: '20px', filter: 'invert(1)' }} />
        </a>
        {/* Vertical line */}
        <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.15)' }} />
      </div>

      {/* Section page dots */}
      <nav className="fp-index" aria-hidden>
        {sections.map((_, i) => (
          <button
            key={i}
            ref={el => dotsRef.current[i] = el}
            className={`fp-dot ${i === page ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </nav>

      {/* Full-page container */}
      <div ref={containerRef} className="fp-container">
        <div ref={innerRef} className="fp-inner">
          {/* Home */}
          <section className="fp-section">
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: '0 96px' }}>
              <Home goTo={goTo} />
            </div>
          </section>
          {/* About */}
          <section className="fp-section">
            <About />
          </section>
          {/* Projects */}
          <section className="fp-section">
            <Projects />
          </section>
          {/* Skills */}
          <section className="fp-section">
            <Skills />
          </section>
          {/* Experience */}
          <section className="fp-section">
            <Experience />
          </section>
          <section className="fp-section">
            <Contact />
          </section>
        </div>
      </div>
    </>
  )
}

export default App