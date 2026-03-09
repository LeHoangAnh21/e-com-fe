"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Lock, ShoppingBag, Wallet, CreditCard } from "lucide-react";

const navItems = [
  { href: "/account/profile", icon: User, label: "Thông tin tài khoản" },
  { href: "/account/change-password", icon: Lock, label: "Đổi mật khẩu" },
  { href: "/account/orders", icon: ShoppingBag, label: "Đơn mua" },
  { href: "/account/wallet", icon: Wallet, label: "Quản lý ví điện tử" },
  { href: "/account/credit", icon: CreditCard, label: "Quản lý ví trả sau" },
];

interface AccountSidebarProps {
  userName?: string;
  userHandle?: string;
  avatarLetter?: string;
}

export default function AccountSidebar({
  userName = "Anh Le",
  userHandle = "@anhlh",
  avatarLetter = "A",
}: AccountSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-[230px] flex-shrink-0 sticky top-[70px]">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* User info */}
          <div className="p-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {avatarLetter}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm truncate">
                  {userName}
                </p>
                <p className="text-xs text-gray-400 truncate">{userHandle}</p>
              </div>
            </div>
          </div>

          {/* Nav items */}
          <nav className="p-2">
            {navItems.map(({ href, icon: Icon, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 flex-shrink-0 ${
                      isActive ? "text-orange-500" : "text-gray-400"
                    }`}
                  />
                  <span className="truncate">{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile / Tablet: horizontal scrollable tabs */}
      <div className="lg:hidden w-full mb-5">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs whitespace-nowrap flex-shrink-0 transition-all font-medium ${
                  isActive
                    ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
