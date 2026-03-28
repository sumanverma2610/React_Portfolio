import React, { useState } from "react";
import { useContact } from "../context/contactContext.jsx";
import "../css/Contact.css";

const Contact = () => {
  const { sendMessage, loading, success, error } = useContact();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sent = await sendMessage(form);

    if (sent) {
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
 <div className="contact-info">
  <h1>Let's Connect</h1>
  <p className="contact-subtitle">
    Feel free to reach out for collaborations or just a friendly hello 👋
  </p>

  <div className="info-item">
    <span className="info-label">Email</span>
    <a href="mailto:sumanverma@example.com" className="info-link">
      sumanverma@example.com
    </a>
  </div>

  <div className="info-item">
    <span className="info-label">LinkedIn</span>
    <a
      href="https://linkedin.com/in/sumanverma"
      target="_blank"
      rel="noopener noreferrer"
      className="info-link"
    >
      linkedin.com/in/sumanverma
    </a>
  </div>

  <div className="info-item">
    <span className="info-label">GitHub</span>
    <a
      href="https://github.com/sumanverma"
      target="_blank"
      rel="noopener noreferrer"
      className="info-link"
    >
      github.com/sumanverma
    </a>
  </div>
</div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Send Message</h2>

            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;