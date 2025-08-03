// components/ContactForm.jsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for form validation
const contactSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^\+?[0-9]{10,14}$/, { message: "Invalid phone number format" }), // Matches a number with 10-14 digits, optional leading +
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Simulate API call
    console.log("Contact form data:", data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      // In a real app, you would fetch to your API here:
      // const response = await fetch('/api/contact', { ... });
      // if (!response.ok) throw new Error('Failed to send message');
      setSubmissionStatus("success");
      reset(); // Reset form fields on success
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
        <h2 className="text-3xl font-bold text-[#E63946] text-center mb-8">
          Get in Touch
        </h2>

        {submissionStatus === "success" && (
          <div className="bg-green-600 p-4 rounded-md mb-6 text-center text-white font-semibold">
            Thank you! Your message has been sent successfully.
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
              placeholder="Your Full Name"
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

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-[#FFFFFF] text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.phone ? "border-[#E63946]" : "border-[#333333]"
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200`}
              placeholder="+88017XXXXXXXX"
            />
            {errors.phone && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-[#FFFFFF] text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              {...register("message")}
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.message ? "border-[#E63946]" : "border-[#333333]"
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200 resize-none`}
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.message.message}
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
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;