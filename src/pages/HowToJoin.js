import React, { useState } from 'react'
import arrow from '../assets/arrow.svg'
import { DetailsModal } from '../components/Modal'
import declaration from '../assets/Images/declaration.jpg'
import citizenship from '../assets/Images/citizenship.png'
import business_visa from '../assets/Images/business-visa.png'
import our_nft from '../assets/Images/our-nft.jpg'
import token from '../assets/Images/token.png'
import real_life from '../assets/Images/real-life.jpg'

export function HowToJoin() {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState('')

  const handleClose = () => setShow(false)

  const handleShow = (desc) => {
    setItem(desc)
    setShow(true)
  }

  const items = [
    {
      image: declaration,
      heading: 'Declaration',
      shortDesc: 'Read Our Manifesto',
      longDesc: (
        <div>
          <p>
            Every state needs a manifesto that defines its reason to exist, its present & its future. We call it our
            Declaration - the act in time that bound us to the idea of transitioning from a Service DAO to a Network
            State.
          </p>
          <a
            style={{ color: 'white' }}
            href="https://www.deanslist.services/files/Deanlist_Declaration_Network_State.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Read it here.
          </a>
        </div>
      ),
    },
    {
      image: citizenship,
      heading: 'Our Citizenship Model',
      shortDesc: 'The future of decentralized communities is not in building large tribes but meaningful ones.',
      longDesc:
        "Here at Dean's List, we believe that the concept of communities with a large membership base is not only outdated but extremely inefficient.We are guided in our thinking by Dunbar's number which is the theoretical limit to the amount of meaningful societal relationships that one person can maintain. For Dunbar, the absolute maximum is 150 but, erring on the side of conservatism, we do not intend to have more than 100 citizens.",
    },
    {
      image: business_visa,
      heading: 'The Business Visa Program',
      shortDesc: 'Get started with our signature onboarding Program ',
      longDesc: (
        <div>
          <p>
            The best way to get a feel of our Network State is to apply for a Business Visa which allows you 30 days of
            access to certain USDC earning opportunities as well as a glimpse into how we operate. On the expiration of
            the 30 day grace period, you may choose to renew for a monthly fee or, better yet, become a full citizen by
            purchasing our NFT.
          </p>
          <a
            style={{ color: 'white' }}
            href="https://airtable.com/appPrRJIdqWfXLtlr/shr0U1ctnua5e68RU"
            target="_blank"
            rel="noreferrer"
          >
            Apply for a Business Visa here.
          </a>
        </div>
      ),
    },
    {
      image: our_nft,
      heading: 'Our NFT',
      shortDesc: 'Become a Citizen and join our network state.',
      longDesc: (
        <div>
          <p>
            Our NFT is the highest and only proof of citizenship and grants you full access to all aspects of our
            Network State. Keeping with Dunbar's number, the collection is limited to 100 members only. The choice of
            animals is a strong reference to the Orwelian masterpiece Animal Farm, only that we believe all animals are
            equal & none are more equal than others. Put simply, no NFT has any special traits that grant it any
            superiority over another. This is a key point underpinning our Network State's culture
          </p>
          <a
            style={{ color: 'white' }}
            href="https://www.tensor.trade/trade/deanslist"
            target="_blank"
            rel="noreferrer"
          >
            Get yours here
          </a>
          &nbsp;and&nbsp;
          <a
            style={{ color: 'white' }}
            href="https://stake.diamondvaults.io/vault/Deanslist"
            target="_blank"
            rel="noreferrer"
          >
            stake it here
          </a>
          &nbsp;to earn the $DEAN token.
        </div>
      ),
    },
    {
      image: token,
      heading: 'The $DEAN Token',
      shortDesc: 'Welcome to a new token design for decentralized communities',
      longDesc: (
        <p>
          The{' '}
          <a
            style={{ color: 'white' }}
            href="https://solscan.io/token/Ds52CDgqdWbTWsua1hgT3AuSSy4FNx2Ezge1br3jQ14a8"
            target="_blank"
            rel="noreferrer"
          >
            $DEAN
          </a>{' '}
          token, built on the SPL standard, has two main utilities - serve as a polling currency for our token
          governance on Realms and as a participation token to access tasks that pay out in USDC. We are slowly
          integrating the token into more operational use cases that set a bar for participation. &nbsp;
          <br />
          While there is no official market, a swap pool is functional &nbsp;
          <a
            style={{ color: 'white' }}
            href="https://raydium.io/swap/?inputCurrency=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputCurrency=Ds52CDgqdWbTWsua1hgT3AuSSy4FNx2Ezge1br3jQ14a&fixed=out"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          &nbsp; and is an inspired initiative to improve access to the token for our Business Visa holders so that they
          may participate in tasks. Primarily, token distribution is via staking your Dean's List NFT or through
          reputation emissions till the time the mint authority is active.&nbsp;
          <br />
          You can read more about our token design &nbsp;
          <a
            style={{ color: 'white' }}
            href="https://deanmachine.medium.com/participation-a-new-idea-for-community-token-design-c7d9da025df3"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      ),
    },
    {
      image: real_life,
      heading: 'In Real Life',
      shortDesc: 'Find us in real life.',
      longDesc: (
        <div>
          <p>
            To fully transition to a Network State, it is our goal to enable in person meetings between our citizens, to
            establish embassies & acquire real world assets.
            <br />
          </p>
          The first ever meeting of the Dean's List community took place on [Insert date] in Nigeria & you can read the
          takeaways from it &nbsp;
          <a
            style={{ color: 'white' }}
            href="https://drive.google.com/file/d/1uRyBFRMAE6v4aHrlM-pKb6IcOH1M2ZE2/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </div>
      ),
    },
  ]

  return (
    <div className="how-to-join">
      <div className="banner-how-to-join banner"></div>
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
