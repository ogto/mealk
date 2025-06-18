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
          spaceBetween={50}
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
              className="w-[92vw] sm:w-[80vw] max-w-[980px] mx-auto"
            >
              <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden shadow-md">
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
