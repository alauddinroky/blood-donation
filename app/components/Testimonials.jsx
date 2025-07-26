// components/Testimonials.jsx
import { FaQuoteLeft } from 'react-icons/fa';

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
  ];

  return (
    <section className="bg-[#111111] py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E63946] text-center mb-12">Community Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-8 rounded-lg shadow-lg text-[#111111] relative border border-[#DDDDDD] hover:border-[#E63946] transition duration-300 transform hover:scale-105"
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-[#E63946] text-4xl opacity-20" />
              <p className="text-lg italic mb-6 mt-8">"{testimonial.quote}"</p>
              <p className="text-right font-semibold text-[#E63946]">- {testimonial.donor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;