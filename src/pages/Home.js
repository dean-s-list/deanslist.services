import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page px-5">
      <div style={{ textAlign: 'center' }}>
        <iframe
          className="iframe-map"
          style={{ width: '100%', overflow: 'hidden' }}
          src="https://lookerstudio.google.com/embed/reporting/6607ecd0-33e5-4df0-b44b-6df9feb65682/page/pFjXD"
          title="Dean's List Map"
          frameborder="0"
          allowfullscreen
        />
      </div>
      <div className="text-center">
        <p className="heading-text">A Network State Of Web3 Powerusers</p>
        <div className="mb-3">
          <Link to="/join-us">
            <button className="primary-button">JOIN US</button>
          </Link>
        </div>
        <div className="mb-3">
          <Link to="/hire-us">
            <button className="primary-button">HIRE US</button>
          </Link>
        </div>
        <div>
          <Link to="/partner-with-us">
            <button className="primary-button">PARTNER WITH US</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
