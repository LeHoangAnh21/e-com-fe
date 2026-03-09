"use client";

import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import AvatarUpload from "./AvatarUpload";
import AddressManager from "./AddressManager";
import type { UserProfile, Gender } from "../types";

const INITIAL: UserProfile = {
  fullName: "Anh Le Hoang",
  username: "anhlh",
  email: "anhlh@example.com",
  phone: "0912 345 678",
  birthDate: { day: 15, month: 8, year: 1995 },
  gender: "male",
  avatar: null,
  addresses: [
    {
      id: "default-1",
      label: "Nhà riêng",
      street: "123 Đường Xuân Thủy",
      ward: "Dịch Vọng",
      district: "Cầu Giấy",
      city: "Hà Nội",
      isDefault: true,
    },
  ],
};

const inputCls =
  "w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm text-gray-900 placeholder:text-gray-400";

const selectCls =
  "w-full px-3 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm text-gray-900 appearance-none cursor-pointer pr-8";

const labelCls = "block text-sm font-medium text-gray-700 mb-1.5";

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 75 }, (_, i) => 2008 - i);

const GENDER_OPTIONS: { value: Gender; label: string }[] = [
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
  { value: "other", label: "Khác" },
];

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-5 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
      <h3 className="text-base font-semibold text-gray-900">{children}</h3>
    </div>
  );
}

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
    </div>
  );
}

export default function ProfileForm() {
  const [profile, setProfile] = useState<UserProfile>(INITIAL);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const setField =
    <K extends keyof UserProfile>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setProfile((prev) => ({ ...prev, [key]: e.target.value }));

  const setBirthDate = (part: "day" | "month" | "year") =>
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      setProfile((prev) => ({
        ...prev,
        birthDate: {
          ...prev.birthDate,
          [part]: e.target.value ? Number(e.target.value) : "",
        },
      }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isSaved && (
        <div className="flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          Thông tin đã được cập nhật thành công!
        </div>
      )}

      {/* ─── Avatar ──────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <SectionHeader>Ảnh đại diện</SectionHeader>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <AvatarUpload
            value={profile.avatar}
            name={profile.fullName}
            onChange={(url) => setProfile((p) => ({ ...p, avatar: url }))}
          />
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              {profile.fullName}
            </p>
            <p className="text-sm text-gray-500 mb-3">@{profile.username}</p>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Ảnh đại diện giúp người khác nhận ra bạn dễ dàng hơn. Ảnh nên
              rõ ràng và phù hợp.
            </p>
          </div>
        </div>
      </div>

      {/* ─── Basic info ──────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <SectionHeader>Thông tin cơ bản</SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full name */}
          <div>
            <label className={labelCls}>Họ và tên</label>
            <input
              type="text"
              value={profile.fullName}
              onChange={setField("fullName")}
              placeholder="Nhập họ và tên"
              className={inputCls}
            />
          </div>

          {/* Username */}
          <div>
            <label className={labelCls}>Tên người dùng</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none">
                @
              </span>
              <input
                type="text"
                value={profile.username}
                onChange={setField("username")}
                placeholder="username"
                className={`${inputCls} pl-7`}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className={labelCls}>Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={setField("email")}
              placeholder="example@email.com"
              className={inputCls}
            />
          </div>

          {/* Phone */}
          <div>
            <label className={labelCls}>Số điện thoại</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={setField("phone")}
              placeholder="0912 345 678"
              className={inputCls}
            />
          </div>

          {/* Birth date — full width */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Ngày sinh</label>
            <div className="grid grid-cols-3 gap-2">
              {/* Day */}
              <SelectWrapper>
                <select
                  value={profile.birthDate.day}
                  onChange={setBirthDate("day")}
                  className={selectCls}
                >
                  <option value="">Ngày</option>
                  {DAYS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </SelectWrapper>

              {/* Month */}
              <SelectWrapper>
                <select
                  value={profile.birthDate.month}
                  onChange={setBirthDate("month")}
                  className={selectCls}
                >
                  <option value="">Tháng</option>
                  {MONTHS.map((m) => (
                    <option key={m} value={m}>
                      Tháng {m}
                    </option>
                  ))}
                </select>
              </SelectWrapper>

              {/* Year */}
              <SelectWrapper>
                <select
                  value={profile.birthDate.year}
                  onChange={setBirthDate("year")}
                  className={selectCls}
                >
                  <option value="">Năm</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </SelectWrapper>
            </div>
          </div>

          {/* Gender */}
          <div className="sm:col-span-2">
            <label className={labelCls}>Giới tính</label>
            <div className="flex gap-2">
              {GENDER_OPTIONS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setProfile((p) => ({ ...p, gender: value }))}
                  className={`px-5 py-2.5 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer ${
                    profile.gender === value
                      ? "border-orange-500 bg-orange-50 text-orange-600"
                      : "border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Addresses ───────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <SectionHeader>Địa chỉ giao hàng</SectionHeader>
        <AddressManager
          addresses={profile.addresses}
          onChange={(addresses) => setProfile((p) => ({ ...p, addresses }))}
        />
      </div>

      {/* ─── Submit ──────────────────────────────────────────────── */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2 active:scale-[0.99]"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Đang lưu...
            </>
          ) : (
            "Lưu thay đổi"
          )}
        </button>
      </div>
    </form>
  );
}
