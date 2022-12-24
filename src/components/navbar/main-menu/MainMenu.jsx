import { React, useState } from 'react';
import { motion } from 'framer-motion';
import SubMenu from '../sub-menu/SubMenu.jsx';
import subData from '../../../data/menu.services.json';
import generalData from '../../../data/menu.account.json';
import UpdateButton from '../../ui/buttons/UpdateApiButton.jsx';
import { Link } from 'react-router-dom';


function MainMenu () {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenSub, setIsOpenSub] = useState(false);
  const [isOpenGeneral, setIsOpenGeneral] = useState(false);
  const [subCategories, setSubCategories] = useState(subData);
  const [generalCategories, setGeneralCategories] = useState(generalData);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        type: 'spring',
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
        className='flex-row group-first:border-b-2 content-center justify-center top-[100px] right-0 p-7 fixed w-80 m-a '
      >

        <Link Link to={"/"}>
          <motion.li
            itemVariants={itemVariants}
            className='text-center text-rick&morty-outer-space-crayola font-bold hover:text-black '
          >
            Home
          </motion.li>
        </Link>

        <SubMenu
          itemVariants={itemVariants}
          isOpen={isOpen}
          subIsOpen={isOpenGeneral}
          setIsOpenList={setIsOpenGeneral}
          name_en={'Account'}
          categories={generalCategories}
          className='mt-5 '
        />

        <SubMenu
          itemVariants={itemVariants}
          isOpen={isOpen}
          subIsOpen={isOpenSub}
          setIsOpenList={setIsOpenSub}
          name_en={'Services'}
          categories={subCategories}
          className='mt-5 '
        />




        <div className="flex flex-col mt-7 p-0 text-center">

          <UpdateButton
            itemVariants={itemVariants}           
            name_en='Update Api'
            className='bg-black hover:bg-rick&morty-outer-space-crayola rounded py-2 px-4 text-rick&morty-june-bud  self-center  '
          />
        </div>

      </motion.ul>
    </>
  );
}

export default MainMenu;
