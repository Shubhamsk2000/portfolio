import React from 'react'
import person from '../assets/boy.svg'

const Home = ({ goTo }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '48px' }}>

      {/* Left — Text Content */}
      <div style={{ flex: '0 0 auto', maxWidth: '560px' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{ width: '32px', height: '1.5px', background: 'var(--accent)' }} />
          <span style={{
            fontFamily: 'var(--mono-font)',
            fontSize: '12px',
            letterSpacing: '0.18em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            fontWeight: 500
          }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--heading-font)',
          fontSize: 'clamp(56px, 7vw, 88px)',
          fontWeight: 700,
          lineHeight: 0.92,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          marginBottom: '20px',
        }}>
          SHUBHAM<br />KONDHALKAR
        </h1>

        {/* Accent lines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
          <div style={{ height: '3px', width: '160px', background: 'var(--accent)', borderRadius: '4px' }} />
          <div style={{ height: '3px', width: '120px', background: 'var(--accent)', borderRadius: '4px', marginLeft: '40px', opacity: 0.5 }} />
        </div>

        {/* Role */}
        <p style={{
          fontFamily: 'var(--body-font)',
          fontSize: '20px',
          fontWeight: 400,
          color: 'var(--text-secondary)',
          letterSpacing: '0.01em',
          marginBottom: '40px',
        }}>
          Fullstack Developer — building scalable APIs, seamless UIs, and everything in between.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button
            onClick={() => goTo && goTo(4)}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              padding: '12px 32px',
              fontFamily: 'var(--body-font)',
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              borderRadius: '6px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            View Experience
          </button>
          <button
            onClick={() => goTo && goTo(2)}
            style={{
              background: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-medium)',
              padding: '12px 32px',
              fontFamily: 'var(--body-font)',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
              borderRadius: '6px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--text-primary)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-secondary)'
              e.currentTarget.style.borderColor = 'var(--border-medium)'
            }}
          >
            See Projects →
          </button>
        </div>
      </div>

      {/* Right — Illustration */}
      <div style={{ flex: '0 0 auto', position: 'relative', width: '380px', height: '460px' }}>
        {/* Glow orb */}
        <div style={{
          position: 'absolute',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,77,90,0.12) 0%, transparent 70%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }} />
        <img
          src={person}
          alt="Shubham Kondhalkar"
          style={{ position: 'relative', zIndex: 1, height: '100%', objectFit: 'contain' }}
        />
        {/* Floating stat cards */}
        <div style={{
          position: 'absolute', bottom: '40px', left: '-40px',
          background: 'rgba(6,11,20,0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '14px 20px',
          zIndex: 2,
        }}>
          <div style={{ fontFamily: 'var(--mono-font)', fontSize: '22px', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>1+</div>
          <div style={{ fontFamily: 'var(--body-font)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', letterSpacing: '0.04em' }}>Year Experience</div>
        </div>
        <div style={{
          position: 'absolute', top: '60px', right: '-20px',
          background: 'rgba(6,11,20,0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '14px 20px',
          zIndex: 2,
        }}>
          <div style={{ fontFamily: 'var(--mono-font)', fontSize: '22px', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>5+</div>
          <div style={{ fontFamily: 'var(--body-font)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', letterSpacing: '0.04em' }}>Projects Built</div>
        </div>
      </div>

    </div>
  )
}

export default Home