import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
             <span>REPAIR SPARK</span>
             <p>Book verified technicians for hassle-free home services and electronic repairs, all from one platform.</p>
           <div className='footer-social-icon'>
                
                  <a 
                  href="https://www.facebook.com/share/1bcFkddKHw/" target="_blank" rel="noopener noreferrer">
                   <FaFacebook />
                  </a>
                  <a 
                  href="https://www.instagram.com/klarosolutions_nagpur?igsh=eGM5enk0eHlsaTl1" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                  </a>
                  
                  
                  <a 
                  href="https://x.com/klarosolutions" target="_blank" rel="noopener noreferrer">
                   <FaXTwitter />
                  </a>
           </div>
            </div>
            <div className='footer-content-center'>
              <h1>COMPANY</h1>
              <ul>
                <li> <Link to='/' > Home </Link></li>
                <li><Link to='/' > Service </Link></li>
                 
                <li> <Link to="/terms" className="hover:text-blue-600"> Terms & Conditions</Link></li>

              </ul>
            </div>
            <div className='footer-content-right'>
                 <h2>CONTACT US</h2>
                 <ul>
                    <li>9067228172</li>
                    <li>Klarosolutionsnagpur@gmail.com</li>
                 </ul>
            </div>
            

        </div>
          <hr/>
          <p className='footer-copyright'> 2026 YourCompanyName. All rights reserved.</p>
    </div>
  )
}

export default Footer