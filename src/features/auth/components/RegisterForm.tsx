"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: implement register logic
    setTimeout(() => setIsLoading(false), 1500);
  };

  const inputClass =
    "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm text-gray-900 placeholder:text-gray-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Full Name */}
      <div className="relative group">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-orange-500 transition-colors" />
        <input type="text" placeholder="Họ và tên" className={inputClass} />
      </div>

      {/* Email / Phone */}
      <div className="relative group">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-orange-500 transition-colors" />
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
          className={inputClass}
        />
      </div>

      {/* Password */}
      <div className="relative group">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-orange-500 transition-colors" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Mật khẩu (ít nhất 8 ký tự)"
          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm text-gray-900 placeholder:text-gray-400"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative group">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-orange-500 transition-colors" />
        <input
          type={showConfirm ? "text" : "password"}
          placeholder="Xác nhận mật khẩu"
          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm text-gray-900 placeholder:text-gray-400"
        />
        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          {showConfirm ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Terms */}
      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 flex-shrink-0"
        />
        <span className="text-xs text-gray-500 leading-relaxed">
          Tôi đồng ý với{" "}
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Điều khoản sử dụng
          </a>{" "}
          và{" "}
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Chính sách bảo mật
          </a>{" "}
          của PeaMall
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading || !agreedToTerms}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-[0.99] mt-1 cursor-pointer disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Tạo tài khoản
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
