'use client';

import { GalleryItem } from '@/types/gallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GallerySliderProps {
  items: GalleryItem[];
  onClick: (item: GalleryItem) => void;
}

export default function GallerySlider({ items, onClick }: GallerySliderProps) {
  return (
    <div className="w-full bg-white pb-8">
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 cursor-pointer"
                onClick={() => onClick(item)}
              >
                <div className="w-full sm:w-1/2 h-[300px] sm:h-[400px] relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover rounded shadow"
                  />
                </div>
                <div className="w-full sm:w-1/2 text-center sm:text-left">
                  <motion.h3
                    className="text-2xl sm:text-3xl font-bold text-green-800 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-gray-700 text-sm mb-2">📅 {item.year}년</p>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
