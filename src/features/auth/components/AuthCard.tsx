"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SocialLogin from "./SocialLogin";
import type { AuthView } from "../types";

export default function AuthCard() {
  const [view, setView] = useState<AuthView>("login");

  if (view === "forgot-password") {
    return (
      <div className="w-full w-full">
        <ForgotPasswordForm onBack={() => setView("login")} />
      </div>
    );
  }

  return (
    <div className="w-full w-full">
      {/* Mobile Logo */}
      <div className="flex items-center justify-center gap-2.5 mb-8 lg:hidden">
        <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-black text-xl">S</span>
        </div>
        <span className="text-2xl font-black text-gray-900">ShopVN</span>
      </div>

      {/* Welcome text */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {view === "login" ? "Chào mừng trở lại! 👋" : "Tạo tài khoản mới"}
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {view === "login"
            ? "Đăng nhập để tiếp tục mua sắm"
            : "Đăng ký để bắt đầu trải nghiệm mua sắm"}
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
        <button
          onClick={() => setView("login")}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
            view === "login"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Đăng nhập
        </button>
        <button
          onClick={() => setView("register")}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
            view === "register"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Đăng ký
        </button>
      </div>

      {/* Form */}
      {view === "login" ? (
        <LoginForm onForgotPassword={() => setView("forgot-password")} />
      ) : (
        <RegisterForm />
      )}

      {/* Divider */}
      <div className="my-5 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-3 text-gray-400 font-medium uppercase tracking-wider">
            hoặc tiếp tục với
          </span>
        </div>
      </div>

      {/* Social */}
      <SocialLogin />

      {/* Footer */}
      <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
        Bằng cách tiếp tục, bạn đồng ý với{" "}
        <a href="#" className="text-orange-500 hover:underline">
          Điều khoản dịch vụ
        </a>{" "}
        &{" "}
        <a href="#" className="text-orange-500 hover:underline">
          Chính sách bảo mật
        </a>
      </p>
    </div>
  );
}
