"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, LogOut, ChevronDown, Package, X } from "lucide-react";
import { useAuthStore } from "@/store";

export function Header() {
  const { user, cartCount, logout } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Focus input and lock scroll when search overlay opens
  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => mobileSearchRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [searchOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-orange-500 font-black text-base sm:text-lg leading-none">P</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl hidden sm:block">PeaMall</span>
          </Link>

          {/* Search bar – desktop/tablet only */}
          <div className="hidden sm:flex flex-1 max-w-2xl mx-auto">
            <div className="flex w-full bg-white rounded-full overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 px-4 py-2 text-sm text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
              />
              <button className="px-4 bg-orange-500 hover:bg-orange-600 transition-colors cursor-pointer">
                <Search className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1 sm:gap-2 ml-auto shrink-0">
            {/* Search icon – mobile only */}
            <button
              onClick={() => setSearchOpen(true)}
              className="sm:hidden p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Tìm kiếm"
            >
              <Search className="w-5 h-5 text-white" />
            </button>

            {user ? (
              <>
                {/* Cart */}
                <Link href="/cart" className="relative p-2 hover:bg-white/20 rounded-full transition-colors">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  {cartCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 sm:min-w-[18px] sm:h-[18px] bg-yellow-400 text-gray-900 text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center px-1">
                      {cartCount > 9 ? "9+" : cartCount}
                    </span>
                  )}
                </Link>

                {/* User dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 sm:gap-1.5 hover:bg-white/20 rounded-full px-1.5 sm:px-2 py-1.5 transition-colors cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-sm">
                      {user.name[0].toUpperCase()}
                    </div>
                    <span className="text-white text-sm font-medium hidden md:block max-w-[100px] truncate">
                      {user.name}
                    </span>
                    <ChevronDown className={`hidden sm:block w-4 h-4 text-white/80 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 overflow-hidden">
                      <div className="px-4 py-2.5 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                        <p className="text-xs text-gray-500">@{user.username}</p>
                      </div>
                      <Link
                        href="/account/profile"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        Thông tin tài khoản
                      </Link>
                      <Link
                        href="/account/orders"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <Package className="w-4 h-4" />
                        Đơn mua
                      </Link>
                      <hr className="my-1 border-gray-100" />
                      <button
                        onClick={() => { logout(); setDropdownOpen(false); }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white text-xs sm:text-sm font-medium hover:bg-white/20 px-2.5 sm:px-3 py-1.5 rounded-full transition-colors"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/login"
                  className="bg-white text-orange-500 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 rounded-full hover:bg-orange-50 transition-colors"
                >
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile search overlay */}
      {searchOpen && (
        <div
          className="sm:hidden fixed inset-0 z-[60] flex flex-col"
          onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}
        >
          {/* Search bar at top */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 px-3 py-3 flex items-center gap-2 shadow-lg">
            <div className="flex flex-1 bg-white rounded-full overflow-hidden shadow-sm">
              <input
                ref={mobileSearchRef}
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setSearchOpen(false)}
                className="flex-1 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
              />
              <button className="px-4 bg-orange-500 hover:bg-orange-600 transition-colors cursor-pointer">
                <Search className="w-4 h-4 text-white" />
              </button>
            </div>
            <button
              onClick={() => setSearchOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors shrink-0"
              aria-label="Đóng"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dark overlay */}
          <div
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          />
        </div>
      )}
    </>
  );
}
