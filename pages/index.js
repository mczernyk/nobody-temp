import React from 'react'
import Link from 'next/link';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



import {Header} from '../components'


const Home = ({}) => (
  <div className='main'>
    <Header/>
    <div className="about-container">
      <br></br>
      <br></br>
      <br></br>
      <h1>COMING SOON</h1>
      <br></br>

        <div className='about-content'>
          <p>nobody allows you to create products from a curated group of NFT collections using your CC0 assets. you own your NFTs, now you can do something with them.</p>

          <p>nobody also sells original gear and pieces featuring CC0 assets from nobody's vault. NFTs can be expensive, nobody gives customers a different way to support these projects. the offerings from each collection will be rotated periodically based on nobody's holdings.</p>

          <p>nobody uses 20% of profits from sales to sweep the floor of each respective collection. nobody does so once this profit allocation reaches the floor price.</p>

          <p>nobody limits the amount of products sold daily. currently 25 orders are accepted per day. the store reopens every day at 11AM EST.</p>

          <p>nobody offers a 10% collection discount for each month's best selling collection. this sale lasts 24 hours, the sale date is announced on <a className='twitter-about' href="https://twitter.com/nobody_clothing">twitter</a>.</p>

          <h2>♡ nobody loves you ♡</h2>


        </div>


    </div>



  </div>
);


export default Home;
