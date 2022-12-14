import React from 'react'
import Link from 'next/link';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Product, FooterBanner, HeroBanner, ComingSoon, Previews, Header} from '../components'




const Home = ({}) => (
  <div className='main'>
    <Head>
      <title>nobody</title>
      <meta property="og:title" content="nobody"/>
      <meta property="og:description" content="♡ nobody loves you ♡"/>
      <meta property="og:image" content="/nbCircleBlack.png"/>


    </Head>
    <Header />
    <div className="about-container">
      <br></br>
      <br></br>
      <br></br>
      <h1>STORE OPENS 8/22 @ 1PM EST</h1>
      <br></br>
      <div>

      <Previews />


      </div>

        <div className='about-content'>
          <p>nobody lets you create products from a curated group of NFT collections using assets in your web3 wallet. you own your NFTs, now you can do something with them.</p>

          <p>nobody also sells original gear and pieces featuring assets from nobody's vault. NFTs can be expensive, nobody gives customers a different way to support these projects. offerings from each collection will be rotated periodically based on nobody's holdings.</p>

          <p>nobody uses 20% of profits from sales to sweep the floor of each respective collection. nobody does so once this profit allocation reaches the floor price.</p>

          <p>nobody limits the amount of products sold daily. currently 25 orders are accepted per day. the store reopens every day at 11AM EST.</p>

          <p>nobody offers a 10% collection discount for each month's best selling collection. this sale lasts 24 hours, the sale date is announced on <a className='twitter-about' href="https://twitter.com/nobody_clothing">twitter</a>.</p>

          <h2>♡ nobody loves you ♡</h2>


        </div>


    </div>



  </div>
);


export default Home;
