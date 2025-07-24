import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Solarisrex@pm.me",
      link: "mailto:Solarisrex@pm.me",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "JaellyBean",
      link: "https://github.com/JaellyBean",
    },
    {
      icon: MapPin,
      title: "Website",
      value: "solarisdev.vercel.app",
      link: "https://solarisdev.vercel.app",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/JaellyBean",
      color: "#333",
    },
    {
      icon: Mail,
      title: "Email",
      link: "mailto:Solarisrex@pm.me",
      color: "#ea4335",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "5rem 0",
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <motion.h2
            style={{
              fontSize: "clamp(2rem, 5vw, 2.5rem)",
              fontWeight: 300,
              textAlign: "center",
              marginBottom: "1rem",
              color: "#222",
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact
          </motion.h2>

          <motion.p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
              color: "#666",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              lineHeight: 1.6,
              fontWeight: 300,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together.
          </motion.p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ textAlign: "center" }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  marginBottom: "2rem",
                  color: "#222",
                  letterSpacing: "0.01em",
                  textAlign: "center",
                }}
              >
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  textAlign: "center",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: 400,
                      color: "#444",
                      fontSize: "0.9rem",
                      textAlign: "left",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.875rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                      fontSize: "16px", // Prevents zoom on iOS
                      transition: "border-color 0.2s ease",
                      backgroundColor: "white",
                      textAlign: "left",
                      minHeight: "48px",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#222")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: 400,
                      color: "#444",
                      fontSize: "0.9rem",
                      textAlign: "left",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.875rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                      fontSize: "16px", // Prevents zoom on iOS
                      transition: "border-color 0.2s ease",
                      backgroundColor: "white",
                      textAlign: "left",
                      minHeight: "48px",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#222")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <label
                    htmlFor="subject"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: 400,
                      color: "#444",
                      fontSize: "0.9rem",
                      textAlign: "left",
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.875rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                      fontSize: "16px", // Prevents zoom on iOS
                      transition: "border-color 0.2s ease",
                      backgroundColor: "white",
                      minHeight: "48px",
                      boxSizing: "border-box",
                      textAlign: "left",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#222")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: 400,
                      color: "#444",
                      fontSize: "0.9rem",
                      textAlign: "left",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "0.875rem",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                      fontSize: "16px", // Prevents zoom on iOS
                      resize: "vertical",
                      transition: "border-color 0.2s ease",
                      backgroundColor: "white",
                      textAlign: "left",
                      minHeight: "120px",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#222")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#222",
                    color: "white",
                    padding: "0.875rem 2rem",
                    fontSize: "16px", // Consistent with other inputs
                    fontWeight: 400,
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: "all 0.2s ease",
                    textAlign: "center",
                    margin: "0 auto",
                    minHeight: "48px",
                    width: "100%",
                    maxWidth: "280px",
                    boxSizing: "border-box",
                  }}
                  whileHover={{
                    backgroundColor: isSubmitting ? "#222" : "#444",
                  }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send size={18} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ textAlign: "center" }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  marginBottom: "2rem",
                  color: "#222",
                  letterSpacing: "0.01em",
                  textAlign: "center",
                }}
              >
                Contact Info
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  textAlign: "center",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      transition: "all 0.2s ease",
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{
                      backgroundColor: "#f8f9fa",
                      transform: "translateX(4px)",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <info.icon size={20} style={{ color: "#666" }} />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <h4
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          marginBottom: "0.25rem",
                          color: "#222",
                        }}
                      >
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          style={{
                            color: "#666",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                          }}
                          onMouseEnter={(e) => (e.target.style.color = "#222")}
                          onMouseLeave={(e) => (e.target.style.color = "#666")}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          style={{
                            color: "#666",
                            fontSize: "0.9rem",
                            margin: 0,
                          }}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                style={{
                  marginTop: "2rem",
                  textAlign: "center",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    marginBottom: "1rem",
                    color: "#222",
                    textAlign: "center",
                  }}
                >
                  Follow Me
                </h4>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.title}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: social.color,
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    >
                      <social.icon size={18} style={{ color: "white" }} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
