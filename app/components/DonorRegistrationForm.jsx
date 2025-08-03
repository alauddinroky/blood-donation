// components/DonorRegistrationForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for form validation
const registrationSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contactNumber: z
    .string()
    .regex(/^(\+8801|\+88)?(01)?[3-9]{1}[0-9]{8}$/, {
      message: "Invalid contact number. Must be an 11-digit Bangladeshi number.",
    }),
  fullAddress: z.string().min(1, { message: "Full Address is required" }),
  bloodGroup: z.enum(
    ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    { message: "Please select a valid blood group" }
  ),
});

const DonorRegistrationForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);
    try {
      const response = await fetch('/api/register-donor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to register donor');
      }

      setSubmissionStatus("success");
      reset(); // Reset form fields on success
      console.log('Registration successful:', data);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111111] p-4">
      <div className="w-full max-w-2xl bg-[#1A1A1A] p-8 rounded-lg shadow-lg border border-[#333333]">
        <h2 className="text-3xl font-bold text-[#E63946] text-center mb-2">
          Join as a Blood Donor
        </h2>
        <p className="text-center text-[#B0B0B0] mb-8">
          Your single act of kindness can save a life.
        </p>

        {submissionStatus === "success" && (
          <div className="bg-green-600 p-4 rounded-md mb-6 text-center text-white font-semibold">
            Thank you! You have successfully registered as a donor.
          </div>
        )}

        {submissionStatus === "error" && (
          <div className="bg-[#E63946] p-4 rounded-md mb-6 text-center text-white font-semibold">
            Oops! Something went wrong. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-[#FFFFFF] text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName")}
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.fullName ? "border-[#E63946]" : "border-[#333333]"
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          
          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-[#FFFFFF] text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.email ? "border-[#E63946]" : "border-[#333333]"
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" className="block text-[#FFFFFF] text-sm font-semibold mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              {...register("contactNumber")}
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.contactNumber ? "border-[#E63946]" : "border-[#333333]"
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200`}
              placeholder="+88017xxxxxxxx"
            />
            {errors.contactNumber && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.contactNumber.message}
              </p>
            )}
          </div>

          {/* Full Address */}
          <div>
            <label htmlFor="fullAddress" className="block text-[#FFFFFF] text-sm font-semibold mb-2">
              Full Address
            </label>
            <textarea
              id="fullAddress"
              rows="4"
              {...register("fullAddress")}
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.fullAddress ? "border-[#E63946]" : "border-[#333333]"
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200 resize-none`}
              placeholder="Enter your complete address..."
            ></textarea>
            {errors.fullAddress && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.fullAddress.message}
              </p>
            )}
          </div>

          {/* Blood Group Dropdown */}
          <div>
            <label htmlFor="bloodGroup" className="block text-[#FFFFFF] text-sm font-semibold mb-2">
              Blood Group
            </label>
            <div className="relative">
              <select
                id="bloodGroup"
                {...register("bloodGroup")}
                className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                  errors.bloodGroup ? "border-[#E63946]" : "border-[#333333]"
                } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200 appearance-none`}
              >
                <option value="">Select your blood group</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#B0B0B0]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
              </div>
            </div>
            {errors.bloodGroup && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.bloodGroup.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full p-3 rounded-md font-semibold transition duration-300 ${
              isValid && !isSubmitting
                ? "bg-[#E63946] text-[#FFFFFF] hover:bg-[#d12e3e] shadow-lg"
                : "bg-[#333333] text-[#B0B0B0] cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Register Now"}
          </button>
        </form>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => router.push('/')}
            className="text-[#E63946] text-sm font-semibold hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorRegistrationForm;