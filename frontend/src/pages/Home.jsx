import styles from "../css/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className="hero">
        <h1>Connecting Industries with Reliable Supply Solutions</h1>
      </div>

      {/* Our Values */}
      <div className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Direct Access to our team</strong> – Always have the
            opportunity to speak with a decision-maker instead of a call center
            representative.
          </li>
          <li>
            <strong>Adaptability</strong> – We are ready to meet supplier
            requirements and adapt to market trends and compliance changes.
          </li>
          <li>
            <strong>Transparency and Honesty</strong> – We offer clear pricing
            with no hidden terms.
          </li>
        </ul>
      </div>

      {/* Categories We Supply */}
      <div className="categories-supply">
        <h2>Categories We Supply</h2>
        <div className="categories-grid">
          <div>Apparel & Accessories</div>
          <div>Health & Personal Care</div>
          <div>Household Essentials</div>
          <div>Food & Beverage</div>
          <div>Sports & Outdoors</div>
          <div>Tools & Automotive</div>
          <div>Baby & Kids</div>
          <div>Electronics & Accessories</div>
          <div>Beauty & Grooming</div>
          <div>Pet Supplies</div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="why-work-with-us">
        <h2>Why Work With Us</h2>
        <ul>
          <li>
            <strong>Flexible Solutions</strong> – We work with your organization
            to create customized solutions that support your growth and
            integrate seamlessly with our operations.
          </li>
          <li>
            <strong>Timely Delivery</strong> – DCX Distributions is committed to
            on-time delivery, ensuring your inventory reaches your business
            without delay.
          </li>
          <li>
            <strong>Proven Track Record</strong> – We make it easy for you to
            reach us through our "Contact Us" page and dedicated email support,
            ensuring quick and efficient assistance.
          </li>
          <li>
            <strong>Clear Communication</strong> – We make it easy for you to
            reach us for any inquiries through our contact us page and direct
            email support that allows us to assist you as efficiently as
            possible.
          </li>
          <li>
            <strong>Reliable Partnerships</strong> – Our extensive partnerships
            allow us to place consistent and timely orders on your behalf, so
            you can focus on your business without worrying about inventory
            shortages.
          </li>
        </ul>
      </div>

      {/* How We Operate */}
      <div className="how-we-operate">
        <h2>How We Operate</h2>
        <ol>
          <li>Contact us for pricing and catalog information.</li>
          <li>
            Consult with a sales representative for product-specific pricing.
          </li>
          <li>Place your order.</li>
          <li>Process your order.</li>
          <li>Delivery.</li>
          <li>Customer support</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
