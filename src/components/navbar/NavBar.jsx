import { useRef, React } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./hook/use-dimensions.jsx";
import { ToggleMenu } from "./toggle-menu/ToggleMenu";
import MainMenu from "./main-menu/MainMenu";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(20px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
  <div className="top-0 z-50 w-screen ">
    <div className="fixed top-0 w-screen bg-black">
      <div className="w-40 ml-8 mt-4 mb-4">
        <img src="/assets/images/Rick_and_Morty_Logo.svg" alt="" className="w-full"/>
      </div>
      <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className=' top-0 right-0 bottom-0 w-80'
    >

    <motion.div className="fixed top-0 right-0 bottom-0 bg-rick&morty-june-bud w-80" variants={sidebar} />
      <MainMenu/>
        <ToggleMenu  toggle={() => toggleOpen()} />
    </motion.nav>
    </div>
    

  </div>
  );
}

export default NavBar