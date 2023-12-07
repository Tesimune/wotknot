import React from 'react';
import './Footer.css'; // make sure to create a Footer.css file in the same directory
import Logo from './../../images/logo.png'


function Footer() {
  return (
    <footer className="footer">
        <div className='foot'>
            <img src={Logo} className='foot-img' alt='WOTKNOT'/>
        </div>
      <div className="footer-upper">
        <div className="footer-links">
          <a href="/contact">CONTACT</a>
          <a href="/advertising">ADVERTISING</a>
          <a href="/terms">TERMS OF USE</a>
          <a href="/privacy">PRIVACY POLICY</a>
          <a href="/cookie-policy">COOKIE POLICY</a>
          <a href="/label">FADER LABEL</a>
          <a href="/films">FADER FILMS</a>
        </div>
        <div className="footer-social">
          <a href="/twitter">TWITTER</a>
          <a href="/facebook">FACEBOOK</a>
          <a href="/youtube">YOUTUBE</a>
          <a href="/instagram">INSTAGRAM</a>
          <a href="/apple-music">APPLE MUSIC</a>
          <a href="/soundcloud">SOUNDCLOUD</a>
          <a href="/spotify">SPOTIFY</a>
          <a href="/rss">RSS</a>
        </div>
      </div>
      <div className="footer-lower">
        <p>CLICK ME. READ ME. THE FADER NEWSLETTER.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email address" className="email-input" />
          <button type="submit" className="sign-up-button">SIGN UP</button>
        </form>
      </div>
      <span className='spans'>&copy; 2023 WOTKNOT, INC. ALL RIGHTS RESERVED </span>
    </footer>
  );
}

export default Footer;
