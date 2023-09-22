import React from 'react'
import solanaImg from '../assets/Solana.svg'
import groupImg from '../assets/Icongroup.svg'

const Footer = () => {
  return (
    <div className="footer p-5">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <img src={solanaImg} alt="Solana" />
          <p className="primary-text">Made possible on the Solana network</p>
          <p className="primary-text">© 2023 Dean's List DAO. All rights reserved.</p>
        </div>
        <div>
          <img src={groupImg} alt="Group" />
        </div>
      </div>
    </div>
  )
}

export default Footer
