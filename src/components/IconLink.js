import React from 'react'

export function IconLink({ href, icon: Icon, title }) {
  return (
    <a title={title} href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
      <Icon size={42} />
    </a>
  )
}
