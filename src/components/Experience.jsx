import React, { useRef, useState } from 'react'

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Virtuebyte',
    location: 'Pune, India',
    date: 'Aug 2024 – Jan 2025',
    points: [
      'Designed and built RESTful APIs for CRUD operations, user registration, and role-based access control using Node.js and Express.js, following clean architecture principles.',
      'Implemented JWT-based authentication with secure token storage and multi-account validation, demonstrating practical security design patterns.',
      'Deployed a serverless application using AWS Lambda and S3 for scalable, cost-efficient file storage.',
      'Practiced Agile methodologies — sprint planning, daily standups, code reviews, and iterative delivery in a cross-functional team.',
    ],
  },
  {
    title: 'Open Source Contributor',
    company: 'Independent',
    location: 'Remote',
    date: 'Jan 2024 – Present',
    points: [
      'Contributed bug fixes and feature additions to open-source Node.js and React repositories.',
      'Reviewed pull requests, improved documentation, and maintained code quality standards.',
      'Built and published small utility packages, practising semantic versioning and npm publishing workflows.',
      'Engaged with the developer community through issue discussions and code-review feedback.',
    ],
  },
  {
    title: 'Freelance Developer',
    company: 'Self-employed',
    location: 'Pune, India',
    date: 'Jun 2023 – Dec 2023',
    points: [
      'Delivered responsive web applications for small business clients using React and custom CSS.',
      'Implemented contact forms, CMS integrations, and SEO optimisations for client sites.',
      'Managed entire project lifecycle — requirements, design, development, and handoff.',
      'Maintained version-controlled codebases and provided ongoing client support.',
    ],
  },
]

const Experience = () => {
  const scrollRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [active, setActive] = useState(0)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      const progress = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0
      setScrollProgress(progress)
    }
  }

  return (
    <div className="section-layout" style={{ overflow: 'hidden' }}>
      <div className="section-label">Career timeline</div>
      <h2 className="section-heading" style={{ marginBottom: '0' }}>Experience</h2>

      <div style={{ display: 'flex', flex: 1, gap: '0', marginTop: '32px', overflow: 'hidden' }}>

        {/* Left — Timeline + Nav */}
        <div style={{ flex: '0 0 260px', display: 'flex', gap: '0' }}>

          {/* Progress line */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '8px', marginRight: '24px' }}>
            <div style={{ width: '2px', flex: 1, background: 'var(--border-subtle)', borderRadius: '2px', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%',
                height: `${Math.max(scrollProgress * 100, 5)}%`,
                background: 'var(--accent)',
                borderRadius: '2px',
                boxShadow: '0 0 12px rgba(255,77,90,0.5)',
                transition: 'height 0.1s ease-out',
              }} />
            </div>
          </div>

          {/* Company list */}
          <div style={{ flex: 1, paddingTop: '4px' }}>
            {experiences.map((exp, i) => {
              const topPct = experiences.length > 1 ? (i / (experiences.length - 1)) * 100 : 0
              const isLit = (scrollProgress * 100) >= (topPct - 2)

              return (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i)
                    if (scrollRef.current) {
                      const perItem = (scrollRef.current.scrollHeight - scrollRef.current.clientHeight) / Math.max(experiences.length - 1, 1)
                      scrollRef.current.scrollTo({ top: i * perItem, behavior: 'smooth' })
                    }
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    background: active === i ? 'var(--bg-card)' : 'transparent',
                    border: active === i ? '1px solid var(--border-subtle)' : '1px solid transparent',
                    borderRadius: '10px',
                    padding: '14px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    marginBottom: '8px',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '4px',
                  }}>
                    {/* dot */}
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                      background: isLit ? 'var(--accent)' : 'var(--border-medium)',
                      boxShadow: isLit ? '0 0 6px rgba(255,77,90,0.6)' : 'none',
                      transition: 'all 0.3s',
                    }} />
                    <span style={{
                      fontFamily: 'var(--body-font)',
                      fontSize: '13px',
                      fontWeight: active === i ? 600 : 400,
                      color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                      transition: 'color 0.25s',
                    }}>
                      {exp.company}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono-font)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                    paddingLeft: '18px',
                  }}>
                    {exp.date}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right — Scrollable detail */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="allow-scroll"
          style={{
            flex: 1,
            overflowY: 'auto',
            paddingLeft: '48px',
            paddingRight: '0',
            paddingBottom: '48px',
            borderLeft: '1px solid var(--border-subtle)',
          }}
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: idx < experiences.length - 1 ? '64px' : '0',
                paddingBottom: idx < experiences.length - 1 ? '64px' : '0',
                borderBottom: idx < experiences.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <span className="tag-pill" style={{ marginBottom: '12px', display: 'inline-block' }}>
                    {exp.date}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--heading-font)',
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}>
                    {exp.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontFamily: 'var(--body-font)', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {exp.company}
                    </span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-muted)' }} />
                    <span style={{ fontFamily: 'var(--mono-font)', fontSize: '12px', color: 'var(--text-muted)' }}>
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="accent-divider" style={{ marginBottom: '24px' }} />

              {/* Points */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: '20px 1fr',
                    gap: '12px',
                    alignItems: 'start',
                    padding: '14px 0',
                    borderBottom: i < exp.points.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  }}>
                    <span style={{
                      fontFamily: 'var(--mono-font)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      paddingTop: '4px',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                      fontFamily: 'var(--body-font)',
                      fontSize: '14px',
                      lineHeight: 1.75,
                      color: 'var(--text-secondary)',
                      fontWeight: 300,
                    }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Experience