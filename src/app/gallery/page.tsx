'use client';

import { useState } from 'react';
import { GalleryItem } from '@/types/gallery';
import GalleryModal from './components/GalleryModal';
import GallerySlider from './components/GallerySlider';
import GalleryCard from './components/GalleryCard';

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: '현충원 정기 방문 활동',
    imageUrl: '/images/gallery/1/1.jpg',
    description: '',
    tags: ['현충원'],
    year: 2025,
    images: [
      '/images/gallery/1/2.jpg',
      '/images/gallery/1/3.jpg',
      '/images/gallery/1/4.jpg',
      '/images/gallery/1/5.jpg',
    ],
  },
  {
    id: 2,
    title: '토종물고기 치어방류 환경 활동',
    imageUrl: '/images/gallery/2/1.jpg',
    description: '',
    tags: ['토종물고기', '치어방류', '환경'],
    year: 2025,
    images: [
      '/images/gallery/2/2.jpg',
      '/images/gallery/2/3.jpg',
      '/images/gallery/2/4.jpg',
    ],
  },
  {
    id: 3,
    title: '보훈청 지정 시설물 방문 활동',
    imageUrl: '/images/gallery/3/1.jpg',
    description: '',
    tags: ['보훈처',],
    year: 2025,
    images: [
      '/images/gallery/3/2.jpg',
      '/images/gallery/3/3.jpg',
      '/images/gallery/3/4.jpg',
      '/images/gallery/3/5.jpg',
      '/images/gallery/3/6.jpg',
    ],
  },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="py-16">
      <GallerySlider items={galleryData} onClick={setSelectedItem} />

      <div className="max-w-6xl mx-auto px-4 mt-12">
        {/* <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">다른 활동 보기</h3> */}
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
