import styles from "../css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container} role="contentinfo">
      <div className={styles["footer-container"]}>
        <div
          className={`${styles["footer-section"]} ${styles["footer-company"]}`}
        >
          <h2 className={styles["footer-logo"]}>DCX Distributions</h2>
          <p className={styles["footer-tagline"]}>
            Connecting Industries with reliable supply solutions.
          </p>
        </div>

        {/* Quick Links */}
        <nav
          className={`${styles["footer-section"]} ${styles["footer-links"]}`}
          aria-label="Footer quick links"
        >
          <h3>Quick Links</h3>
          <ul className={styles.list}>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <address
          className={`${styles["footer-section"]} ${styles["footer-contact"]}`}
        >
          <h3>Contact</h3>
          <p>123 Business Ave, Suite 100</p>
          <p>Las Vegas, NV 89101</p>
          <p>
            Phone: <a href="tel:+17025551234">(702) 555-1234</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:sales@dcxdistributions.com">
              sales@dcxdistributions.com
            </a>
          </p>
        </address>

        {/* Social / Misc */}
        <div
          className={`${styles["footer-section"]} ${styles["footer-social"]}`}
        >
          <h3>Follow Us</h3>
          <div className={styles["social-links"]}>
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <p>
          © {new Date().getFullYear()} DCX Distributions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
