import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav className={styles.container}>
      <div className={styles["navbar-content"]}>
        <div className={styles["navbar-brand"]}>
          <Link to="/" onClick={handleClose}>
            DCX Distributions
          </Link>
        </div>
        <button
          className={styles["navbar-toggle"]}
          data-open={menuOpen}
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        <div className={styles["navbar-links"]} data-open={menuOpen}>
          <Link to="/" className={styles["nav-link"]} onClick={handleClose}>
            Home
          </Link>
          <Link
            to="/about"
            className={styles["nav-link"]}
            onClick={handleClose}
          >
            About
          </Link>
          <Link
            to="/partners"
            className={styles["nav-link"]}
            onClick={handleClose}
          >
            Partners
          </Link>
          <Link to="/faq" className={styles["nav-link"]} onClick={handleClose}>
            FAQ
          </Link>
          <Link
            to="/contact-us"
            className={styles["nav-link"]}
            onClick={handleClose}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
