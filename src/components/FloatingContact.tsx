import { Phone, MessageCircle } from "lucide-react";
import styles from "./FloatingContact.module.css";

export default function FloatingContact() {
  return (
    <div className={styles.container}>
      <a href="tel:+917681859504" className={`${styles.button} ${styles.call}`} aria-label="Call Us">
        <Phone size={24} />
      </a>
      <a href="https://wa.me/917681859504" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.whatsapp}`} aria-label="WhatsApp Us">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
