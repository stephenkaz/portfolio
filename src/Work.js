import "./css/Work.css";
import workJson from "./api/workData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Work = () => {
  // need to try to make useEffect a component

  const { ref, inView } = useInView();
  const animationOne = useAnimation();
  const animationTwo = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if (inView) {
      animationOne.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      animationTwo.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.3,
        },
      });
    } else {
      animationOne.start({ x: "-100vw" });
      animationTwo.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <>
      <div className="workSection" ref={ref}>
        <motion.h1 animate={animationOne}>Work</motion.h1>
        <div className="projects__container">
          {workJson?.map(({ img, title, alt, href, key }) => {
            return (
              <motion.div animate={animationTwo} key={key} className="example">
                <img src={img} alt={alt} />

                <p>
                  <a href={href}>{title}</a>
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Work;
