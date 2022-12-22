import { React, useState } from "react";
import { motion } from "framer-motion";
import SubMenu from "../sub-menu/SubMenu.jsx";
import winesData from "../../../data/menu.services.json";
import generalData from "../../../data/menu.account.json";


function MainMenu () {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenWines, setIsOpenWines] = useState(false);
  const [isOpenGeneral, setIsOpenGeneral] = useState(false);
  const [winesCategories, setWinesCategories] = useState(winesData);
  const [generalCategories, setgeneralCategories] = useState(generalData);


  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        staggerChildren: 0.05, 
        staggerDirection: -1,
      }
    }
  };
  
  
  return (
    <>
      <motion.ul
        variants={itemVariants}
        className="flex-row group-first:border-b-2 content-center justify-center top-[100px] right-0 p-7 absolute w-80 "
        whileHover={{ fontWeight: "bolder", color: "black" }}
      >

        <SubMenu
          itemVariants={itemVariants}
          isOpen={isOpen}
          subIsOpen={isOpenGeneral}
          setIsOpenList={setIsOpenGeneral}
          name_en={"Account"}
          categories={generalCategories}
        />

        <SubMenu
          itemVariants={itemVariants}
          isOpen={isOpen}
          subIsOpen={isOpenWines}
          setIsOpenList={setIsOpenWines}
          name_en={"Services"}
          categories={winesCategories}
          className="mt-5"
        />

      </motion.ul>
    </>
  );
}

export default MainMenu;
