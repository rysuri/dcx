import React, { useState } from "react";
import styles from "../css/FAQ.module.css";

const faqSections = [
  {
    name: "General",
    faqs: [
      {
        question: "What industries do you supply?",
        answer:
          "We focus on essentials across apparel, tools, automotive, and select sporting goods.",
      },
      {
        question: "Where are you located?",
        answer:
          "Our office is in Las Vegas, Nevada. We ship and receive across the U.S.",
      },
      {
        question: "Do you ship internationally?",
        answer: "At this time, we only ship within the United States.",
      },
      {
        question: "Do you have a minimum order requirement?",
        answer:
          "Minimum order requirements vary by product category and terms of the agreement.",
      },
    ],
  },
  {
    name: "Orders & Processing",
    faqs: [
      {
        question: "How quickly do you process purchase orders?",
        answer:
          "Most POs are confirmed within 24–48 hours, depending on volume and terms.",
      },
      {
        question: "Can I change or cancel an order after it’s submitted?",
        answer:
          "Orders can usually be adjusted within the first 12 hours. After that, changes may not be possible.",
      },
      {
        question: "How can I track the status of my purchase order?",
        answer:
          "You’ll receive confirmation and status updates via email. For detailed updates, our customer support team can assist.",
      },
      {
        question: "Do you offer bulk pricing or discounts?",
        answer:
          "Yes, bulk orders often qualify for tiered pricing. Please contact sales for details.",
      },
    ],
  },
  {
    name: "Shipping & Delivery",
    faqs: [
      {
        question: "What shipping carriers do you use?",
        answer:
          "We partner with major carriers like UPS, FedEx, and freight services for larger orders.",
      },
      {
        question: "How long does shipping usually take?",
        answer:
          "Standard delivery is 3–7 business days depending on location. Expedited options are available.",
      },
      {
        question: "Do you offer drop shipping?",
        answer:
          "Yes, drop shipping is available for select products and partners.",
      },
      {
        question: "Can I schedule a specific delivery date?",
        answer:
          "In most cases, yes — especially for large or recurring orders. Please coordinate with our team.",
      },
    ],
  },
  {
    name: "Products & Inventory",
    faqs: [
      {
        question: "How do you ensure product quality?",
        answer:
          "We source directly from trusted manufacturers and conduct routine quality checks.",
      },
      {
        question: "Do you offer custom products or private labeling?",
        answer:
          "Yes, we provide private-label solutions for qualified partners.",
      },
      {
        question: "How often is inventory updated?",
        answer:
          "Inventory levels are refreshed daily to reflect current availability.",
      },
      {
        question: "What happens if an item is out of stock?",
        answer:
          "We’ll notify you immediately with restock timelines or alternative product options.",
      },
    ],
  },
  {
    name: "Accounts & Support",
    faqs: [
      {
        question: "How do I set up an account with you?",
        answer:
          "Simply contact our sales team to get started with account setup and terms.",
      },
      {
        question: "Do you work with both businesses and individuals?",
        answer:
          "We primarily serve businesses, but select product categories are available for individual buyers.",
      },
      {
        question:
          "Who do I contact for technical support or product questions?",
        answer:
          "Our support team is available via email and phone during business hours.",
      },
      {
        question: "What are your customer service hours?",
        answer: "Monday–Friday, 9 AM to 5 PM (PST).",
      },
    ],
  },
];

function FAQ() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(faqSections[0].name);
  const [openIndexes, setOpenIndexes] = useState({});

  const currentSection = faqSections.find((s) => s.name === activeTab);

  const filteredFaq = currentSection.faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = (idx) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className={styles.container}>
      <main className={styles["faq-main-bg"]}>
        <section className={styles["faq-full-container"]}>
          <header className={styles["faq-header"]}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles["faq-search"]}>
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search FAQ"
              />
            </div>
          </header>
          <nav className={styles["faq-tabs"]}>
            {faqSections.map((section) => (
              <button
                key={section.name}
                className={activeTab === section.name ? styles.active : ""}
                onClick={() => {
                  setActiveTab(section.name);
                  setSearch("");
                  setOpenIndexes({});
                }}
                tabIndex={0}
              >
                {section.name}
              </button>
            ))}
          </nav>
          <div className={styles["faq-list"]}>
            {filteredFaq.length > 0 ? (
              filteredFaq.map((item, idx) => (
                <div
                  className={`${styles["faq-accordion-item"]}${
                    openIndexes[idx] ? ` ${styles.open}` : ""
                  }`}
                  key={idx}
                >
                  <button
                    className={styles["faq-accordion-title"]}
                    onClick={() => handleToggle(idx)}
                    aria-expanded={!!openIndexes[idx]}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span>{item.question}</span>
                    <span className={styles["faq-accordion-icon"]}>
                      {openIndexes[idx] ? (
                        <svg width="18" height="18" viewBox="0 0 18 18">
                          <path
                            d="M5 11l4-4 4 4"
                            stroke="#00e6fb"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 18 18">
                          <path
                            d="M5 7l4 4 4-4"
                            stroke="#b0b6c3"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={styles["faq-accordion-panel"]}
                    id={`faq-panel-${idx}`}
                    style={{
                      maxHeight: openIndexes[idx] ? "200px" : "0",
                      opacity: openIndexes[idx] ? 1 : 0,
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles["faq-empty"]}>No results found.</div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default FAQ;
