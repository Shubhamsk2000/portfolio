import React from 'react'

const stats = [
  { value: '1+', label: 'Year Industry Experience' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '10+', label: 'Technologies Used' },
]

const stack = ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript', 'Redis']

const About = () => {
  return (
    <div className="section-layout" style={{ justifyContent: 'center' }}>

      {/* Section label */}
      <div className="section-label">About me</div>

      <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', marginTop: '8px' }}>

        {/* Left — Heading + Stats */}
        <div style={{ flex: '0 0 340px' }}>
          <h2 className="section-heading" style={{ marginBottom: '40px' }}>
            Building for<br />the web.
          </h2>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px 0',
                borderBottom: i < stats.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--mono-font)',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  minWidth: '56px',
                }}>
                  {s.value}
                </span>
                <span style={{
                  fontFamily: 'var(--body-font)',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Bio + Stack */}
        <div style={{ flex: 1 }}>
          {/* Accent divider */}
          <div className="accent-divider" style={{ marginBottom: '32px' }} />

          <p style={{
            fontFamily: 'var(--body-font)',
            fontSize: '17px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: '20px',
            fontWeight: 300,
          }}>
            I'm a fullstack developer from Pune, India, passionate about crafting well-engineered software — from REST APIs and backend services to polished, interactive frontends.
          </p>
          <p style={{
            fontFamily: 'var(--body-font)',
            fontSize: '17px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            fontWeight: 300,
          }}>
            During my internship at <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Virtuebyte</span>, I built production-grade APIs with JWT auth, RBAC, and serverless AWS deployments. I thrive in collaborative environments and have a strong eye for code quality and clean architecture.
          </p>

          {/* Stack label */}
          <div style={{
            fontFamily: 'var(--mono-font)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '16px',
          }}>
            Current tech stack
          </div>

          {/* Stack tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {stack.map(tech => (
              <span key={tech} className="tag-pill">{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About