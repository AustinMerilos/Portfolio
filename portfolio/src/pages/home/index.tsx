import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { AboutSection } from "../../components/about";
import { ProjectSection } from "../../components/projects";
import EmailSection from "../../components/email";
import ExperienceSection from "../../components/experience";

const sectionVariant = {
  visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -50, x: 100, scale: 0.8 },
};

const AnimatedComponent = ({ children }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.section>
  );
};

export default function App() {
  return (
    <div>
      <Header />

      <AnimatedComponent>
        <AboutSection />
      </AnimatedComponent>

      <AnimatedComponent>
        <ExperienceSection
          experiences={[
            {
              title: "Experience 1",
              content: ["Paragraph 1", "Paragraph 2"],
              date: "2019 - 2020",
              name: "John Doe",
              image: "path/to/john-doe-image.jpg",
              skills: ["React", "JavaScript", "CSS"],
            },
            {
              title: "Experience 2",
              content: ["Paragraph 1", "Paragraph 2"],
              date: "2019 - 2020",
              name: "Jane Smith",
              image: "path/to/jane-smith-image.jpg",
              skills: ["Node.js", "Express", "MongoDB"],
            },
            {
              title: "Experience 3",
              content: ["Paragraph 1", "Paragraph 2"],
              date: "2019 - 2020",
              name: "Bob Johnson",
              image: "path/to/bob-johnson-image.jpg",
              skills: ["Python", "Django", "PostgreSQL"],
            },
            // Add more experiences as needed
          ]}
        />
      </AnimatedComponent>

      <AnimatedComponent>
        <ProjectSection />
      </AnimatedComponent>
      <AnimatedComponent>
        <EmailSection />
      </AnimatedComponent>

      <AnimatedComponent>
        <Footer />
      </AnimatedComponent>
    </div>
  );
}
