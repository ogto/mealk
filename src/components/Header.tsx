'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '기업소개', href: '#' },
  { label: '회사연혁', href: '#' },
  { label: '기업갤러리', href: '#' },
  { label: '브랜드스토리', href: '#' },
  { label: '이벤트', href: '#' },
  { label: '고객센터', href: '#' },
  { label: '자주묻는 질문', href: '#' },
  { label: '밀키트', href: '#' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header className="border-b border-gray-200 bg-white text-gray-800 w-full text-sm">
      {/* 상단 유틸 - 데스크탑만 */}
      <div className="hidden md:flex w-full max-w-screen-xl mx-auto justify-end gap-8 py-2 px-4 text-gray-600 text-xm">
        <a href="#">로그인</a>
        <a href="#">새소식</a>
      </div>

      {/* 로고 + 메뉴 nav */}
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* 로고 */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"
            alt="정채움 로고"
            width={130}
            height={80}
            className="hidden sm:block"
          />
          <div className="block sm:hidden text-lg font-bold">정채움</div>
        </div>

        {/* 중앙 nav 메뉴 (데스크탑) */}
        <nav className="hidden md:flex items-center gap-10 text-base text-gray-800 md:text-[20px] font-bold">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`transition font-bold hover:text-green-400 ${
                item.label === '밀키트' ? 'text-red-300' : 'text-gray-800'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <div className="md:hidden">
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(true)} />
        </div>
      </div>

      {/* 모바일 햄버거 슬라이딩 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <X className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>
        <nav className="flex flex-col gap-4 px-6 pt-4 text-gray-800 font-medium">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="hover:text-red-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
