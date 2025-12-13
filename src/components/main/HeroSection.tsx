'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const heroImages = [
  '/images/n_hero/1.jpeg',
  '/images/n_hero/2.png',
  '/images/n_hero/3_1.png',
]

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 배경 슬라이드 */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {heroImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`Hero ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover"
              />
              {/* 어두운 오버레이 */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 고정 텍스트 레이어 — BrandVisual 스타일 */}
      <div className="absolute inset-0 z-10">
        <div className="h-full max-w-7xl mx-auto px-10 flex items-center pt-30 md:pt-32">
          <div className="max-w-xl text-white">

            {/* 메인 헤드라인 */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
              <span className="block">20년 숙련기술로 완성되는</span>
              <span className="block">정채움 프리미엄 시그니처</span>
            </h1>

            {/* 서브 카피 */}
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              제대로 된 재료, 시간, 정성만을 고집하며
              <br className="hidden md:block" />
              한 끼의 가치가 더 특별해지는 경험을 만들어갑니다.
            </p>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <span className="text-xs tracking-[0.3em] text-white/60">
          SCROLL DOWN
        </span>
      </div>
    </section>
  )
}
