import styles from "../css/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles["hero-image"]}>
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop"
            alt="Modern warehouse distribution center"
          />
          <div className={styles["hero-overlay"]}></div>
        </div>
        <div className={styles["hero-content"]}>
          <h1>Connecting Industries with Reliable Supply Solutions</h1>
          <p>
            Your trusted partner in wholesale distribution across 10+ major
            categories
          </p>
        </div>
      </div>

      {/* Our Values */}
      <section className={styles.section}>
        <div className={styles["section-header"]}>
          <h2>Our Values</h2>
          <p>
            Built on trust, transparency, and unwavering commitment to
            excellence
          </p>
        </div>
        <div className={styles["values-grid"]}>
          <div className={styles["value-card"]}>
            <div className={styles["value-image"]}>
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop"
                alt="Direct team communication"
              />
            </div>
            <div className={styles["value-content"]}>
              <h3>Direct Access to our team</h3>
              <p>
                Always have the opportunity to speak with a decision-maker
                instead of a call center representative.
              </p>
            </div>
          </div>
          <div className={styles["value-card"]}>
            <div className={styles["value-image"]}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
                alt="Business adaptability"
              />
            </div>
            <div className={styles["value-content"]}>
              <h3>Adaptability</h3>
              <p>
                We are ready to meet supplier requirements and adapt to market
                trends and compliance changes.
              </p>
            </div>
          </div>
          <div className={styles["value-card"]}>
            <div className={styles["value-image"]}>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
                alt="Transparent pricing"
              />
            </div>
            <div className={styles["value-content"]}>
              <h3>Transparency and Honesty</h3>
              <p>We offer clear pricing with no hidden terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories We Supply */}
      <section className={`${styles.section} ${styles["section-alt"]}`}>
        <div className={styles["section-header"]}>
          <h2>Categories We Supply</h2>
          <p>
            Comprehensive product range across major distribution categories
          </p>
        </div>
        <div className={styles["categories-grid"]}>
          <div className={styles["category-card"]}>
            <h3>Apparel & Accessories</h3>
          </div>
          <div className={styles["category-card"]}>
            <h3>Health & Personal Care</h3>
          </div>
          <div className={styles["category-card"]}>
            <h3>Household Essentials</h3>
          </div>
          <div className={styles["category-card"]}>
            <h3>Food & Beverage</h3>
          </div>
          <div className={styles["category-card"]}>
            <h3>Tools & Automotive</h3>
          </div>
          <div className={styles["category-card"]}>
            <h3>Sports & Outdoors</h3>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className={styles.section}>
        <div className={styles["section-header"]}>
          <h2>Why Work With Us</h2>
          <p>
            Partnering with DCX means choosing reliability, flexibility, and
            growth
          </p>
        </div>
        <div className={styles["benefits-grid"]}>
          <div className={styles["benefit-card"]}>
            <h3>Direct Access</h3>
            <p>
              Speak directly with decision-makers, not call centers. Get
              personalized service and quick responses.
            </p>
          </div>
          <div className={styles["benefit-card"]}>
            <h3>Flexible & Reliable</h3>
            <p>
              Customized solutions that adapt to your needs with consistent,
              on-time delivery you can count on.
            </p>
          </div>
          <div className={styles["benefit-card"]}>
            <h3>Transparent Pricing</h3>
            <p>
              Clear, honest pricing with no hidden fees. We build trust through
              transparency in all our partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className={`${styles.section} ${styles["section-alt"]}`}>
        <div className={styles["section-header"]}>
          <h2>How We Operate</h2>
          <p>A streamlined process designed for your success</p>
        </div>
        <div className={styles["process-grid"]}>
          <div className={styles["process-step"]}>
            <div className={styles["step-number"]}>1</div>
            <h3>Contact Us</h3>
            <p>Reach out for pricing and catalog information.</p>
          </div>
          <div className={styles["process-step"]}>
            <div className={styles["step-number"]}>2</div>
            <h3>Consult</h3>
            <p>
              Work with a sales representative for product-specific pricing.
            </p>
          </div>
          <div className={styles["process-step"]}>
            <div className={styles["step-number"]}>3</div>
            <h3>Place Order & Process</h3>
            <p>
              Submit your order and we handle all fulfillment details
              efficiently.
            </p>
          </div>
          <div className={styles["process-step"]}>
            <div className={styles["step-number"]}>4</div>
            <h3>Delivery & Support</h3>
            <p>
              Receive your products on time with ongoing assistance whenever
              needed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
