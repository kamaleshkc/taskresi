import React, { useEffect, useState } from 'react'
import  './header.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import CartList from '../CartList/cartList'

type NavProps={
  status: string;
}



const NavBar:React.FC <NavProps>= ({status}) => {
 
const navigate = useNavigate();
const handleAccountClick = () => navigate('/cart');
const handleWalletClick = () => navigate("/wallet");


  console.log(status)

  return (
    <header className="header" >
    <div className="header-logo">MARKETPLACE.</div>
      {status === 'loggedin' && <Button label='Account' onClick={handleAccountClick} /> }
      {status==='loggedout' && <Button label='Connect Wallet'onClick={handleWalletClick}/>}
  </header>
  )
}

export default NavBar