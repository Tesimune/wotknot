import React, { useState, useEffect} from 'react';
import './List.css'; // This imports the CSS file for styling
import logo from './../../images/logo.jpg'

const List = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
      const checkScroll = () => {
        if (window.scrollY > 150) {
          setActive(true);
        } else {
          setActive(false);
        }
      };
  
      window.addEventListener('scroll', checkScroll);
  
      return () => {
        window.removeEventListener('scroll', checkScroll);
      };
    }, []);

  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <div className="navbar-logo">
        {active && <img src={logo} alt="Logo" />} {/* Replace '/logo.png' with the path to your logo */}
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/music" className="nav-link">MUSIC</a>
        </li>
        <li className="nav-item">
          <a href="/style" className="nav-link">STYLE</a>
        </li>
        <li className="nav-item">
          <a href="/culture" className="nav-link">CULTURE</a>
        </li>
        <li className="nav-item">
          <a href="/video" className="nav-link">VIDEO</a>
        </li>
      </ul>
    </nav>
  );
}

export default List;
