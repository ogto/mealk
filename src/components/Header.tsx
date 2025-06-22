'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useRef } from 'react';

const navItems = [
  { label: '기업소개', href: '/about' },
  { label: '기업갤러리', href: '/gallery' },
  { label: '브랜드스토리', href: '#' },
  { label: '고객센터', href: '#' },
  { label: '제휴', href: '#' },
  { label: '밀키트', href: '#' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  // 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="border-b border-gray-200 bg-white text-gray-800 w-full text-sm z-50 relative">
      {/* 상단 유틸 - 데스크탑 */}
      <div className="hidden lg:flex w-full max-w-screen-xl mx-auto justify-end gap-8 py-2 px-4 text-gray-600 text-base">
        <Link href="/login" className='hover:text-red-300'>로그인</Link>
        <Link href="#" className='hover:text-red-300'>새소식</Link>
      </div>

      {/* 로고 + 메뉴 nav */}
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* 로고 */}
        <Link href="/" passHref>
          <Image
            src="/logo/logo2.png"
            alt="정채움 로고"
            width={0} // 고정값 말고 스타일로 처리할 예정
            height={0}
            sizes="100vw"
            className="cursor-pointer w-[100px] h-[42px] lg:w-[140px] lg:h-[60px]"
          />
        </Link>

        {/* 중앙 nav 메뉴 - 데스크탑 */}
        <nav className="hidden lg:flex items-center gap-10 text-xl font-bold">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`transition hover:text-green-300 ${
                item.label === '밀키트'
                  ? 'text-red-300'
                  : pathname === item.href
                    ? 'text-green-500'
                    : 'text-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <div className="lg:hidden">
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(true)} />
        </div>
      </div>

      {/* 모바일 햄버거 슬라이딩 메뉴 */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* 닫기 버튼 */}
        <div className="flex justify-end p-4">
          <X className="w-7 h-7 text-gray-600 hover:text-black cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        {/* 메뉴 항목 */}
        <nav className="flex flex-col gap-5 px-6 pt-2 text-gray-900 font-semibold text-2xl">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`transition-all tracking-tight ${
                item.label === '밀키트' ? 'text-red-300' : 'text-gray-800'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 로그인 / 새소식 */}
        <div className="mt-auto px-6 pt-8 pb-10 border-t border-gray-200 text-base">
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-bold hover:underline mb-3"
          >
            로그인
          </Link>
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-bold hover:underline"
          >
            새소식
          </Link>
        </div>
      </div>

    </header>
  );
}
