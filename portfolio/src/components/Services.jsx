import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building modern, responsive web applications using React, TypeScript, and Node.js.",
      icon: Code,
      color: "#007acc",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications using React Native and modern frameworks.",
      icon: Smartphone,
      color: "#34c759",
    },
    {
      id: 3,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development from database design to frontend implementation.",
      icon: Globe,
      color: "#ff6b35",
    },
    {
      id: 4,
      title: "Database Design",
      description:
        "Designing efficient database schemas using SQL and NoSQL databases.",
      icon: Database,
      color: "#8e44ad",
    },
    {
      id: 5,
      title: "Performance Optimization",
      description:
        "Optimizing application performance through code refactoring and best practices.",
      icon: Zap,
      color: "#f39c12",
    },
    {
      id: 6,
      title: "Security Implementation",
      description:
        "Implementing robust security measures including authentication and data protection.",
      icon: Shield,
      color: "#e74c3c",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: "5rem 0",
        backgroundColor: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
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
            Services
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
            Comprehensive software development services to bring your ideas to
            life.
          </motion.p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                style={{
                  backgroundColor: "#fafafa",
                  borderRadius: "8px",
                  padding: "2rem",
                  transition: "all 0.3s ease",
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  transform: "translateY(-4px)",
                  backgroundColor: "white",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                }}
              >
                <motion.div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "8px",
                    backgroundColor: `${service.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                    textAlign: "center",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <service.icon size={24} style={{ color: service.color }} />
                </motion.div>

                <motion.h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    marginBottom: "1rem",
                    color: "#222",
                    letterSpacing: "0.01em",
                    textAlign: "center",
                  }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  style={{
                    color: "#666",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    textAlign: "center",
                  }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={{
              marginTop: "3rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                backgroundColor: "#222",
                color: "white",
                padding: "0.875rem 2rem",
                fontSize: "1rem",
                fontWeight: 400,
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                textAlign: "center",
              }}
              whileHover={{ backgroundColor: "#444" }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
