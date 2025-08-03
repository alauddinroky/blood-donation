// components/Testimonials.jsx
'use client'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Swiper modules
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Donating blood through LifeBlood was so easy and rewarding. Knowing I made a difference is a great feeling!",
      donor: "Sarah J.",
    },
    {
      quote: "The team at LifeBlood made the process comfortable and efficient. I highly recommend everyone to donate.",
      donor: "Mark T.",
    },
    {
      quote: "As a recipient, I can't express enough gratitude. Blood donors are true heroes. Thank you, LifeBlood!",
      donor: "Emily R.",
    },
    {
      quote: "As a recipient, I can't express enough gratitude. Blood donors are true heroes. Thank you, LifeBlood!",
      donor: "Emily R.",
    },
    {
      quote: "As a recipient, I can't express enough gratitude. Blood donors are true heroes. Thank you, LifeBlood!",
      donor: "Emily R.",
    },
    {
      quote: "As a recipient, I can't express enough gratitude. Blood donors are true heroes. Thank you, LifeBlood!",
      donor: "Emily R.",
    },
    // Add more testimonials as needed for scalability
  ];

  // Animation variants for fade-in effect
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section
      className="bg-[#111111] py-16 px-6 relative"
      style={{
        // Background with texture image, red gradient, and fallback noise
        backgroundImage: `url('/texture.png'), linear-gradient(rgba(230, 57, 70, 0.05), rgba(230, 57, 70, 0.05)), url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')`,
        backgroundSize: 'cover, cover, 200px 200px',
        backgroundBlendMode: 'overlay',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E63946] text-center mb-12 tracking-tight">
          Community Impact
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Enable Swiper modules
          spaceBetween={16} // Space between slides
          slidesPerView={3} // Show 3 slides on desktop
          loop={true} // Infinite loop
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay every 3s
          navigation // Enable navigation arrows
          pagination={{ clickable: true }} // Enable clickable pagination dots
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 8 }, // Mobile
            768: { slidesPerView: 2, spaceBetween: 12 }, // Tablet
            1024: { slidesPerView: 3, spaceBetween: 16 }, // Desktop
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="px-2" // Padding for slide items
                initial="hidden"
                animate="visible"
                custom={index}
                variants={cardVariants}
                aria-label={`Testimonial from ${testimonial.donor}`}
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-md text-[#111111] border border-[#DDDDDD] hover:border-[#E63946] transition-all duration-300 transform hover:shadow-lg hover:scale-105">
                  {/* Quote Icons */}
                  <FaQuoteLeft className="absolute top-4 left-4 text-[#E63946] text-3xl opacity-30 transition-opacity duration-300 group-hover:opacity-50" />
                  {/* <FaQuoteRight className="absolute bottom-4 right-4 text-[#E63946] text-3xl opacity-30 transition-opacity duration-300 group-hover:opacity-50" /> */}
                  
                  {/* Quote Text */}
                  <p className="text-lg md:text-xl italic mb-6 mt-8 font-medium leading-relaxed text-gray-800">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Donor Name */}
                  <p className="text-right font-semibold text-[#E63946] text-base md:text-lg">
                    — {testimonial.donor}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;