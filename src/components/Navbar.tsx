"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Sneha Salon
        </Link>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileActive : ""}`}>
          <Link href="/" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/services" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/membership" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Membership</Link>
          <Link href="/contact" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Book Appointment
          </Link>
        </div>

        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
