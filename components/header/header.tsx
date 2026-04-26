import Link from 'next/link';
import './header.css'; 

export default function Header() {
  return (
    <header className="site-header">
      
      <div className="header-left-group">
        <Link href="/" className="logo-link">
          {/* We will style this specific class to look like the 3D box! */}
          <div className="yep-logo">YEP!</div> 
        </Link>
        
        <nav className="header-nav">
          <Link href="/about">ABOUT</Link>
          <Link href="/team">OUR TEAM</Link>
          <Link href="/apply">APPLY</Link>
          <Link href="/programs">PROGRAMS</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>
      </div>

      <div className="header-right">
        <button className="hamburger-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

    </header>
  );
}