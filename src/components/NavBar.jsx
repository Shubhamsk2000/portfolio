import React from 'react'

const NavBar = ({ currentPage, goTo }) => {
  const links = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact']

  return (
    <nav
      className='fixed top-0 left-0 w-full z-50 flex items-center justify-between'
      style={{
        padding: '0 96px',
        height: '64px',
        background: 'rgba(6, 11, 20, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: 'var(--heading-font)',
          fontSize: '20px',
          fontWeight: '700',
          letterSpacing: '0.04em',
          color: 'var(--text-primary)',
          cursor: 'pointer',
        }}
        onClick={() => goTo && goTo(0)}
      >
        SK.
      </div>

      {/* Nav Links */}
      <div className='flex items-center gap-8'>
        {links.map((link, i) => (
          <button
            key={link}
            onClick={() => goTo && goTo(i)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--body-font)',
              fontSize: '14px',
              fontWeight: currentPage === i ? '600' : '400',
              color: currentPage === i ? 'var(--accent)' : 'var(--text-secondary)',
              letterSpacing: '0.02em',
              transition: 'color 0.2s ease',
              padding: '4px 0',
              position: 'relative',
            }}
            onMouseEnter={e => { if (currentPage !== i) e.target.style.color = 'var(--text-primary)' }}
            onMouseLeave={e => { if (currentPage !== i) e.target.style.color = 'var(--text-secondary)' }}
          >
            {link}
            {currentPage === i && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  right: 0,
                  height: '1.5px',
                  background: 'var(--accent)',
                  borderRadius: '2px',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* CTA */}
      <a
        href="https://github.com/Shubhamsk2000"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'var(--mono-font)',
          fontSize: '12px',
          fontWeight: '500',
          letterSpacing: '0.1em',
          color: 'var(--accent)',
          border: '1px solid var(--accent-border)',
          padding: '6px 16px',
          borderRadius: '6px',
          background: 'var(--accent-dim)',
          textDecoration: 'none',
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={e => e.target.style.background = 'rgba(255,77,90,0.25)'}
        onMouseLeave={e => e.target.style.background = 'var(--accent-dim)'}
      >
        GitHub ↗
      </a>
    </nav>
  )
}

export default NavBar