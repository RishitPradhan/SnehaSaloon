"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./page.module.css";

type SubSection = {
  title: string;
  items: string[];
};

type Service = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  subSections: SubSection[];
};

const servicesData: Service[] = [
  {
    id: "hair-styling",
    title: "Hair Styling",
    category: "Hair",
    image: "/images/svc-hair-styling.jpg",
    description: "Expert cuts, blowouts, and advanced styling to give you a flawless look.",
    subSections: [
      {
        title: "Service",
        items: ["One Length", "U Cut", "V Cut", "Baby Cut", "Step Cut", "Advance Cut"]
      },
      {
        title: "Hair Spa",
        items: ["Oxyglow", "Loreal"]
      }
    ]
  },
  {
    id: "hair-coloring",
    title: "Hair Coloring",
    category: "Hair",
    image: "/images/svc-hair-coloring.jpg",
    description: "Premium global coloring, highlights, balayage, and root touch-ups.",
    subSections: [
      {
        title: "Service",
        items: [
          "Root Touch Up", 
          "Root Touch Up Ammonia Free", 
          "Global Hair Coloring", 
          "Global & Highlight", 
          "Highlight Per Strip", 
          "Balayage (Per Foil)", 
          "Highlighting (Per Foil)", 
          "Ammonia Free"
        ]
      }
    ]
  },
  {
    id: "hair-treatment",
    title: "Hair Treatment",
    category: "Hair",
    image: "/images/svc-hair-treatment.jpg",
    description: "Keratin, Botox, Hair Spa, and deep conditioning treatments to restore health.",
    subSections: [
      {
        title: "Service",
        items: ["Keratin", "Botox", "Nano Plastia", "Anti Dandruff", "Anti Hair Fall", "Lice Treatment"]
      },
      {
        title: "Hair Rebonding",
        items: ["Straightening", "Smoothening"]
      }
    ]
  },
  {
    id: "facials",
    title: "Facials",
    category: "Face",
    image: "/images/svc-facials.jpg",
    description: "Luxurious facials including Gold, Diamond, and Hydra-facials for deep cleansing.",
    subSections: [
      {
        title: "Service",
        items: [
          "Lilium", "Charcoal", "Lotus White Glow", "Lotus Radient Gold", "Lotus Radient Diamond", 
          "Lotus Goldsheen", "Lotus Preser Vita", "Aroma Magic Vitamin C", "Raga Anti Acne", 
          "VLCC Gold", "VLACC Diamond", "Papaya Facial", "O3+ Bridal", "Hydra Facial Starting"
        ]
      }
    ]
  },
  {
    id: "detan",
    title: "Detan",
    category: "Face",
    image: "/images/svc-detan.jpg",
    description: "Advanced detan and bleaching services to remove sun damage and even out skin tone.",
    subSections: [
      {
        title: "Aryanveda",
        items: ["Face", "Back & Neck", "Full Hand", "Half Hand", "Full Leg", "Half Leg"]
      },
      {
        title: "Raga",
        items: ["Face", "Back & Neck", "Full Hand", "Half Hand", "Full Leg", "Half Leg"]
      },
      {
        title: "Cleanup",
        items: ["Fruit", "Aroma", "Lotus", "Lilium"]
      }
    ]
  },
  {
    id: "threading",
    title: "Threading & Bleach",
    category: "Face",
    image: "/images/svc-threading.jpg",
    description: "Precise eyebrow shaping, facial threading, and professional bleaching services.",
    subSections: [
      {
        title: "Threading",
        items: ["Eye Brow", "Forehead", "Upper Lip", "Chin", "Full Face", "Full Face Waxing"]
      },
      {
        title: "Bleach",
        items: ["Face", "Back & Neck", "Full Hand", "Half Hand", "Full Leg", "Half Leg"]
      }
    ]
  },
  {
    id: "waxing",
    title: "Waxing",
    category: "Body",
    image: "/images/svc-waxing.jpg",
    description: "Smooth, hygienic, and painless waxing using Honey and luxury Rika wax.",
    subSections: [
      {
        title: "Waxing (Honey & Rika)",
        items: ["Half Arm", "Full Arm", "Half Leg", "Full Leg", "Stomach", "Back", "Full Body", "Under Arm"]
      }
    ]
  },
  {
    id: "makeup",
    title: "Makeup",
    category: "Face",
    image: "/images/svc-makeup.jpg",
    description: "Professional makeup for weddings, parties, and special events.",
    subSections: [
      {
        title: "Make-Up",
        items: ["Party Make-Up", "Bridal Make-Up", "HD Make-Up", "Engagement Make-Up", "Reception Make-Up", "Per Bridal Package"]
      }
    ]
  },
  {
    id: "massage",
    title: "Massage & Wellness",
    category: "Body",
    image: "/images/svc-massage.jpg",
    description: "Relaxing massages, body polishing, and premium nail care therapies.",
    subSections: [
      {
        title: "Massage & Polish",
        items: ["Full Body Massage", "Head Massage", "Body Polish", "Full Body Stretching"]
      },
      {
        title: "Premium Massages",
        items: ["Swedish Massage", "Deep Tissue Massage", "Ayurvedic Massage with Stretching", "Thai Massage with Stretching", "Foot Massage"]
      },
      {
        title: "Nail Care",
        items: ["Pedicure", "Manicure"]
      }
    ]
  }
];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hair", "Face", "Body"];

  const filteredServices = servicesData.filter(service => {
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      service.title.toLowerCase().includes(searchLower) ||
      service.subSections.some(section => 
        section.title.toLowerCase().includes(searchLower) ||
        section.items.some(item => item.toLowerCase().includes(searchLower))
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <section className={styles.pageHeader}>
        <div className="container animate-on-scroll">
          <h1>Our Premium Services</h1>
          <p>Explore our comprehensive range of luxury beauty, hair, and wellness treatments.</p>
        </div>
      </section>

      <section className={styles.servicesContainer}>
        <div className="container">
          
          <div className={`${styles.controlsContainer} animate-on-scroll`}>
            {/* Search Bar */}
            <div className={styles.searchBar}>
              <Search className={styles.searchIcon} size={20} />
              <input 
                type="text" 
                placeholder="Search services (e.g., Keratin, Bridal...)"
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className={styles.categoryFilters}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className={styles.noResults}>
              <p>No services found matching your criteria. Please try another search term.</p>
            </div>
          ) : (
            <div className={styles.serviceGrid}>
              {filteredServices.map(service => (
                <div key={service.id} className={`${styles.serviceCard} animate-on-scroll`}>
                  <div className={styles.cardImage}>
                    <img src={service.image} alt={service.title} />
                    <span className={styles.cardCategory}>{service.category}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className={styles.subSectionsWrapper}>
                      {service.subSections.map((section, idx) => (
                        <div key={idx} className={styles.subSection}>
                          {service.subSections.length > 1 && (
                            <h4 className={styles.subSectionTitle}>{section.title}</h4>
                          )}
                          <ul className={styles.subServicesList}>
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
