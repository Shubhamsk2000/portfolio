import React, { useState } from 'react'

// Custom SVGs matching the brand logos, using stroke/fill and brand colors
const SkillIcon = ({ name, color }) => {
  const normName = name.toLowerCase()

  if (normName.includes('javascript')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <text x="6" y="16" fontSize="9" fontFamily="var(--mono-font)" fontWeight="bold" fill={color}>JS</text>
      </svg>
    )
  }

  if (normName.includes('typescript')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <text x="6" y="16" fontSize="9" fontFamily="var(--mono-font)" fontWeight="bold" fill={color}>TS</text>
      </svg>
    )
  }

  if (normName.includes('python')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M12 2C6.5 2 6 4.5 6 6v2c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V6c0-1.5-.5-4-6-4z" />
        <path d="M12 22c5.5 0 6-2.5 6-4v-2c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v2c0 1.5.5 4 6 4z" />
        <circle cx="9.5" cy="5.5" r="1" fill={color} />
        <circle cx="14.5" cy="18.5" r="1" fill={color} />
      </svg>
    )
  }

  if (normName.includes('html5')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M12 2L3 5l1.5 14 7.5 3 7.5-3L21 5z" />
        <text x="9" y="15" fontSize="10" fontFamily="var(--mono-font)" fontWeight="bold" fill={color}>5</text>
      </svg>
    )
  }

  if (normName.includes('css3')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M12 2L3 5l1.5 14 7.5 3 7.5-3L21 5z" />
        <text x="9" y="15" fontSize="10" fontFamily="var(--mono-font)" fontWeight="bold" fill={color}>3</text>
      </svg>
    )
  }

  if (normName.includes('react')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" style={{ transition: 'stroke 0.3s' }}>
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill={color} />
      </svg>
    )
  }

  if (normName.includes('vite')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M12 2L3 7l9 15 9-15z" />
        <path d="M12 7l-2 5h4l-2 5" strokeWidth="1.5" />
      </svg>
    )
  }

  if (normName.includes('next.js')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 16V8l8 8V8" />
      </svg>
    )
  }

  if (normName.includes('tailwind')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M12 3c-3 0-6 2-6 5s3 3 6 3 6-2 6-5-3-3-6-3zM12 13c-3 0-6 2-6 5s3 3 6 3 6-2 6-5-3-3-6-3z" />
      </svg>
    )
  }

  if (normName.includes('motion')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M3 8l6 8 6-8 6 8" />
      </svg>
    )
  }

  if (normName.includes('node.js')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9z" />
        <path d="M12 2v18M12 11l8-4.5M12 11l-8-4.5" strokeWidth="1" />
      </svg>
    )
  }

  if (normName.includes('express')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <text x="6" y="14" fontSize="8" fontFamily="var(--mono-font)" fontWeight="bold" fill={color}>EX</text>
      </svg>
    )
  }

  if (normName.includes('fastapi')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  }

  if (normName.includes('rest api')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <rect x="2" y="4" width="8" height="6" rx="1" />
        <rect x="14" y="4" width="8" height="6" rx="1" />
        <rect x="8" y="14" width="8" height="6" rx="1" />
        <path d="M6 10v2h12v-2M12 12v2" />
      </svg>
    )
  }

  if (normName.includes('jwt')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    )
  }

  if (normName.includes('postgresql')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    )
  }

  if (normName.includes('mongodb')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M12 2s-5 4-5 8 5 12 5 12 5-8 5-12-5-8-5-8z" />
        <path d="M12 2v20" strokeWidth="1" />
      </svg>
    )
  }

  if (normName.includes('redis')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M3 8l9-4 9 4-9 4-9-4zM3 14l9-4 9 4-9 4-9-4zM3 20l9-4 9 4-9 4-9-4z" />
      </svg>
    )
  }

  if (normName.includes('prisma')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M12 2L2 20h20L12 2z" />
        <path d="M12 2v18" strokeWidth="1" />
      </svg>
    )
  }

  if (normName.includes('aws')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M6 19c2 2.5 6 2.5 8 0M3 15l3 3.5 13-9" />
      </svg>
    )
  }

  if (normName.includes('docker')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <rect x="8" y="2" width="4" height="4" rx="0.5" />
        <rect x="13" y="2" width="4" height="4" rx="0.5" />
        <rect x="3" y="7" width="4" height="4" rx="0.5" />
        <rect x="8" y="7" width="4" height="4" rx="0.5" />
        <rect x="13" y="7" width="4" height="4" rx="0.5" />
        <rect x="18" y="7" width="4" height="4" rx="0.5" />
        <path d="M2 13h20v2a5 5 0 01-5 5H7a5 5 0 01-5-5v-2z" />
      </svg>
    )
  }

  if (normName.includes('git')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6M9 15l9-3" />
      </svg>
    )
  }

  if (normName.includes('langchain')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <rect x="4" y="9" width="10" height="6" rx="3" transform="rotate(-45 9 12)" />
        <rect x="10" y="9" width="10" height="6" rx="3" transform="rotate(-45 15 12)" />
      </svg>
    )
  }

  if (normName.includes('llm') || normName.includes('openai') || normName.includes('gemini')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M18.25 5.75L5.75 18.25" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="4" fill={color} />
      </svg>
    )
  }

  if (normName.includes('webrtc')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M9 12h6M6 9c0-3 12-3 12 0" />
      </svg>
    )
  }

  // Default fallback code icon
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

