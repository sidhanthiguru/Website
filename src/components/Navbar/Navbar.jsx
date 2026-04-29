import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Products & Services' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__bar">
          {/* LEFT: Logo */}
          <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
            <img 
              src="/images/Sidhanthi_Guru_Logo__1_-removebg-preview.png" 
              alt="Sidhanthi Guru Logo" 
              className="navbar__logo-image" 
            />
            <span className="navbar__logo-text">Sidhanthi Guru</span>
          </Link>

          {/* RIGHT: Nav Links */}
          <div className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary navbar__cta"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className={`navbar__hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`navbar__overlay${menuOpen ? ' navbar__overlay--visible' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  )
}
