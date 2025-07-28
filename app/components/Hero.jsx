'use client'
import { motion } from 'framer-motion';
// components/Hero.jsx
import HeroBg from '../../public/hero-bg.png'
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
    <section
      className="relative h-[60vh] md:h-[90vh] bg-[#1A1A1A] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage:  `url(${HeroBg.src})`, // Placeholder background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.2)', // Subtle overlay
      }}
    >
     
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#E63946] leading-tight mb-4 animate-fadeInUp">
          Save Lives. Donate Blood Today.
        </h1>
        <p className="text-lg md:text-xl text-[#FFFFFF] mb-8 max-w-2xl mx-auto animate-fadeInUp delay-200">
          Your one donation can save up to three lives. Make a profound difference.
        </p>
        <button className="bg-[#E63946] text-[#FFFFFF] px-8 py-4 rounded-full text-xl font-semibold hover:bg-[#d12e3e] transition duration-300 shadow-xl animate-scaleIn">
          Donate Now
        </button>
      </div>
    </section>
    </motion.div>
  );
};

export default Hero;