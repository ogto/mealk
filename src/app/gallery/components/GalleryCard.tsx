'use client';

import { GalleryItem } from '@/types/gallery';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: (item: GalleryItem) => void;
}

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <div
      className="rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300"
      onClick={() => onClick(item)}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-green-800">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.year}년</p>
      </div>
    </div>
  );
}
