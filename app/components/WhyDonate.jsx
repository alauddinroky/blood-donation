// components/WhyDonate.jsx
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

  return (
    <section className="bg-[#1A1A1A] py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E63946] text-center mb-12">Why Donate Blood?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#111111] p-8 rounded-lg shadow-lg text-center border border-[#333333] hover:border-[#E63946] transition duration-300 transform hover:scale-105"
            >
              <div className="mb-6 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[#E63946] mb-4">{reason.title}</h3>
              <p className="text-[#B0B0B0]">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDonate;