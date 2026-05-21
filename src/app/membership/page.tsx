"use client";

import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Membership() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long is the membership valid?",
      answer: "All our membership plans are valid for exactly 365 days from the date of purchase. You can renew them seamlessly."
    },
    {
      question: "Can I share my membership benefits?",
      answer: "Basic and Premium plans are shareable with family members. Elite memberships offer additional guest privileges."
    },
    {
      question: "How do I redeem my complimentary services?",
      answer: "Simply inform our receptionist when booking your appointment or checking out. Your complimentary services are tracked electronically on your profile."
    },
    {
      question: "Is there a cancellation fee for missed appointments?",
      answer: "Standard members are subject to our 24-hour cancellation policy. Premium and Elite members enjoy Zero Cancellation Fees."
    }
  ];

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
              <Link href="/contact" className={styles.subscribeBtn}>Join Basic</Link>
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
              <Link href="/contact" className={styles.subscribeBtnPremium}>Join Premium</Link>
            </div>

            {/* Elite Tier */}
            <div className={`${styles.pricingCard} animate-on-scroll`}>
              <h3 className={styles.tierName}>30 Service Plan</h3>
              <div className={styles.price}>₹29,000</div>
              <ul className={styles.featuresList}>
                <li><CheckCircle className="text-gold" size={20} /> 30 Services / 30 Hours of VIP treatments</li>
                <li><CheckCircle className="text-gold" size={20} /> Valid for exactly 365 days</li>
                <li><CheckCircle className="text-gold" size={20} /> Special Perks & Privileges</li>
                <li><CheckCircle className="text-gold" size={20} /> Shareable with family & friends</li>
                <li><CheckCircle className="text-gold" size={20} /> Dedicated Personal Stylist</li>
                <li><CheckCircle className="text-gold" size={20} /> Complimentary Consultations</li>
              </ul>
              <Link href="/contact" className={styles.subscribeBtn}>Join Elite</Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container animate-on-scroll">
          <h2>Membership FAQs</h2>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={styles.faqHeader} 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown className={`${styles.faqIcon} ${openFaq === index ? styles.faqIconOpen : ''}`} size={24} />
                </button>
                <div className={`${styles.faqContent} ${openFaq === index ? styles.faqContentOpen : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
