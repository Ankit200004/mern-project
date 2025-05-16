import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authService";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
    <div
      className="h-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: "url('/assets/image.png')" }}
    >
      <div className="w-full max-w-md rounded-[2rem]  p-8">
        <div className="text-center mb-8">
          <img
            src="/assets/mainlogo.png"
            alt="NutriBliss Logo"
            className="mx-auto w-30 h-30"
          />
          <h1 className="text-3xl font-bold text-[#3a2e1f] mt-4 font-mono">
            MasalaDibba
          </h1>
          <p className="text-2xl text-[#4b3b2d] mt-1 font-sans font-extrabold">
            Create Your Account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="text-left relative">
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
              className="w-full px-4 py-3 rounded-xl border border-[#e0d7c6] bg-[#fbf7f2] text-[#3a2e1f] placeholder-[#9d8e7c] focus:outline-none focus:ring-2 focus:ring-[#6e704b]"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">Username is required</p>
            )}
          </div>

          <div className="text-left relative">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-xl border border-[#e0d7c6] bg-[#fbf7f2] text-[#3a2e1f] placeholder-[#9d8e7c] focus:outline-none focus:ring-2 focus:ring-[#6e704b]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email is required</p>
            )}
          </div>

          <div className="text-left relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className="w-full px-4 py-3 pr-10 rounded-xl border border-[#e0d7c6] bg-[#fbf7f2] text-[#3a2e1f] placeholder-[#9d8e7c] focus:outline-none focus:ring-2 focus:ring-[#6e704b]"
            />
            <i
              className={`absolute right-4 top-3.5 cursor-pointer text-[#6e704b] ${
                showPassword ? "ri-eye-off-line" : "ri-eye-line"
              }`}
              onClick={() => setShowPassword((v) => !v)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-[#6e704b] text-white font-semibold hover:bg-[#5e6142] transition disabled:opacity-50"
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-[#4b3b2d]">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#6e704b] font-semibold hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
