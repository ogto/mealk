'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/esg/esg1.jpg',
  '/esg/esg2.jpg',
  '/esg/esg3.jpg',
  '/esg/esg4.jpg',
];

export default function ESGGallery() {
  return (
    <section className="flex flex-col items-center text-center space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">ESG 활동 갤러리</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {images.map((src, index) => (
          <div key={index} className="relative w-72 h-48 rounded-2xl overflow-hidden shadow-lg">
            <Image src={src} alt={`ESG 이미지 ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
