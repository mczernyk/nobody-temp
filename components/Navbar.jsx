import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, connectWallet, walletAddress, setWalletAddress, abbvWalletAddress  } = useStateContext();

  return (
    <div className="navbar-container" id="header">
      <div className="navbar-left">
        <h1 className="logo">
          <Link href="/">nobody</Link>
        </h1>


      </div>

      <div className='navbar-right'>




      </div>

    </div>
  )
}

export default Navbar
