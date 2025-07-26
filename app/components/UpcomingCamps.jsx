// components/UpcomingCamps.jsx
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
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 overflow-x-auto pb-4 custom-scrollbar">
          {camps.map((camp, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-80 bg-[#1A1A1A] p-6 rounded-lg shadow-lg border border-[#333333] hover:border-[#E63946] transition duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingCamps;