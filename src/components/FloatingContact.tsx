import { Phone, MessageCircle } from "lucide-react";
import styles from "./FloatingContact.module.css";

export default function FloatingContact() {
  return (
    <div className={styles.container}>
      <a href="tel:+919876543210" className={`${styles.button} ${styles.call}`} aria-label="Call Us">
        <Phone size={24} />
      </a>
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.whatsapp}`} aria-label="WhatsApp Us">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
