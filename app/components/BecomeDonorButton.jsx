"use client";

import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const BecomeDonorButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/register-donor");
  };

  const buttonVariants = {
      idle: {
      fill: ["#FFFFFF", "#FF6666", "#FFFFFF"], // Gradual red fill cycle
      scale: [1, 1.1, 1], // Subtle pulse
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 6px 16px rgba(230, 57, 70, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const heartVariants = {
    idle: {
      fill: "#FFFFFF",
      scale: 1,
    },
    hover: {
      fill: "#FF0000",
      scale: 1.2,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.button
      onClick={handleClick}
      className="
        fixed bottom-10 right-6 z-50
        bg-[#E63946] text-white
        py-3 px-6 rounded-full
        flex items-center space-x-2
        text-sm font-semibold cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-opacity-50
      "
      variants={buttonVariants}
    //   initial={false}
      animate="idle"
      whileHover="hover"
    >
      <motion.div variants={heartVariants}>
        <FaHeart className="w-5 h-5" />
      </motion.div>
      <span>Become a Donor</span>
    </motion.button>
  );
};

export default BecomeDonorButton;