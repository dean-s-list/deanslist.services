import React from 'react'
import solanaImg from '../assets/solana.svg'

import { FooterLinks } from './FooterLinks'

export function Footer() {
  return (
    <div className="footer p-5">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <img src={solanaImg} alt="Solana" style={{ height: 26 }} />
          <p className="primary-text" style={{ marginTop: 12 }}>
            Made possible on the Solana network
          </p>
          <p className="primary-text" style={{ marginTop: 4 }}>
            © 2023 Dean's List DAO. All rights reserved.
          </p>
        </div>
        <div>
          <FooterLinks />
        </div>
      </div>
    </div>
  )
}
