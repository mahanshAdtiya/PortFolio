import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { navLinks } from "../constants";
import { styles } from "../utils/styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if ((prevScrollPos > currentScrollPos) !== visible) {
        setVisible(prevScrollPos > currentScrollPos);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={fadeIn("", "", 0.1, 1)}
      className={`${styles.paddingX} w-full flex items-center py-5 transition-all fixed top-0 z-20 ${
        visible ? "translate-y-0" : "-translate-y-28"
      } ${scrolled ? "bg-black bg-opacity-50" : "bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p
            className="text-white text-3xl font-light cursor-pointer flex font-montserrat"
            style={{ fontSize: "18px" }}
          >
            Mahansh &nbsp;
            <span className="sm:block hidden"> | FullStack Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden lg:flex flex-row gap-10 items-center pl-24">
          {navLinks.map((nav, index) =>
            nav.title !== "resume" ? (
              <motion.li
                key={nav.id}
                initial="hidden"
                animate="show"
                variants={fadeIn("", "tween", 0.1 * (index + 1), 0.5)}
                className={`${
                  active === nav.title ? "text-white" : "text-red-500"
                } hover:text-white text-[18px] font-small cursor-pointer transition-all`}
                onClick={() => setActive(nav.title)}
              >
                <div className="group">
                  <a href={`#${nav.id}`} className="group-hover:opacity-100">
                    <span className="text-white opacity-100 group-hover:text-red-500">
                      0{index + 1}.{" "}
                    </span>
                    {nav.title}
                  </a>
                </div>
              </motion.li>
            ) : (
              <motion.li
                key="resume"
                initial="hidden"
                animate="show"
                variants={fadeIn("", "tween", 0.1 * (index + 1), 0.5)}
              >
                <a
                  href="mahansh_resume.pdf"
                  download="Mahansh_Aditya_Resume.pdf"
                  className="text-red-500 border-2 border-red-500 rounded-lg px-2 py-1 hover:text-white hover:cursor-pointer transition-all"
                >
                  Resume
                </a>
              </motion.li>
            )
          )}
        </ul>

        <div className="lg:hidden flex">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {toggle && (
          <div className="absolute top-16 right-0 mx-4 my-2 p-6 rounded-xl bg-[#212529] bg-opacity-90 min-w-[140px] z-10">
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) =>
                nav.title !== "resume" ? (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-red-500"
                    } hover:text-white text-[16px] font-small cursor-pointer`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ) : (
                  <li key="resume">
                    <a
                      href="mahansh_resume.pdf"
                      download="Mahansh_Aditya_Resume.pdf"
                      className="text-red-500 border-2 border-red-500 rounded-lg px-2 py-1 hover:text-white hover:cursor-pointer"
                    >
                      Resume
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}        
      </div>
    </motion.nav>
  );
};

export default Navbar;
