'use client';

import { useState } from "react";
import Image from "next/image";
import {
  User,
  ShoppingCart,
  Truck,
  Menu,
  X,
  Search,
} from "lucide-react";

// nav 항목 정의
const navItems = [
  { label: "카테고리", icon: "☰", href: "#" },
  { label: "회사소개", href: "#" },
  { label: "이벤트", href: "#" },
  { label: "이벤트", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 bg-white text-gray-800 w-full">
      {/* 상단 유틸 - 데스크탑만 */}
      <div className="hidden md:flex w-full max-w-screen-xl mx-auto justify-end gap-10 text-sm text-gray-700 py-3 px-4">
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
        <a href="#">주문조회</a>
        <a href="#">고객센터</a>
      </div>

      {/* 로고 & 검색 & 아이콘 섹션 */}
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">

        {/* 모바일 - 왼쪽 검색 아이콘 */}
        <div className="md:hidden">
          <Search className="w-6 h-6 cursor-pointer" />
        </div>

        {/* 로고 - 가운데 정렬 */}
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          {/* 로고 이미지 - 데스크탑 전용 */}
          <Image
            src="/logo/logo.png"
            alt="정채움 로고"
            width={150}
            height={110}
            className="hidden sm:block"
          />

          {/* 텍스트 로고 - 모바일 전용 */}
          <div className="block sm:hidden text-xl font-semibold leading-tight">
            정채움
          </div>
        </div>
        {/* 데스크탑 전용 검색창 */}
        <div className="hidden md:flex flex-1 justify-center px-8">
          <div className="flex items-center border-2 border-red-300 rounded-full px-4 py-2 w-full max-w-lg">
            <input
              type="text"
              placeholder="요리가 쉬워지는 식자재몰, 정채움"
              className="flex-1 text-base text-gray-900 placeholder-gray-400 outline-none"
            />
            <button className="text-red-300 text-lg ml-2">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 오른쪽 아이콘/햄버거 */}
        <div className="flex items-center gap-4 md:gap-10 text-sm text-gray-700">
          <div className="hidden md:flex items-center gap-6">
            <User className="w-6 h-6" />
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-2 bg-red-300 text-white text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <Truck className="w-6 h-6" />
          </div>
          <div className="md:hidden">
            <Menu className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </div>

      {/* nav 메뉴: 데스크탑은 flex, 모바일은 슬라이드 */}
      <nav className="bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="flex md:justify-start gap-6 text-sm text-gray-800 overflow-x-auto whitespace-nowrap scrollbar-hide py-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`flex items-center gap-1 px-1 hover:text-red-300 transition text-base ${
                  item.icon ? "text-red-300 font-semibold" : ""
                }`}
              >
                {item.icon && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 햄버거 슬라이딩 메뉴 - 로그인/회원가입 등 */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <X className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>
        <div className="flex flex-col gap-4 px-6 pt-4">
          <a href="#" className="text-gray-800 hover:text-red-400 transition">로그인</a>
          <a href="#" className="text-gray-800 hover:text-red-400 transition">회원가입</a>
          <a href="#" className="text-gray-800 hover:text-red-400 transition">주문조회</a>
          <a href="#" className="text-gray-800 hover:text-red-400 transition">고객센터</a>
        </div>
      </div>
    </header>
  );
}
