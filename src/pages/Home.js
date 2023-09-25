import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="home-page px-5">
      <div style={{ textAlign: 'center' }}>
        <iframe
          className="iframe-map"
          style={{
            width: 1280,
            height: 1000,
            overflow: 'hidden',
          }}
          src="https://lookerstudio.google.com/embed/reporting/6607ecd0-33e5-4df0-b44b-6df9feb65682/page/pFjXD"
          title="Dean's List Map"
          frameborder="0"
          allowfullscreen
        />
      </div>
      <div className="text-center">
        <p className="heading-text">A Network State Of Web3 Powerusers</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '32px 32px' }}>
          <Link to="/join-us" className="primary-button">
            JOIN US
          </Link>
          <Link to="/hire-us" className="primary-button">
            HIRE US
          </Link>
          <Link to="/partner-with-us" className="primary-button">
            PARTNER WITH US
          </Link>
        </div>
      </div>
    </div>
  )
}
