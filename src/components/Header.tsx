'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      className="
        fixed top-0 w-full z-50
        h-[64px]
        bg-white/60
        backdrop-blur
        border-b border-white/30
      "
    >
      <div className="max-w-screen-xl h-full mx-auto px-6 flex items-center">
        {/* 로고만 */}
        <Link href="/" className="block">
          <Image
            src="/logo/logo2.png"
            alt="정채움"
            width={120}
            height={36}
            priority
            className="
              opacity-90
              hover:opacity-100
              transition
            "
          />
        </Link>
      </div>
    </header>
  )
}
