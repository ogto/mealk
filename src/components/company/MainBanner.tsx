'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const banners = [
  '/banners/banner1.jpg',
  '/banners/banner2.jpg',
  '/banners/banner3.jpg',
  '/banners/banner4.jpg',
];

export default function MainBanner() {
  return (
    <div className="w-full bg-white py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 relative">
        {/* 슬라이더 */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          slidesPerView={3}
          spaceBetween={32}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
        >
          {banners.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[340px] md:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={src}
                  alt={`banner-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 왼쪽 버튼 */}
        <button
          className="custom-prev absolute z-10 top-1/2 -translate-y-1/2 left-[7%] md:left-[10%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          aria-label="Previous slide"
        >
          <span className="text-2xl md:text-3xl">{'‹'}</span>
        </button>

        {/* 오른쪽 버튼 */}
        <button
          className="custom-next absolute z-10 top-1/2 -translate-y-1/2 right-[7%] md:right-[10%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          aria-label="Next slide"
        >
          <span className="text-2xl md:text-3xl">{'›'}</span>
        </button>
      </div>
    </div>
  );
}
