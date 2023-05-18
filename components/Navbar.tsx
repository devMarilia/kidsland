import Link from 'next/link';
import React, { useState } from 'react'
import { NavbarContainer } from '../src/styles/navbar'


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <span className="logo">Kidsland</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/service" onClick={closeMenu}>
          Service
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </NavbarContainer>
  );
};
