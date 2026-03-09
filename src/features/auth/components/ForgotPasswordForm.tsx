"use client";

import { useState } from "react";
import { ArrowLeft, Mail, CheckCircle, Send } from "lucide-react";

interface ForgotPasswordFormProps {
  onBack: () => void;
}

export default function ForgotPasswordForm({ onBack }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: implement forgot password logic
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Kiểm tra hộp thư!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-2">
          Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến
        </p>
        <p className="font-semibold text-gray-800 text-sm mb-6">{email}</p>
        <p className="text-xs text-gray-400 mb-8">
          Không thấy email? Kiểm tra thư mục spam hoặc{" "}
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-orange-500 hover:underline font-medium cursor-pointer"
          >
            gửi lại
          </button>
        </p>
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-medium text-sm mx-auto transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Quay lại đăng nhập
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm mb-7 transition-colors group cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Quay lại đăng nhập
      </button>

      {/* Icon */}
      <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-5">
        <Mail className="w-7 h-7 text-orange-500" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">Quên mật khẩu?</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-7">
        Nhập email đã đăng ký. Chúng tôi sẽ gửi link đặt lại mật khẩu ngay
        lập tức.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-orange-500 transition-colors" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email của bạn"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm text-gray-900 placeholder:text-gray-400"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !email}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 shadow-lg shadow-orange-500/25 active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Gửi link đặt lại mật khẩu
            </>
          )}
        </button>
      </form>
    </div>
  );
}
