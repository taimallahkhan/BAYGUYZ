import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import twitter from '../Assets/twitter.png'
import google from '../Assets/google.png'
import facebook from '../Assets/facebook.png'
import gmail from '../Assets/gmail.png'
import whatsapp from '../Assets/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>BayGuyz</p>
      </div>
      <ul className="footer-links">
        {/* <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li> */}
        <li>To Contact us click on below icons</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
           <a href="https://www.instagram.com/bayguyz?igsh=MjZ6MW52d3pscWI0"> <img src={instagram_icon} alt="" /></a>
        </div>
        <div className="footer-icons-container">
            <a href="https://x.com/bayguyz?t=LbFD1XM31Jj0I9Lti3BZDQ&s=09"><img src={twitter} alt="" /></a>
        </div>
        <div className="footer-icons-container">
            <a href="https://g.co/kgs/W2Ca2PG"><img src={google} alt="" /></a>
        </div>
        <div className="footer-icons-container">
            <a href="https://www.facebook.com/profile.php?id=61561011464506&mibextid=ZbWKwL"><img src={facebook} alt="" /></a>
        </div>
        <div className="footer-icons-container">
            <a href="https://wa.me/+917045060298?text= Hello! I' want to know about your offers"><img src={whatsapp} alt="" /></a>
        </div>
        <div className="footer-icons-container">
            <a href="mailto: bayguyz17@gmail.com"><img src={gmail} alt="" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved | This Website is Developed by Mohd Taimallah Khan.</p>
      </div>
    </div>
  )
}

export default Footer
