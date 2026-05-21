const Background = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -50,
        background: 'var(--bg-base)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top-center glow */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(ellipse, rgba(255,77,90,0.05) 0%, transparent 65%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* Bottom-right corner glow */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(ellipse, rgba(20, 66, 120, 0.18) 0%, transparent 65%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* Very subtle grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

export default Background
