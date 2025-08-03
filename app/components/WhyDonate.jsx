'use client'
import { motion } from 'framer-motion';
import { FaHeart, FaHospitalUser, FaHandsHelping } from 'react-icons/fa';

const WhyDonate = () => {
  const reasons = [
    {
      icon: <FaHeart className="text-5xl text-[#FFFFFF]" />,
      title: 'Help Save Lives',
      description: 'Your donation can be a lifeline for accident victims, surgery patients, and those battling illnesses.',
    },
    {
      icon: <FaHospitalUser className="text-5xl text-[#FFFFFF]" />,
      title: 'Health Benefits',
      description: 'Donating blood can help maintain healthy iron levels and reduce the risk of certain health issues.',
    },
    {
      icon: <FaHandsHelping className="text-5xl text-[#FFFFFF]" />,
      title: 'Community Support',
      description: 'Be a vital part of your community by contributing to a shared pool of life-saving resources.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="bg-[#1A1A1A] py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#E63946] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Why Donate Blood?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-[#111111] p-8 rounded-lg shadow-lg text-center border border-[#333333] hover:border-[#E63946] transition duration-300 transform hover:scale-105"
              variants={cardVariants}
            >
              <div className="mb-6 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[#E63946] mb-4">{reason.title}</h3>
              <p className="text-[#B0B0B0]">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyDonate;