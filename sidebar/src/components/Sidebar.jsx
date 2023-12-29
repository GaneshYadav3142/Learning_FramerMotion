import React, { useState } from "react";
import { AnimatePresence, motion, spring } from "framer-motion";
import { FaBars, FaHome, FaSave, FaSearch,FaShoppingCart,FaUser} from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar=()=>setIsOpen(!isOpen)

  const inputAnimation={
    hidden:{
        width:0,
        padding:0,
        opacity:0,
        transition:{
            duration:0.2
        }
    },
    show:{
        width:"160px",
        padding: "5px 15px",
        opacity:1,
        transition:{
            duration:0.2
        }
    }
  }

  const textAnimation={
    hidden:{
        width:0,
        opacity:0,
        transition:{
            duration:0.5
        }
    },
    show:{
        width:"auto",
        opacity:1,
        transition:{
            duration:0.2
        }
    }
  }
  const routes = [
    {
      path: "/",
      name: "Dashboard",
      icons: <FaHome />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icons: <SiSimpleanalytics />,
    },
    {
      path: "/cart",
      name: "Cart",
      icons: <FaShoppingCart />,
    },
    {
      path: "/messages",
      name: "Messages",
      icons: <FaMessage />,
    },
    {
      path: "/users",
      name: "User",
      icons: <FaUser />,
    },
    {
      path: "/saved",
      name: "Saved",
      icons: <FaSave />,
    },
    {
      path: "/filemanager",
      name: "File Manager",
      icons: <GoFileDirectoryFill />,
    },
    {
      path: "/settings",
      name: "Settings",
      icons: <IoSettings />,
    },
  ];
  return (
    <div className="main-container">
      <motion.div animate={{ width: isOpen ? "200px" : "45px",transition:{
        duration:0.5,
        type:"spring",
        damping:15
      } }} className="sidebar">
        <div className="top_section">
            <AnimatePresence>
          {isOpen && 
          (<motion.h1 
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={textAnimation}
          className="logo">
            SideBar
            </motion.h1>)}
            </AnimatePresence>
          <div className="bars" onClick={toggleSidebar}>
           {isOpen ? <IoMdClose/> : <FaBars />}
          </div>
        </div>
        <div className="search">
          <div className="search_icon"  onClick={toggleSidebar}>
            <FaSearch />
          </div>
          <AnimatePresence>
        {isOpen && 
        (<motion.input 
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={inputAnimation} 
        type="text" 
        placeholder="Search Anything..." />)}
        </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((element) => {
            return (
              <NavLink 
              activeClassName="active"
               to={element.path} key={element.name} className="link">
                <div className="icon">{element.icons}</div>
                <AnimatePresence>
                {isOpen && 
                (<motion.div 
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={textAnimation}
                className="link_text">
                    {element.name}
                    </motion.div>)}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
