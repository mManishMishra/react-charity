// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
// import logo from "../assets/LOGO.jpeg";
// import logo from "../assets/logo-main.png";
import logoSide from "../assets/logo-second.png";
import SearchBox from "./Searchbox";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearchToggle = () => {
    if (showSearch) {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  };

  const navLinks = [
    { name: "Our Impact", path: "/our-impact" },
    { name: "Our Work", path: "/our-work" },
    { name: "About Us", path: "/about-us" },
    { name: "Stories", path: "/stories" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--brand-bg)] shadow-md transition-colors duration-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        {/* Logo */}
        {/* <Link to="/" className="text-2xl font-bold text-orange-600 glow-card">
          <img
            src={logo}
            alt="Charity Logo"
            className="h-15 w-auto rounded-[10px] object-contain dark:invert"
          />
          <img
            src={logoSide}
            alt="Charity Logo"
            className="h-15 w-auto rounded-[10px] object-contain dark:invert"
          />
        </Link> */}
        <Link to="/" className="flex items-center gap-2 glow-card">
          <img
            src={logoSide}
            alt="Side Logo"
            className="h-18 w-auto rounded-[10px] object-contain dark:invert"
          />
          {/* <img
            src={logo}
            alt="Main Logo"
            className="h-12 w-auto rounded-[10px] object-contain dark:invert"
          /> */}
          <span className="text-2l text-center font-bold  text-orange-600 dark:text-orange-400">
            QUALIGIATE
            <p>Global Education Tutors Foundation EST-2022</p>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover-fx">
                {link.name}
              </Link>
            </li>
          ))}
          {/* {navLinks.map((link) => (
            <li key={link.name}>
              {link.scroll ? (
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="hover-fx cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink to={link.path} className="hover-fx">
                  {link.name}
                </RouterLink>
              )}
            </li>
          ))} */}

          <li>
            <button
              onClick={handleSearchToggle}
              className="p-2 rounded-full hover-fx clickable glow-card-red"
            >
              <Search size={22} />
            </button>
          </li>
          <li>
            <Link
              to="/donate"
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition font-semibold"
            >
              Donate
            </Link>
          </li>
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-orange-400 transition clickable"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button> */}
          <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-full transition"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Pulse Glow */}
            <motion.div
              className="absolute inset-0 rounded-full z-[-1]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.2, 1],
                boxShadow:
                  theme === "dark"
                    ? "0 0 15px 4px rgba(255, 200, 0, 0.5)" // golden sun glow
                    : "0 0 15px 4px rgba(173, 216, 230, 0.3)", // moonlight blue glow
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            {/* Icon swap with animation */}
            {theme === "dark" ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Sun size={22} className="text-yellow-400" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Moon size={22} className="text-blue-500" />
              </motion.div>
            )}
          </motion.button>
        </ul>

        {/* Search Box Component */}
        <SearchBox show={showSearch} onClose={() => setShowSearch(false)} />

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-full transition"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Pulse Glow */}
            <motion.div
              className="absolute inset-0 rounded-full z-[-1]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.2, 1],
                boxShadow:
                  theme === "dark"
                    ? "0 0 15px 4px rgba(255, 200, 0, 0.5)" // golden sun glow
                    : "0 0 15px 4px rgba(173, 216, 230, 0.3)", // moonlight blue glow
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            {/* Icon swap with animation */}
            {theme === "dark" ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Sun size={22} className="text-yellow-400" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Moon size={22} className="text-blue-500" />
              </motion.div>
            )}
          </motion.button>
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to="/donate"
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition font-semibold inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
