// components/AboutPage.jsx
"use client";

import { FaHeartbeat, FaUsers, FaHandHoldingHeart } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "A passionate advocate for blood donation, dedicated to connecting donors with those in need.",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    bio: "Architect of our platform, ensuring a seamless and reliable experience for all users.",
  },
  {
    name: "Alex Johnson",
    role: "Community Manager",
    bio: "The voice of LifeBlood, actively engaging with our donors and organizing events.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#111111] text-[#FFFFFF] min-h-screen">
      {/* Assuming Navbar and Footer are imported in the page.jsx file */}
      <div className="container mx-auto px-6 py-12">
        {/* About Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E63946] mb-4">
            About LifeBlood
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#B0B0B0] max-w-3xl mx-auto">
            We believe every drop counts. Our mission is to bridge the gap between donors and patients, creating a reliable and accessible network of lifesavers.
          </p>
        </div>

        {/* Mission Statement and Values */}
        <div className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg border border-[#333333] mb-16">
          <h2 className="text-2xl font-bold text-[#FFFFFF] text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="flex flex-col items-center p-6 text-center bg-[#222222] rounded-lg border border-[#333333] transition duration-300 hover:border-[#E63946]">
              <FaHeartbeat className="text-5xl text-[#E63946] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Saving Lives</h3>
              <p className="text-sm text-[#B0B0B0]">
                Every action we take is driven by the goal of saving lives and making a tangible impact on health emergencies.
              </p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col items-center p-6 text-center bg-[#222222] rounded-lg border border-[#333333] transition duration-300 hover:border-[#E63946]">
              <FaUsers className="text-5xl text-[#E63946] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Building Community</h3>
              <p className="text-sm text-[#B0B0B0]">
                We foster a strong community of compassionate donors, organizers, and volunteers united by a common cause.
              </p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col items-center p-6 text-center bg-[#222222] rounded-lg border border-[#333333] transition duration-300 hover:border-[#E63946]">
              <FaHandHoldingHeart className="text-5xl text-[#E63946] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
              <p className="text-sm text-[#B0B0B0]">
                Our platform simplifies the process, ensuring that help is always just a few clicks away for those in need.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="text-center mb-16 relative p-8 rounded-xl border-t border-b border-[#333333]">
          <p className="text-2xl italic text-[#B0B0B0] max-w-4xl mx-auto mb-4">
            “Thanks to LifeBlood, my son received the blood he needed in an emergency. The system worked flawlessly, and we found a donor within minutes. I am forever grateful.”
          </p>
          <p className="text-lg font-semibold text-[#E63946]">- A Grateful Parent</p>
        </div>

        {/* Team Section */}
        <div className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg border border-[#333333]">
          <h2 className="text-2xl font-bold text-[#FFFFFF] text-center mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center bg-[#222222] rounded-lg border border-[#333333] transition duration-300 hover:border-[#E63946]"
              >
                <div className="w-24 h-24 bg-gray-600 rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-[#E63946]">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[#E63946] font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-[#B0B0B0]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;