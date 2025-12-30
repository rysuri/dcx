import { useState } from "react";
import styles from "../css/ContactUs.module.css";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
    // Reset form if needed: setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        Have a question, partnership inquiry, or feedback? Fill out the form
        below and our team will get back to you soon.
      </p>
      {submitted ? (
        <div className={styles.success}>
          <h2>Thank you!</h2>
          <p>Your message has been sent. We'll be in touch soon.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Name<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              className={errors.name ? styles.inputError : ""}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className={errors.email ? styles.inputError : ""}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">
              Subject<span>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={errors.subject ? styles.inputError : ""}
            />
            {errors.subject && (
              <span className={styles.error}>{errors.subject}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">
              Message<span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={errors.message ? styles.inputError : ""}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message}</span>
            )}
          </div>
          <button type="submit" className={styles.submit}>
            Send Message
          </button>
        </form>
      )}
      <div className={styles.info}>
        <h2>Other ways to reach us</h2>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:info@dcxdistributions.com">
              info@dcxdistributions.com
            </a>
          </li>
          <li>
            Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
          <li>Address: 123 DCX Lane, City, Country</li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
