import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "STGMA Apparel",
      description:
        "A resource hub and apparel company dedicated to spreading awareness and breaking the stigmas against mental health. Combines e-commerce functionality with educational content.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "https://stgma.vercel.app",
      githubUrl: "https://github.com/JaellyBean",
    },
    {
      id: 2,
      title: "Bennu",
      description:
        "A comprehensive task management application with features for task creation, editing, deletion, and calendar view to help users stay organized and manage their time effectively.",
      technologies: ["React", "TypeScript", "CSS", "Local Storage"],
      liveUrl: "https://bennu-app.vercel.app",
      githubUrl: "https://github.com/JaellyBean",
    },
  ];

  return (
    <section
      id="projects"
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
            Projects
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
            Selected work showcasing my approach to building meaningful
            applications.
          </motion.p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "2rem",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                style={{
                  backgroundColor: "white",
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
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                }}
              >
                <motion.h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    marginBottom: "1rem",
                    color: "#222",
                    letterSpacing: "0.01em",
                    textAlign: "center",
                  }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  style={{
                    color: "#666",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                    fontSize: "1rem",
                    fontWeight: 300,
                    textAlign: "center",
                  }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                    justifyContent: "center",
                  }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        backgroundColor: "#f5f5f5",
                        color: "#666",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        border: "1px solid #e0e0e0",
                        textAlign: "center",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#222",
                      color: "white",
                      padding: "0.75rem 1.5rem",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      textDecoration: "none",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.2s ease",
                      textAlign: "center",
                    }}
                    whileHover={{ backgroundColor: "#444" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      border: "1px solid #222",
                      color: "#222",
                      padding: "0.75rem 1.5rem",
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      textDecoration: "none",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.2s ease",
                      textAlign: "center",
                    }}
                    whileHover={{ backgroundColor: "#222", color: "white" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={{
              marginTop: "3rem",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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

export default Projects;
