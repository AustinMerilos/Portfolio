import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { AboutSection } from "../../components/about";
import { ProjectSection } from "../../components/projects";
import EmailSection from "../../components/email";
import ExperienceSection from "../../components/experience";
import images from "../../assets";

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
              title: "Swimply",
              content:
                "Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.",

              date: "2020 - 2022",
              link: "Swimply.com",
              image: images.aboutImage,
              skills: ["React", "JavaScript", "CSS", "Reduux", "Flutter"],
              website: "https://www.google.com",
            },
            {
              title: "FreeLance",
              content:
                "Developed the UI and UX eco-system for a conference event platform using modular component structures with JS, SCSS, Gulp on Node.",

              date: "2019 - 2020",
              link: "Jane Smith",
              image: images.aboutImage,
              skills: ["Node.js", "Express", "MongoDB"],
              website: "https://www.google.com",
            },
            {
              title: "UL STEP Dept.",
              content:
                "Top-Rated developer on Upwork specializing in Front-end (React, WordPress) technologies with a 100% job success rate and client satisfaction rating (based on 150+ Jobs, 2500+ hours).",

              date: "2016 - 2020",
              link: "step.louisiana.edu",
              image: images.aboutImage,
              skills: ["Python", "Django", "PostgreSQL"],
              website: "https://www.google.com",
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
