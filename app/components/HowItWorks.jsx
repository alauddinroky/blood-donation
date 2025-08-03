'use client'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Register',
      description: 'Sign up online or at a donation center to get started with your life-saving journey.',
    },
    {
      number: 2,
      title: 'Get Tested',
      description: 'A quick health screening ensures you are eligible and healthy to donate blood safely.',
    },
    {
      number: 3,
      title: 'Donate',
      description: 'The actual donation process is simple, safe, and typically takes less than an hour.',
    },
    {
      number: 4,
      title: 'Save Lives',
      description: 'Your generous donation directly contributes to saving up to three lives in need.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 8px 24px rgba(230, 57, 70, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="py-16 px-6 bg-[#111]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#E63946] text-center mb-12"
          variants={stepVariants}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-[#111] rounded-lg"
              variants={stepVariants}
              whileHover="hover"
            >
              <div className="relative mb-6">
                <motion.div
                  className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center text-3xl font-bold text-[#FFFFFF] shadow-lg"
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  {step.number}
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[calc(100%+1rem)] w-24 h-1 bg-[#333333] transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-[#E63946] mb-3">{step.title}</h3>
              <p className="text-[#B0B0B0]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;