// components/RegisterForm.jsx
"use client"; // This directive marks the component for client-side rendering

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // Zod works perfectly with plain JavaScript

// Define the validation schema using Zod
const registerSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[0-9]/, { message: "Password must contain a number" })
      .regex(/[^a-zA-Z0-9]/, { message: "Password must contain a symbol" }),
    confirmPassword: z.string().min(1, { message: "Confirm your password" }),
    bloodGroup: z.string().optional(), // This field is optional
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This specifies where the error message will appear
  });

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]; // Options for blood group dropdown

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange", // Validate inputs as they change for instant feedback
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle form submission
 const onSubmit = async (data) => {
  setIsSubmitting(true);
  try {
    // Send name, email, and password (confirmPassword is for frontend validation only)
    const payload = { name: data.name, email: data.email, password: data.password };

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const result = await response.json();
      console.log('Registration successful:', result);
      // Handle successful registration: Redirect to login, show a message, etc.
      alert('Registration successful!');
    } else {
      const errorData = await response.json();
      alert(errorData.message);
    }
  } catch (error) {
    console.error('Registration failed:', error);
    alert('An unexpected error occurred.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111111] p-4">
      <div className="w-full max-w-md bg-[#1A1A1A] p-8 rounded-lg shadow-lg border border-[#333333]">
        <h2 className="text-3xl font-bold text-[#E63946] text-center mb-8">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-[#FFFFFF] text-sm font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.name ? "border-[#E63946]" : "border-[#333333]"
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[#FFFFFF] text-sm font-semibold mb-2"
            >
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

          <div>
            <label
              htmlFor="password"
              className="block text-[#FFFFFF] text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.password ? "border-[#E63946]" : "border-[#333333]"
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-[#FFFFFF] text-sm font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.confirmPassword ? "border-[#E63946]" : "border-[#333333]"
              } focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-[#E63946] text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="bloodGroup"
              className="block text-[#FFFFFF] text-sm font-semibold mb-2"
            >
              Blood Group (Optional)
            </label>
            <select
              id="bloodGroup"
              {...register("bloodGroup")}
              className="w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border border-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E63946] transition duration-200"
            >
              <option value="">Select your blood group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full p-3 rounded-md font-semibold transition duration-300 ${
              isValid && !isSubmitting
                ? "bg-[#E63946] text-[#FFFFFF] hover:bg-[#d12e3e] shadow-lg"
                : "bg-[#333333] text-[#B0B0B0] cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[#B0B0B0]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#E63946] hover:underline font-semibold transition duration-200"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;