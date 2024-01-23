import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { AboutSection } from "../../components/about";
import { ExperienceSection } from "../../components/experience";
import { ProjectSection } from "../../components/projects";

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
        <ExperienceSection />
      </AnimatedComponent>

      <AnimatedComponent>
        <ProjectSection />
      </AnimatedComponent>

      <AnimatedComponent>
        <Footer />
      </AnimatedComponent>
    </div>
  );
}
