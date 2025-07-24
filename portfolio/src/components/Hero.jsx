import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/JaellyBean", label: "GitHub" },
    { icon: Mail, href: "mailto:Solarisrex@pm.me", label: "Email" },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fafafa",
        color: "#333",
        position: "relative",
        textAlign: "center",
        width: "100%",
        padding: "0 clamp(1rem, 4vw, 2rem)",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
          <motion.h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 300,
              marginBottom: "1rem",
              color: "#222",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Jae Fisher
          </motion.h1>

          <motion.h2
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              fontWeight: 400,
              color: "#666",
              marginBottom: "2rem",
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Software Developer
          </motion.h2>

          <motion.p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
              color: "#888",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              lineHeight: 1.6,
              fontWeight: 300,
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Building thoughtful digital experiences with clean code and modern
            technologies.
          </motion.p>

          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "3rem",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("about")
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
              View My Work
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#666",
                  transition: "color 0.2s ease",
                  textAlign: "center",
                }}
                whileHover={{ color: "#222" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
