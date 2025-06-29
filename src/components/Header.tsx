'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Menu as HeadlessMenu } from '@headlessui/react'

import useAuth from '@/hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

const navItems = [
  { label: '회사소개', href: '/about' },
  { label: 'ESG', href: '/esg' },
  { label: '기업갤러리', href: '/gallery' },
  { label: '브랜드스토리', href: '/brandStory' },
  { label: '고객센터', href: '/help' },
  { label: '제휴', href: '/partnership' },
  { label: '밀키트', href: '#' },
]

export default function Header() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/login')
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="border-b border-gray-200 bg-white text-gray-800 w-full text-sm z-50 relative">
      {/* 상단 유틸 - 데스크탑 */}
      <div className="hidden lg:flex w-full max-w-screen-xl mx-auto justify-end gap-8 py-2 px-4 text-gray-600 text-base">
        {!loading && user ? (
          <UserDropdown user={user} onLogout={handleLogout} />
        ) : (
          <>
            <Link href="/login" className="hover:text-red-300">로그인</Link>
            <Link href="/news" className="hover:text-red-300">새소식</Link>
          </>
        )}
      </div>

      {/* 로고 + 메뉴 nav */}
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" passHref>
          <Image
            src="/logo/logo2.png"
            alt="정채움 로고"
            width={0}
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
              className={`transition hover:text-green-300 ${item.label === '밀키트' ? 'text-red-300' : pathname === item.href ? 'text-green-500' : 'text-gray-800'}`}
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
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
      >
        <div className="flex justify-end p-4">
          <X className="w-7 h-7 text-gray-600 hover:text-black cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        <nav className="flex flex-col gap-5 px-6 pt-2 text-gray-900 font-semibold text-2xl">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`transition-all tracking-tight ${item.label === '밀키트' ? 'text-red-300' : 'text-gray-800'}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 모바일 로그인/로그아웃 */}
        <div className="mt-auto px-6 pt-8 pb-10 border-t border-gray-200 text-base">
  {!loading && user ? (
    <>
      <Link
        href="/my-page"
        onClick={() => setMenuOpen(false)}
        className="block text-lg font-bold mb-3 text-green-500 hover:underline"
      >
        {user.displayName || user.email}
      </Link>

      <button onClick={() => { handleLogout(); setMenuOpen(false) }} className="block text-lg font-bold hover:underline mb-3">
        로그아웃
      </button>

      <Link href="/news" onClick={() => setMenuOpen(false)} className="block text-lg font-bold hover:underline">
        새소식
      </Link>
    </>
  ) : (
    <>
      <Link href="/login" onClick={() => setMenuOpen(false)} className="block text-lg font-bold hover:underline mb-3">
        로그인
      </Link>
      <Link href="/news" onClick={() => setMenuOpen(false)} className="block text-lg font-bold hover:underline">
        새소식
      </Link>
    </>
  )}
</div>

      </div>
    </header>
  )
}

// 드롭다운 컴포넌트
function UserDropdown({ user, onLogout }: { user: any, onLogout: () => void }) {
  return (
    <HeadlessMenu as="div" className="relative inline-block text-left">
      <div>
        <HeadlessMenu.Button
          as="button"
          className="inline-flex justify-center items-center gap-2 px-3 py-1 border rounded-full text-green-500 font-semibold bg-gray-100"
        >
          {user.displayName || user.email}
          <ChevronDown className="w-4 h-4" />
        </HeadlessMenu.Button>
      </div>

      <HeadlessMenu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-50">
        <div className="py-1">
          <HeadlessMenu.Item as="a" href="/my-page" className="block px-4 py-2 text-sm hover:bg-gray-100">
            내정보
          </HeadlessMenu.Item>
          <HeadlessMenu.Item as="button" onClick={onLogout} className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-100">
            로그아웃
          </HeadlessMenu.Item>
          <HeadlessMenu.Item as="a" href="/news" className="block px-4 py-2 text-sm hover:bg-gray-100">
            새소식
          </HeadlessMenu.Item>
        </div>
      </HeadlessMenu.Items>
    </HeadlessMenu>
  )
}
