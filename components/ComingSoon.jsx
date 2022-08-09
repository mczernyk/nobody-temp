import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import Image from 'next/image'

const ComingSoon = () => {
  const [currentPic, setCurrentPic] = useState('/images/milady2black.png')


  const selectPic = () => {

    const picsArray = [
      '/images/allstarz1black.png',
      '/images/allstarz2berry.png',
      '/images/allstarzfrontpurple.png',
      '/images/aura1navy.png',
      '/images/aura2white.png',
      '/images/cdb1purple.png',
      '/images/cdb2berry.png',
      '/images/cdbfrontnavy.png',
      '/images/hatcandy.png',
      '/images/hatsky.png',
      '/images/loveberry.png',
      '/images/lovefrontwhite.png',
      '/images/miaurawhite.png',
      '/images/milady1berry.png',
      '/images/milady2black.png',
      '/images/miladyfrontnavy.png',
      '/images/milaidypurple.png',
      '/images/passenger black.png',
      '/images/passengerbacknavy.png',
      '/images/shoetop.png',
      '/images/slidesideblack.png',
      '/images/slidetopwhite.png',
      '/images/tiedye.png',
      '/images/tiedyeblack.png',
    ]

    let numChoice = Math.floor(Math.random() * (picsArray.length-1));

    setCurrentPic(picsArray[numChoice])

  }



  useEffect(() => {
    const timer = setInterval(() => {
      selectPic()
    },2000)
  }, [])


  return (

      <div>
        <Image
          src={currentPic}
          height='300px'
          width='300p'
        />
      </div>

  )
}

export default ComingSoon
