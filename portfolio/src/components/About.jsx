import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "AWS",
    "Docker",
  ];

  return (
    <section
      id="about"
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
          maxWidth: "800px",
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
            About
          </motion.h2>

          <motion.div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.2rem)",
                color: "#666",
                lineHeight: 1.7,
                marginBottom: "2rem",
                fontWeight: 300,
                textAlign: "center",
              }}
            >
              I'm a software engineer passionate about creating clean, efficient
              solutions. I focus on building user-centered applications that
              solve real problems.
            </p>

            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                color: "#666",
                lineHeight: 1.6,
                marginBottom: "3rem",
                fontWeight: 300,
                textAlign: "center",
              }}
            >
              When I'm not coding, I enjoy exploring new technologies and
              contributing to open-source projects. I believe in writing
              maintainable code and creating experiences that matter.
            </p>
          </motion.div>

          <motion.div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
                fontWeight: 400,
                textAlign: "center",
                marginBottom: "2rem",
                color: "#333",
                letterSpacing: "0.01em",
              }}
            >
              Technologies
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.75rem",
                textAlign: "center",
              }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  style={{
                    backgroundColor: "#f5f5f5",
                    color: "#666",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    display: "inline-block",
                    border: "1px solid #e0e0e0",
                    textAlign: "center",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05,
                  }}
                  whileHover={{
                    backgroundColor: "#f0f0f0",
                    color: "#333",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

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
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
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
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
