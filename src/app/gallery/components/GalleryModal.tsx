'use client';

import { GalleryItem } from '@/types/gallery';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryModalProps {
  data: GalleryItem;
  onClose: () => void;
}

export default function GalleryModal({ data, onClose }: GalleryModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-2xl w-full relative z-10"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-64 mb-4">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover rounded"
          />
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-2">{data.title}</h3>
        <p className="text-sm text-gray-500 mb-1">📅 {data.year}년</p>
        <p className="text-gray-700 mb-4">{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, idx) => (
            <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
