import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function SubMenu({
  isOpen,
  subIsOpen,
  setIsOpenList,
  categories,
  name_en,
  itemVariants,
  className
}) {
  const categoryListAnimation = {
    whileTap: { scale: 0.95 },
    initial: { opacity: 0, y: 20, },
    animate: { opacity: 1, y: 0, color:'#193840' },
    exit: { opacity: 0, y: { stiffness: 1000, velocity: -100 }, color:'transparent', transition:{duration:0} },
    className: "text-center   border-b-2 font-normal text-neutral-600 ",
    itemVariants:{itemVariants},
    whileHover:{ color: "black" }
  };


  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <motion.li
      className={`text-center font-bold  flex content-center ${className}`}
      itemVariants={itemVariants}
      transition={{duration:0}}
      whileTap={{ scale: 0.97 }}
      onClick={() => setIsOpenList(!subIsOpen)}
    >
      <motion.ul
        itemVariants={itemVariants}
        initial={false}
        key={"General Menu"}
        animate={isOpen ? "open" : "closed"}
        whileTap={{ scale: 0.97 }}
        whileHover={{ color: "#193840" }}
        className="text-center   font-bold  flex-row w-full  content-center "
      >
        {name_en}

        <AnimatePresence>
          {isOpen &&
            subIsOpen &&
            categories.map((category) => (
              <motion.li 
              {...categoryListAnimation}
              className={"font-normal text-neutral-600 mt-5 flex-row w-full content-center justify-center"}
              >
              <p className="text-center">{category.name_en}</p>
              </motion.li>
            ))}
        </AnimatePresence>
      </motion.ul>
    </motion.li>
  );
}

export default SubMenu;
