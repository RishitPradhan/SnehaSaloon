import Link from "next/link";
import { Droplets, Sparkles, CheckCircle, Star } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="/images/hero.jpg" alt="Luxury Salon Interior" />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContent} animate-on-scroll`}>
          <h1>Luxury Beauty & Care at Sneha Salon & Spa</h1>
          <p>Expert styling, skin care, and wellness — all in one place. Experience the pinnacle of luxury and relaxation.</p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn btn-primary">Book Appointment</Link>
            <Link href="/services" className="btn btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} animate-on-scroll`}>
            <h2>Our Premium Services</h2>
            <p>Indulge in our wide range of professional beauty and wellness treatments designed to enhance your natural glow.</p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Service 1 */}
            <div className={`${styles.serviceCard} animate-on-scroll`}>
              <div className={styles.serviceCardBg}>
                <img src="/images/svc-hair-styling.jpg" alt="Hair Care" />
              </div>
              <div className={styles.serviceCardOverlay}></div>
              <div className={styles.serviceCardContent}>
                <h3>Hair Care</h3>
                <p>Expert cuts, coloring, and treatments for healthy, beautiful hair.</p>
                <Link href="/services" className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', marginTop: '1rem' }}>Explore Services</Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className={`${styles.serviceCard} animate-on-scroll`}>
              <div className={styles.serviceCardBg}>
                <img src="/images/svc-facials.jpg" alt="Skin Care" />
              </div>
              <div className={styles.serviceCardOverlay}></div>
              <div className={styles.serviceCardContent}>
                <h3>Skin Care</h3>
                <p>Rejuvenating facials and detan treatments for a flawless complexion.</p>
                <Link href="/services" className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', marginTop: '1rem' }}>Explore Services</Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className={`${styles.serviceCard} animate-on-scroll`}>
              <div className={styles.serviceCardBg}>
                <img src="/images/svc-massage.jpg" alt="Body Care & Wellness" />
              </div>
              <div className={styles.serviceCardOverlay}></div>
              <div className={styles.serviceCardContent}>
                <h3>Body Care & Wellness</h3>
                <p>Relaxing massages and essential grooming services.</p>
                <Link href="/services" className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', marginTop: '1rem' }}>Explore Services</Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} animate-on-scroll`}>
            <h2>Why Choose Sneha Salon</h2>
            <p>We combine expertise, premium products, and a luxurious environment to deliver an unforgettable experience.</p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} animate-on-scroll`}>
              <div className={styles.featureIcon}>
                <Star size={32} />
              </div>
              <h3>Expert Professionals</h3>
              <p>Highly trained stylists and therapists dedicated to your care.</p>
            </div>
            <div className={`${styles.featureCard} animate-on-scroll`}>
              <div className={styles.featureIcon}>
                <CheckCircle size={32} />
              </div>
              <h3>Premium Products</h3>
              <p>We use only the highest quality international beauty brands.</p>
            </div>
            <div className={`${styles.featureCard} animate-on-scroll`}>
              <div className={styles.featureIcon}>
                <Sparkles size={32} />
              </div>
              <h3>Hygienic Environment</h3>
              <p>Strict sanitation protocols for your safety and peace of mind.</p>
            </div>
            <div className={`${styles.featureCard} animate-on-scroll`}>
              <div className={styles.featureIcon}>
                <Droplets size={32} />
              </div>
              <h3>Personalized Care</h3>
              <p>Customized treatments tailored to your unique beauty needs.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section className={`section ${styles.gallerySection}`}>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItem}>
            <img src="/images/gallery-1.jpg" alt="Salon Experience 1" />
          </div>
          <div className={styles.galleryItem}>
            <img src="/images/gallery-2.jpg" alt="Salon Experience 2" />
          </div>
          <div className={styles.galleryItem}>
            <img src="/images/gallery-3.jpg" alt="Salon Experience 3" />
          </div>
          <div className={styles.galleryItem}>
            <img src="/images/gallery-4.jpg" alt="Salon Experience 4" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} animate-on-scroll`}>
            <h2>Client Experiences</h2>
            <p>See what our beautiful clients have to say about us.</p>
          </div>

          <div className={styles.testimonialGrid}>
            <div className={`${styles.testimonialCard} animate-on-scroll`}>
              <div className={styles.stars}>
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className={styles.quote}>"The most luxurious salon experience I've ever had. The staff is incredible, and the ambiance is so relaxing. I absolutely loved my facial!"</p>
              <h4 className={styles.author}>- Priya S.</h4>
            </div>
            
            <div className={`${styles.testimonialCard} animate-on-scroll`}>
              <div className={styles.stars}>
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className={styles.quote}>"Got my bridal makeup done here. They made me look flawless and the makeup lasted all night. Highly recommend Sneha Salon!"</p>
              <h4 className={styles.author}>- Ananya R.</h4>
            </div>

            <div className={`${styles.testimonialCard} animate-on-scroll`}>
              <div className={styles.stars}>
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className={styles.quote}>"Professional, hygienic, and very skilled. The Premium membership is totally worth it. It's my go-to place for all grooming needs."</p>
              <h4 className={styles.author}>- Neha M.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className={`section ${styles.findUsSection}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} animate-on-scroll`}>
            <h2>Find Us</h2>
            <p>Visit our salon for a premium beauty experience.</p>
          </div>
          <div className={`${styles.mapContainer} animate-on-scroll`}>
            <iframe 
              src="https://maps.google.com/maps?q=Plot%20no.%204C%20-%201441,%20Sector%2011,%20CDA%20Cuttack&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sneha Salon Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container animate-on-scroll">
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready for Your Transformation?</h2>
          <p style={{ color: '#dcdcdc', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Book your appointment today and step into a world of elegance, luxury, and unmatched care.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Book Your Appointment Today
          </Link>
        </div>
      </section>
    </div>
  );
}
