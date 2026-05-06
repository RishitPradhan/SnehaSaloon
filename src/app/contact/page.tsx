"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main>
      <section className={styles.pageHeader}>
        <div className="container animate-on-scroll">
          <h1>Get in Touch</h1>
          <p>Book your appointment or send us an inquiry. We're always here to help you look your best.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            
            {/* Contact Info */}
            <div className={`${styles.contactInfo} animate-on-scroll`}>
              <h2>Contact Information</h2>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><MapPin size={24} /></div>
                  <div className={styles.infoContent}>
                    <h4>Visit Us</h4>
                    <p>123 Luxury Avenue, Beauty Hub<br/>Bhubaneswar, Odisha 751001</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><Phone size={24} /></div>
                  <div className={styles.infoContent}>
                    <h4>Call Us</h4>
                    <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                    <p><a href="tel:+919876543211">+91 98765 43211</a></p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><MessageCircle size={24} /></div>
                  <div className={styles.infoContent}>
                    <h4>WhatsApp</h4>
                    <p><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">+91 98765 43210</a></p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><Mail size={24} /></div>
                  <div className={styles.infoContent}>
                    <h4>Email Us</h4>
                    <p><a href="mailto:hello@snehasalon.com">hello@snehasalon.com</a></p>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook"><FacebookIcon /></a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram"><InstagramIcon /></a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter"><TwitterIcon /></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${styles.contactFormWrapper} animate-on-scroll`}>
              <h3>Send us an Inquiry</h3>
              {submitted ? (
                <div style={{ padding: '2rem', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid #25D366', borderRadius: '4px', color: '#25D366', textAlign: 'center' }}>
                  <h4>Thank you!</h4>
                  <p>Your inquiry has been sent successfully. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={styles.formControl} placeholder="Enter your full name" />
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={styles.formControl} placeholder="Enter your email" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className={styles.formControl} placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service of Interest</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} required className={styles.formControl}>
                      <option value="" disabled>Select a service</option>
                      <option value="hair">Hair Styling & Care</option>
                      <option value="skin">Skin Care & Facials</option>
                      <option value="makeup">Bridal / Party Makeup</option>
                      <option value="massage">Spa & Massage</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className={styles.formControl} placeholder="Tell us about your requirements..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className={styles.mapSection}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53374955681!2d85.73693248325607!3d20.299863486392095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33c28!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1715015000000!5m2!1sen!2sin" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Sneha Salon Location"
        ></iframe>
      </section>
    </main>
  );
}
