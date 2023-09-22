import React, { useState } from 'react'
import arrow from '../assets/arrow.svg'
import { DetailsModal } from '../components/Modal'
import declaration from '../assets/Images/declaration.jpg'
import our_processes from '../assets/Images/our-processes.png'
import case_studies from '../assets/Images/case-studies.jpg'
import store from '../assets/Images/store.jpg'

export function HowToHire() {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState('')

  function handleClose() {
    return setShow(false)
  }

  function handleShow(desc) {
    setItem(desc)
    setShow(true)
  }

  const items = [
    {
      image: declaration,
      heading: 'Our Clients',
      shortDesc: 'Trusted by the best, we are the premier community feedback service in all of Web3. ',
      longDesc: (
        <p>
          Despite our Network State being relatively young, we have the distinction of having worked with some of the
          biggest names in the Solana Ecosystem already. This is testament to the value we bring to our clients and the
          ecosystem's continued faith in us.
          <br />
          Whether it be Wallets, DeFi, NFT marketplaces, the creator economy, gaming, public goods, infrastructure,
          governance models or any vertical you can think of, we pride ourselves for having delivered actionable
          feedback as a community.
        </p>
      ),
    },
    {
      image: our_processes,
      heading: 'Our Processes',
      shortDesc: 'Every chef has their secret sauce. Want to know ours?',
      longDesc: (
        <p>
          Every protocol we review is assigned a Manager who acts as a bridge between the project team and the
          community. Our deep dive spans a 2 week period where our community of power users dissect through your
          protocol and social infrastructure delivering valuable feedback on:
          <ul>
            <li>UI / UX improvements</li>
            <li>GTM strategy</li>
            <li>Proofing your socials</li>
            <li>User Insights derived from blockchain data</li>
            <li>Feature requests for experience improvement</li>
          </ul>
          The end result is packaged in a neat document for ready perusal by the team to address in their own time.
        </p>
      ),
    },
    {
      image: case_studies,
      heading: 'Case Studies',
      shortDesc: 'The Proof Is In The Pudding & We Serve It Best',
      longDesc: (
        <p>
          Here is a flavor of how we have helped some of the best protocols achieve the best results.
          <ul>
            <li>Underdog Protocol</li>
            <li>dReader</li>
            <li>Sujiko</li>
            <li>Tensor</li>
          </ul>
        </p>
      ),
    },
    {
      image: store,
      heading: 'Store',
      shortDesc: 'Ready for your first purchase? ',
      longDesc: (
        <p>
          If you've made it this far, you're another click away from our Store. If you are comfortable in what your
          purchase would be, click here -
          <a style={{ color: 'white' }} href="https://store.deanslist.services" target="_blank" rel="noreferrer">
            store.deanslist.services
          </a>
          &nbsp;or set up a call with a sales representative by using the contact form here
        </p>
      ),
    },
  ]

  return (
    <div className="how-to-join">
      <div className="banner hire-us-banner"></div>
      <div className="container mt-5">
        <DetailsModal show={show} handleShow={handleShow} handleClose={handleClose} item={item} />
        {items?.map((item) => (
          <div className="declaration">
            <p className="heading-text">{item.heading}</p>
            <p className="description">{item.shortDesc}</p>
            <div className="d-flex align-items-center">
              <p className="me-2 mb-0 see-more" onClick={() => handleShow(item)}>
                See More
              </p>
              <img src={arrow} alt="arrow" />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}
