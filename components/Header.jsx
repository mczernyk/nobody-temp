import React, {useState} from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';

const Header = () => {
  const { menuVisible, setMenuVisible, handleClickScroll, scrollTo } = useStateContext();

  const handleVisible = (visible) => {
    setMenuVisible(!visible)
  }


  return (
    <div className='header-container'>
      <div className='header-section-title'>
        <div className='header-title-box'>
          <h1>no</h1>
          <h1 className='title-underline'>body</h1>
        </div>
      </div>
      <div className='header-items'>

        <div className='header-about'>
          <Link href="/about">
            <p>about</p>
          </Link>
        </div>
      </div>



    </div>
  )
}

export default Header
