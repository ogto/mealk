'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#process', label: '제품소개' },
    { href: '#certificates', label: '기술인증' },
    { href: '#management-system', label: '경영시스템' },
    { href: '#media', label: '언론보도' },
    { href: '#footer', label: '고객센터' },   // ✅ 추가
  ]

  const closeMenu = () => setOpen(false)

  return (
    <>
      {/* 상단 고정 헤더 */}
      <header
        className="
          fixed top-0 w-full z-50
          h-[64px]
          bg-white/60
          backdrop-blur
          border-b border-white/30
        "
      >
        <div className="max-w-screen-xl h-full mx-auto px-6 flex items-center justify-between">

          {/* 로고 */}
          <Link href="/" className="block">
            <Image
              src="/logo/logo2.png"
              alt="정채움"
              width={120}
              height={36}
              priority
              className="opacity-90 hover:opacity-100 transition"
            />
          </Link>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-black transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden flex items-center justify-center w-9 h-9"
            aria-label="메뉴 열기"
          >
            <div className="space-y-[6px]">
              <span className="block w-6 h-[2px] bg-zinc-900 rounded-full"></span>
              <span className="block w-6 h-[2px] bg-zinc-900 rounded-full"></span>
              <span className="block w-6 h-[2px] bg-zinc-900 rounded-full"></span>
            </div>
          </button>

        </div>
      </header>

      {/* 오버레이 */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={closeMenu}
      />

      {/* 슬라이드 메뉴 */}
      <aside
        className={`
          fixed inset-y-0 right-0 z-50 md:hidden
          w-[80%] max-w-[340px]
          bg-black/40
          backdrop-blur-xl
          border-l border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.5)]
          text-white
          flex flex-col
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* 닫기 버튼 */}
        <div className="flex items-center justify-end px-6 h-[64px] border-b border-white/10">
          <button
            onClick={closeMenu}
            aria-label="메뉴 닫기"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-center w-5 h-5">
              <span className="absolute w-5 h-[2px] bg-white rotate-45 rounded"></span>
              <span className="absolute w-5 h-[2px] bg-white -rotate-45 rounded"></span>
            </div>
          </button>
        </div>

        {/* 메뉴 리스트 */}
        <nav className="flex flex-col gap-8 px-8 py-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="
                text-2xl font-semibold 
                text-white/90 
                hover:text-white
                tracking-tight
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
