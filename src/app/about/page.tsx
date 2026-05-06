import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container animate-on-scroll">
          <h1>Our Story</h1>
          <p>Redefining luxury and beauty since 2010.</p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={`${styles.imageWrapper} animate-on-scroll`}>
              <img src="/images/hero.jpg" alt="Salon Interior" />
              <div className={styles.goldBorder}></div>
            </div>
            
            <div className={`${styles.content} animate-on-scroll`}>
              <h2>The Sneha Experience</h2>
              <p>
                Founded on the belief that beauty is an intricate balance of inner wellness and outer radiance, Sneha Salon & Spa has established itself as the premier destination for luxury beauty care.
              </p>
              <p>
                Our sanctuary is designed to provide an escape from the hustle of everyday life. From the moment you step through our doors, you are enveloped in an atmosphere of tranquility, opulence, and impeccable service. We believe every client deserves a customized approach, tailored specifically to enhance their natural beauty.
              </p>
              
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <h3>12+</h3>
                  <p>Years Experience</p>
                </div>
                <div className={styles.statItem}>
                  <h3>5k+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className={styles.statItem}>
                  <h3>20+</h3>
                  <p>Expert Stylists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className="container animate-on-scroll">
          <h2>Our Mission</h2>
          <div className={styles.missionContent}>
            <p>
              To inspire confidence and empower individuals by delivering exceptional beauty and wellness services in a luxurious, inclusive, and relaxing environment. We are committed to continuous innovation, using only the finest products, and maintaining the highest standards of hygiene and client care.
            </p>
            <Link href="/contact" className="btn btn-primary">Visit Us Today</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
