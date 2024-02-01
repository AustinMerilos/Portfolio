import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const sectionVariant = {
  visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 0, x: 0, scale: 0.8 },
};

export const AnimatedComponent = ({ children }: any) => {
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
