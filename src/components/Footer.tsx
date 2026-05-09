import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <Image src="/images/logo.jpeg" alt="Sneha Salon Logo" width={50} height={50} style={{ borderRadius: '50%', objectFit: 'cover' }} />
              <h3 style={{ margin: 0 }}>Sneha Salon & Spa</h3>
            </div>
            <p>
              Experience the epitome of luxury beauty and care. We offer expert styling, rejuvenating skin care, and holistic wellness therapies.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialIcon}><FacebookIcon /></a>
              <a href="#" className={styles.socialIcon}><InstagramIcon /></a>
              <a href="#" className={styles.socialIcon}><TwitterIcon /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/services" className={styles.link}>Services</Link></li>
              <li><Link href="/membership" className={styles.link}>Membership Plans</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.title}>Our Services</h4>
            <ul className={styles.links}>
              <li><Link href="/services#hair" className={styles.link}>Hair Styling & Color</Link></li>
              <li><Link href="/services#facials" className={styles.link}>Premium Facials</Link></li>
              <li><Link href="/services#makeup" className={styles.link}>Bridal Makeup</Link></li>
              <li><Link href="/services#massage" className={styles.link}>Spa & Massage</Link></li>
              <li><Link href="/services#waxing" className={styles.link}>Waxing & Threading</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.title}>Contact Info</h4>
            <ul className={styles.contactInfo}>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={20} />
                <span>Plot no. 4C - 1441, Sector 11, CDA Cuttack</span>
              </li>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={20} />
                <span>+91 76818 59504</span>
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={20} />
                <span>hello@snehasalon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Sneha Salon & Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
