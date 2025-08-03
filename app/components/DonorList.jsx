// components/DonorListPage.jsx
'use client'
import { useState, useMemo } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaSearch, FaFilter } from "react-icons/fa";
const dummyDonors = [
  {
    id: 1,
    name: "Afrin Sultana",
    bloodGroup: "O+",
    location: "Dhaka, Bangladesh",
    phone: "+8801712345678",
    email: "afrin.s@example.com",
    lastDonation: "2024-12-15",
  },
  {
    id: 2,
    name: "Md. Karim Rahman",
    bloodGroup: "A-",
    location: "Chattogram, Bangladesh",
    phone: "+8801812345678",
    email: "karim.r@example.com",
    lastDonation: "2025-01-20",
  },
  {
    id: 3,
    name: "Fatima Akter",
    bloodGroup: "B+",
    location: "Sylhet, Bangladesh",
    phone: "+8801912345678",
    email: "fatima.a@example.com",
    lastDonation: "2025-02-10",
  },
  {
    id: 4,
    name: "Imran Khan",
    bloodGroup: "AB+",
    location: "Khulna, Bangladesh",
    phone: "+8801612345678",
    email: "imran.k@example.com",
    lastDonation: "2025-03-05",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    bloodGroup: "O-",
    location: "Rajshahi, Bangladesh",
    phone: "+8801512345678",
    email: "nusrat.j@example.com",
    lastDonation: "2025-04-01",
  },
  {
    id: 6,
    name: "Alomgir Hossain",
    bloodGroup: "A+",
    location: "Dhaka, Bangladesh",
    phone: "+8801723456789",
    email: "alomgir.h@example.com",
    lastDonation: "2025-04-22",
  },
  {
    id: 7,
    name: "Sabina Yeasmin",
    bloodGroup: "B-",
    location: "Chattogram, Bangladesh",
    phone: "+8801823456789",
    email: "sabina.y@example.com",
    lastDonation: "2025-05-18",
  },
  {
    id: 8,
    name: "Riaz Uddin",
    bloodGroup: "AB-",
    location: "Sylhet, Bangladesh",
    phone: "+8801923456789",
    email: "riaz.u@example.com",
    lastDonation: "2025-06-01",
  },
  {
    id: 9,
    name: "Farah Islam",
    bloodGroup: "O+",
    location: "Dhaka, Bangladesh",
    phone: "+8801734567890",
    email: "farah.i@example.com",
    lastDonation: "2025-06-25",
  },
  {
    id: 10,
    name: "Kamrul Hasan",
    bloodGroup: "A+",
    location: "Khulna, Bangladesh",
    phone: "+8801623456789",
    email: "kamrul.h@example.com",
    lastDonation: "2025-07-10",
  },
];

const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];


const DonorList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBloodGroup, setFilterBloodGroup] = useState("All");
  const [filterLocation, setFilterLocation] = useState("");

  const filteredDonors = useMemo(() => {
    let currentDonors = dummyDonors;

    // Filter by search term (name, email, phone, location)
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentDonors = currentDonors.filter(
        (donor) =>
          donor.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          donor.email.toLowerCase().includes(lowerCaseSearchTerm) ||
          donor.phone.includes(lowerCaseSearchTerm) ||
          donor.location.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    // Filter by blood group
    if (filterBloodGroup !== "All") {
      currentDonors = currentDonors.filter(
        (donor) => donor.bloodGroup === filterBloodGroup
      );
    }

    // Filter by location
    if (filterLocation) {
      const lowerCaseLocation = filterLocation.toLowerCase();
      currentDonors = currentDonors.filter((donor) =>
        donor.location.toLowerCase().includes(lowerCaseLocation)
      );
    }

    return currentDonors;
  }, [searchTerm, filterBloodGroup, filterLocation]);

  return (
    <div className="bg-[#111111] text-[#FFFFFF] min-h-screen">

      <div className="container mx-auto px-6 py-12 mt-6">
        {/* Section Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#E63946] text-center mb-12">
          Meet Our Lifesavers
        </h1>

        {/* Search and Filter Bar */}
        <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg mb-12 border border-[#333333] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0]" />
            <input
              type="text"
              placeholder="Search by name, contact, location..."
              className="w-full p-3 pl-10 rounded-md bg-[#222222] text-[#FFFFFF] border border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0]" />
            <select
              className="w-full p-3 pl-10 rounded-md bg-[#222222] text-[#FFFFFF] border border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200 appearance-none"
              value={filterBloodGroup}
              onChange={(e) => setFilterBloodGroup(e.target.value)}
            >
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
             {/* Custom arrow for select dropdown */}
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#B0B0B0]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
            </div>
          </div>

          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0]" />
            <input
              type="text"
              placeholder="Filter by location (e.g., Dhaka)"
              className="w-full p-3 pl-10 rounded-md bg-[#222222] text-[#FFFFFF] border border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
            />
          </div>
        </div>


        {/* Donor Cards Grid */}
        {filteredDonors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDonors.map((donor) => (
              <div
                key={donor.id}
                className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border border-[#333333] transform hover:scale-105 hover:border-[#E63946] transition duration-300 ease-in-out"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#FFFFFF]">
                    {donor.name}
                  </h3>
                  <span className="bg-[#E63946] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {donor.bloodGroup}
                  </span>
                </div>
                <p className="text-[#B0B0B0] text-sm flex items-center mb-2">
                  <FaMapMarkerAlt className="mr-2 text-[#E63946]" />
                  {donor.location}
                </p>
                <p className="text-[#B0B0B0] text-sm flex items-center mb-2">
                  <FaPhone className="mr-2 text-[#E63946]" />
                  <a
                    href={`tel:${donor.phone}`}
                    className="hover:underline text-white"
                  >
                    {donor.phone}
                  </a>
                </p>
                <p className="text-[#B0B0B0] text-sm flex items-center mb-4">
                  <FaEnvelope className="mr-2 text-[#E63946]" />
                  <a
                    href={`mailto:${donor.email}`}
                    className="hover:underline text-white"
                  >
                    {donor.email}
                  </a>
                </p>
                <p className="text-[#808080] text-xs flex items-center border-t border-[#333333] pt-3 mt-3">
                  <FaCalendarAlt className="mr-2 text-[#E63946]" />
                  Last donated: {donor.lastDonation}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-[#B0B0B0] py-10">
            No donors found matching your criteria.
          </p>
        )}
      </div>

    </div>
  );
};

export default DonorList;