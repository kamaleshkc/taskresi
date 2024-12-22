import React from 'react'
import "./footer.css"
import facebook from '../../assets/FACEBOOK.png'
import instagram from '../../assets/INSTAGRAM.png'
import discord from '../../assets/DISCORD.png'
import twitter from '../../assets/TWITTER.png'
import Logo from '../../assets/image 9.png'


export const Footer = () => {
  return (
    <footer className="footer">
  <div className="marketplace-logo">
    <img src={Logo} alt="Marketplace Logo" />
  </div>
  <div className="footer-links">
    <a href="#facebook" className="footer-link">
      <img src={facebook} alt="Facebook" />
    </a>
    <a href="#twitter" className="footer-link">
      <img src={twitter} alt="Twitter" />
    </a>
    <a href="#discord" className="footer-link">
      <img src={discord} alt="Discord" />
    </a>
    <a href="#instagram" className="footer-link">
      <img src={instagram} alt="Instagram" />
    </a>
  </div>
</footer>
  )
}
