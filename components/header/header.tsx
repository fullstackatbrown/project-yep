'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  // checking for mobile or laptop
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // toggle menu for mobile devices
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* 1. Logo */}
        <div className="logo-section">
          <Link href="/" className="yep-logo-box">
            <span className="yep-text">YEP!</span>
          </Link>
        </div>

        {/* 2. Navigation */}
        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/team">Our Team</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/apply">Apply</Link></li>
          </ul>
        </nav>

        {/* 3. Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </header>
  );
};

export default Header;