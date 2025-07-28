// components/LoginForm.jsx
"use client"; // This directive marks the component for client-side rendering

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // Zod works perfectly with plain JavaScript

// Define the validation schema using Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[0-9]/, { message: "Password must contain a number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain a symbol" }),
  rememberMe: z.boolean().optional(),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange", // Validate inputs as they change for instant feedback
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("Login Data:", data); // Log form data to console
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
    alert("Login attempt (check console for data)"); // Show a basic alert
    setIsSubmitting(false);
    // In a real application, you would send this data to your backend for authentication
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111111] p-4">
      <div className="w-full max-w-md bg-[#1A1A1A] p-8 rounded-lg shadow-lg border border-[#333333]">
        <h2 className="text-3xl font-bold text-[#E63946] text-center mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              {...register("email")} // Register input with React Hook Form
              className={`w-full p-3 rounded-md bg-[#222222] text-[#FFFFFF] border ${
                errors.email ? "border-[#E63946]" : "border-[#333333]" // Red border for errors
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
                className="h-4 w-4 text-[#E63946] focus:ring-[#E63946] border-[#333333] rounded bg-[#222222]"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-[#B0B0B0]"
              >
                Remember Me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-[#E63946] hover:underline transition duration-200"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            // Button is disabled if form is not valid or if it's currently submitting
            disabled={!isValid || isSubmitting}
            className={`w-full p-3 rounded-md font-semibold transition duration-300 ${
              isValid && !isSubmitting
                ? "bg-[#E63946] text-[#FFFFFF] hover:bg-[#d12e3e] shadow-lg" // Enabled state styles
                : "bg-[#333333] text-[#B0B0B0] cursor-not-allowed" // Disabled state styles
            }`}
          >
            {isSubmitting ? "Logging In..." : "Login"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[#B0B0B0]">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-[#E63946] hover:underline font-semibold transition duration-200"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;