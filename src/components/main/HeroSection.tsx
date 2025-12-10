'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const heroImages = [
  '/images/n_hero/1.jpg',
  '/images/n_hero/2.jpg',
  '/images/n_hero/3.png',
]

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 슬라이드 이미지 */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="absolute inset-0 h-full w-full"
      >
        {heroImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-screen w-full">
              <Image
                src={src}
                alt={`Hero ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover"
              />
              {/* 이미지 위 어둡게 */}
              <div className="absolute inset-0" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 고정 텍스트 레이어 */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-3xl text-center px-6 text-white">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-white/70">
            BRAND STORY
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            <span className="block">브랜드를 한 문장으로 정의하는</span>
            <span className="block">핵심 카피를 넣는 자리</span>
          </h1>

          <p className="text-white/80 mb-8 text-base md:text-lg">
            브랜드에 대한 짧은 설명을 적어주세요.
            <br />
            어떤 가치를 제공하는지 자연스럽게 드러나면 좋습니다.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium">
              자세히 보기
            </button>
            <button className="px-6 py-3 rounded-full border border-white/40 text-sm font-medium">
              문의하기
            </button>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 (숙성도 느낌) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <span className="text-xs tracking-[0.3em] text-white/60">
          SCROLL DOWN
        </span>
      </div>
    </section>
  )
}
