'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const banners = [
  '/banners/banner4.jpg',
  '/banners/banner1.jpg',
  '/banners/banner2.jpg',
  '/banners/banner3.jpg',
];

export default function MainBanner() {
  return (
    <div className="w-full bg-white pb-8">
      <div className="w-full max-w-[1920px] mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {banners.map((src, index) => (
            <SwiperSlide
              key={index}
              className="w-[100vw] sm:w-[90vw] max-w-[1400px] mx-auto"
            >
              <div className="relative w-full h-[440px] sm:h-[520px] md:h-[600px] lg:h-[650px] xl:h-[700px] rounded-none sm:rounded-xl overflow-hidden shadow-md">
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
      </div>
    </div>
  );
}
