// components/Footer.jsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#FFFFFF] py-12 px-6 border-t border-[#333333]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-[#E63946] mb-4">About LifeBlood</h3>
          <p className="text-[#B0B0B0] text-sm">
            LifeBlood is dedicated to connecting blood donors with those in need, fostering a community of life-savers.
            Your contribution makes a world of difference.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#E63946] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-[#B0B0B0] hover:text-[#E63946] transition duration-300 text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-[#B0B0B0] hover:text-[#E63946] transition duration-300 text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#donate" className="text-[#B0B0B0] hover:text-[#E63946] transition duration-300 text-sm">
                How to Donate
              </Link>
            </li>
            <li>
              <Link href="#camps" className="text-[#B0B0B0] hover:text-[#E63946] transition duration-300 text-sm">
                Donation Camps
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#E63946] mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-[#B0B0B0]">Email: info@lifeblood.org</li>
            <li className="text-[#B0B0B0]">Phone: +1 (123) 456-7890</li>
            <li className="text-[#B0B0B0]">Address: 789 Blood St, Anytown, USA</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#E63946] mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-[#FFFFFF] hover:text-[#E63946] transition duration-300">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-[#FFFFFF] hover:text-[#E63946] transition duration-300">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-[#FFFFFF] hover:text-[#E63946] transition duration-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-[#FFFFFF] hover:text-[#E63946] transition duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-[#B0B0B0] mt-12 border-t border-[#333333] pt-6">
        &copy; {new Date().getFullYear()} LifeBlood. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;