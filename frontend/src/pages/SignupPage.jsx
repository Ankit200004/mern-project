import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authService";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signup(data);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top banner */}
      <div className="w-full h-52 bg-amber-300 rounded-b-[4rem] shadow-lg flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Join Us Today 🚀
        </h1>
      </div>

      {/* Signup form */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Create An Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Username */}
            <div className="relative">
              <i className="ri-user-line absolute left-3 top-3.5 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  Username is required
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <i className="ri-mail-line absolute left-3 top-3.5 text-gray-400 text-lg" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <i className="ri-lock-line absolute left-3 top-3.5 text-gray-400 text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <i
                className={`${
                  showPassword ? "ri-eye-off-line" : "ri-eye-line"
                } absolute right-3 top-3.5 text-gray-400 text-lg cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-amber-400 text-white font-medium py-2 rounded-md hover:bg-amber-500 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-amber-600 font-medium hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>

      {/* Bottom banner */}
      <div className="w-full h-52 bg-amber-300 rounded-t-[4rem] shadow-inner"></div>
    </div>
  );
};

export default SignupPage;
