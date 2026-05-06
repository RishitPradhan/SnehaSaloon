import { CheckCircle } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Membership() {
  return (
    <main>
      <section className={styles.pageHeader}>
        <div className="container animate-on-scroll">
          <h1>Exclusive Memberships</h1>
          <p>Join the Sneha Elite family and enjoy unparalleled benefits, priority bookings, and luxury treatments all year round.</p>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingGrid}>
            
            {/* Basic Tier */}
            <div className={`${styles.pricingCard} animate-on-scroll`}>
              <h3 className={styles.tierName}>8 Service Plan</h3>
              <div className={styles.price}>₹9,000</div>
              <ul className={styles.featuresList}>
                <li><CheckCircle className="text-gold" size={20} /> 8 Services / 8 Hours of premium care</li>
                <li><CheckCircle className="text-gold" size={20} /> Valid for exactly 365 days</li>
                <li><CheckCircle className="text-gold" size={20} /> Priority Booking</li>
                <li><CheckCircle className="text-gold" size={20} /> Shareable with family members</li>
              </ul>
              <Link href="/contact" className="btn btn-outline" style={{ width: '100%' }}>Join Basic</Link>
            </div>

            {/* Premium Tier (Popular) */}
            <div className={`${styles.pricingCard} ${styles.popularCard} animate-on-scroll`}>
              <div className={styles.popularBadge}>Most Popular</div>
              <h3 className={styles.tierName}>18 Service Plan</h3>
              <div className={styles.price}>₹19,000</div>
              <ul className={styles.featuresList}>
                <li><CheckCircle className="text-gold" size={20} /> 18 Services / 18 Hours of luxury care</li>
                <li><CheckCircle className="text-gold" size={20} /> Valid for exactly 365 days</li>
                <li><CheckCircle className="text-gold" size={20} /> Free Beverages & Snacks during visits</li>
                <li><CheckCircle className="text-gold" size={20} /> Shareable with family members</li>
                <li><CheckCircle className="text-gold" size={20} /> Priority Booking & Zero Cancellation Fee</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Join Premium</Link>
            </div>

            {/* Elite Tier */}
            <div className={`${styles.pricingCard} animate-on-scroll`}>
              <h3 className={styles.tierName}>30 Service Plan</h3>
              <div className={styles.price}>₹29,000</div>
              <ul className={styles.featuresList}>
                <li><CheckCircle className="text-gold" size={20} /> 30 Services / 30 Hours of VIP treatments</li>
                <li><CheckCircle className="text-gold" size={20} /> Valid for exactly 365 days</li>
                <li><CheckCircle className="text-gold" size={20} /> VIP Lounge Access & Special Perks</li>
                <li><CheckCircle className="text-gold" size={20} /> Shareable with family & friends</li>
                <li><CheckCircle className="text-gold" size={20} /> Dedicated Personal Stylist</li>
                <li><CheckCircle className="text-gold" size={20} /> Complimentary Consultations</li>
              </ul>
              <Link href="/contact" className="btn btn-outline" style={{ width: '100%' }}>Join Elite</Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container animate-on-scroll">
          <h2>Membership FAQs</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>How long is the membership valid?</h4>
              <p>All our membership plans are valid for exactly 365 days from the date of purchase. You can renew them seamlessly.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Can I share my membership benefits?</h4>
              <p>Memberships are non-transferable. However, Elite members can bring one guest per month who will receive a 10% discount on their services.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>How do I redeem my complimentary services?</h4>
              <p>Simply inform our receptionist when booking your appointment or checking out. Your complimentary services are tracked electronically on your profile.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
