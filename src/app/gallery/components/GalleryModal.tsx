'use client';

import { useEffect, useRef, useState } from 'react';
import { GalleryItem } from '@/types/gallery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryModalProps {
  data: GalleryItem;
  onClose: () => void;
}

export default function GalleryModal({ data, onClose }: GalleryModalProps) {
  const allImages = [data.imageUrl, ...(data.images || [])];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<string>(data.imageUrl);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveIndex(0);
    setActiveImage(data.imageUrl);
  }, [data]);

  const handlePrev = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      setActiveImage(allImages[newIndex]);
    }
  };

  const handleNext = () => {
    if (activeIndex < allImages.length - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      setActiveImage(allImages[newIndex]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl">
        {/* 닫기 버튼 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -top-20 right-0 lg:-right-20 z-50"
        >
          <X size={60} className="text-white hover:text-gray-300 transition" />
        </button>

        {/* 모달 본문 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl w-full overflow-hidden relative max-h-[90vh] overflow-y-auto"
        >
          {/* 메인 이미지 */}
          <div className="relative w-full h-74 sm:h-126">
            <Image
              src={activeImage}
              alt={data.title}
              fill
              className="object-contain transition-all duration-300"
            />

            {/* 좌우 버튼 */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white border border-gray-300 shadow-lg rounded-full p-3 hover:bg-gray-100 transition z-10"
                  disabled={activeIndex === 0}
                >
                  <ChevronLeft size={32} className="text-gray-700" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white border border-gray-300 shadow-lg rounded-full p-3 hover:bg-gray-100 transition z-10"
                  disabled={activeIndex === allImages.length - 1}
                >
                  <ChevronRight size={32} className="text-gray-700" />
                </button>
              </>
            )}
          </div>

          {/* 텍스트 설명 */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-2">{data.title}</h2>
            <p className="text-sm text-gray-500 mb-1">📅 {data.year}년</p>
            <p className="text-gray-700 mb-4">{data.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* 썸네일 슬라이드 */}
            <div className="overflow-x-auto">
              <div
                ref={sliderRef}
                className="flex gap-4 pb-2 max-h-[300px] sm:max-h-[400px] overflow-y-hidden snap-x snap-mandatory p-1"
              >
                {allImages.map((imgUrl, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      setActiveImage(imgUrl);
                    }}
                    onMouseEnter={() => setActiveImage(imgUrl)}
                    className={`relative min-w-[70%] sm:min-w-[300px] aspect-[4/3] overflow-hidden rounded group border cursor-pointer snap-start ${
                      i === activeIndex ? 'ring-4 ring-green-300' : ''
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`${data.title} 썸네일 ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
