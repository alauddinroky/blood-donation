'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UpcomingCamps = () => {
  const camps = [
    {
      name: 'City General Hospital Drive',
      date: 'Aug 15, 2025',
      location: '123 Main St, Anytown',
    },
    {
      name: 'Community Health Fair',
      date: 'Sep 01, 2025',
      location: 'Community Center, Anytown',
    },
    {
      name: 'University Campus Blood Drive',
      date: 'Sep 20, 2025',
      location: 'University Auditorium, Anytown',
    },
    {
      name: 'Downtown Medical Clinic',
      date: 'Oct 05, 2025',
      location: '456 Oak Ave, Anytown',
    },
  ];

  return (
    <section className="bg-[#111111] py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E63946] text-center mb-12">Upcoming Donation Camps</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {camps.map((camp, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg border border-[#333333] hover:border-[#E63946] transition duration-300 transform hover:scale-102">
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">{camp.name}</h3>
                <p className="text-[#B0B0B0] mb-1">
                  <span className="font-medium text-[#E63946]">Date:</span> {camp.date}
                </p>
                <p className="text-[#B0B0B0] mb-4">
                  <span className="font-medium text-[#E63946]">Location:</span> {camp.location}
                </p>
                <button className="bg-[#E63946] text-[#FFFFFF] px-5 py-2 rounded-full font-semibold hover:bg-[#d12e3e] transition duration-300">
                  Register
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #E63946;
          transition: opacity 0.3s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 0.8;
        }
        .swiper-pagination-bullet {
          background: #B0B0B0;
        }
        .swiper-pagination-bullet-active {
          background: #E63946;
        }
          .swiper{
          padding: 8px;
          }
      `}</style>
    </section>
  );
};

export default UpcomingCamps;