const SkillPill = ({ skill }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '9999px',
        background: hovered ? 'rgba(255, 255, 255, 0.04)' : 'var(--bg-card)',
        border: hovered ? `1px solid ${skill.color}` : '1px solid var(--border-subtle)',
        boxShadow: hovered ? `0 0 10px ${skill.color}25` : 'none',
        cursor: 'default',
        transition: 'all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <SkillIcon name={skill.name} color={hovered ? skill.color : 'rgba(244, 244, 245, 0.45)'} />
      <span style={{
        fontFamily: 'var(--body-font)',
        fontSize: '13px',
        fontWeight: 500,
        color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'color 0.25s ease',
      }}>
        {skill.name}
      </span>
    </div>
  )
}

const skillGroups = [
  {
    id: '01',
    label: 'Languages',
    skills: [
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Python', color: '#3776AB' },
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
    ],
  },
  {
    id: '02',
    label: 'Frontend',
    skills: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Vite', color: '#646CFF' },
      { name: 'Next.js', color: '#FFFFFF' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'Motion', color: '#FF4D5A' },
    ],
  },
  {
    id: '03',
    label: 'Backend',
    skills: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#828282' },
      { name: 'REST APIs', color: '#00F0FF' },
      { name: 'FastAPI', color: '#009688' },
      { name: 'JWT / Auth', color: '#FF4D5A' },
    ],
  },
  {
    id: '04',
    label: 'Database',
    skills: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Redis', color: '#DC382D' },
      { name: 'Prisma ORM', color: '#68DBF2' },
    ],
  },
  {
    id: '05',
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (Lambda/S3)', color: '#FF9900' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub Actions', color: '#FFFFFF' },
    ],
  },
  {
    id: '06',
    label: 'AI & Realtime',
    skills: [
      { name: 'LangChain', color: '#00A389' },
      { name: 'LLMs (OpenAI/Gemini)', color: '#D060FF' },
      { name: 'WebRTC', color: '#34A853' },
    ],
  },
]

const Skills = () => {
  return (
    <div className="section-layout" style={{ overflow: 'hidden' }}>
      <div className="section-label">Technical proficiency</div>
      <h2 className="section-heading" style={{ marginBottom: '28px' }}>Skills</h2>

      {/* Grid container of categories */}
      <div
        className="allow-scroll"
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingRight: '24px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {skillGroups.map((group, index) => (
          <div
            key={group.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              padding: '20px 0',
              paddingLeft: '48px',
              borderBottom: index < skillGroups.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              transition: 'border-color 0.3s ease',
            }}
          >
            {/* Left side labels */}
            <div style={{ flex: '0 0 220px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{
                  fontFamily: 'var(--mono-font)',
                  fontSize: '11px',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  opacity: 0.8,
                }}>
                  {group.id}
                </span>
                <h3 style={{
                  fontFamily: 'var(--heading-font)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  {group.label}
                </h3>
              </div>
              <span style={{
                fontFamily: 'var(--mono-font)',
                fontSize: '10px',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '4px',
                paddingLeft: '22px',
              }}>
                {group.skills.length} Tools
              </span>
            </div>

            {/* Right side pills */}
            <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              {group.skills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills