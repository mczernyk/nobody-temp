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
        <div className='header-collections'>
          <p onClick={() => handleVisible(menuVisible)}>collections</p>
          {menuVisible && <div className='header-menu-items'>
            <p>nobody</p>
            <p>allstarz</p>
            <p>cryptodickbutts</p>
            <p>milady</p>
            <p>milady aura</p>
            <p>milady deriv</p>
            <p>remilio</p>
            <p>accessories</p>
          </div>}
        </div>

      </div>



    </div>
  )
}

export default Header
