'use client'

import Image from 'next/image'
import { ReactNode } from 'react'

interface BrandVisualProps {
  imageSrc: string
  eyebrow?: string
  headline: ReactNode
  subText?: ReactNode
}

export default function BrandVisual({
  imageSrc,
  eyebrow = '',
  headline,
  subText,
}: BrandVisualProps) {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src={imageSrc}
        alt="Brand Visual"
        fill
        priority
        className="object-cover"
      />

      {/* 얕은 오버레이 */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 텍스트 */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="max-w-xl">
          {/* 상단 작은 라벨 */}
          <span className="block text-xs tracking-[0.35em] text-white/70 mb-4">
            {eyebrow}
          </span>

          {/* 메인 카피 */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white mb-6">
            {headline}
          </h2>

          {/* 서브 텍스트 (선택) */}
          {subText && (
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              {subText}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
