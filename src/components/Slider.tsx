// src/components/HeroSlider.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner4.jpg";

const slides = [
  {
    image: banner1,
    heading: "Empowering the Next Generation",
    buttonText: "Learn More",
    route: "/about",
  },
  {
    image: banner2,
    heading: "Be the Change You Want to See",
    buttonText: "Get Involved",
    route: "/get-involved",
  },
  {
    image: banner3,
    heading: "Every Donation Counts",
    buttonText: "Donate Now",
    route: "/donate",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const { image, heading, buttonText, route } = slides[current];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={image}
          src={image}
          alt={heading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      <motion.div
        key={heading}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">{heading}</h2>
        <button
          onClick={() => navigate(route)}
          className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          {buttonText}
        </button>
      </motion.div>
    </div>
  );
};

export default Slider;
