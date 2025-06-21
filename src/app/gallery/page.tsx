'use client';

import { useState } from 'react';
import { GalleryItem } from '@/types/gallery';
import GalleryModal from './components/GalleryModal';
import GallerySlider from './components/GallerySlider';
import GalleryCard from './components/GalleryCard';

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: '지역 아동 요리 체험',
    imageUrl: '/images/gallery/1.jpg',
    description: '지역 아동들과 함께한 요리 체험 현장입니다.',
    tags: ['아동', '체험', '요리'],
    year: 2023,
  },
  {
    id: 2,
    title: '다문화 요리 교실',
    imageUrl: '/images/gallery/2.jpg',
    description: '다문화 가정을 위한 요리 수업을 진행했습니다.',
    tags: ['다문화', '봉사'],
    year: 2022,
  },
  // 추가 가능
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="py-16">
      <GallerySlider items={galleryData} onClick={setSelectedItem} />

      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">다른 활동 보기</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {galleryData.map((item) => (
            <GalleryCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>

      {selectedItem && (
        <GalleryModal data={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
