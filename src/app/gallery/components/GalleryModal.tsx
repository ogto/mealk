'use client';

import { GalleryItem } from '@/types/gallery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface GalleryModalProps {
  data: GalleryItem;
  onClose: () => void;
}

export default function GalleryModal({ data, onClose }: GalleryModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-3xl">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -top-20 -right-0 md:-right-20 z-50"
        >
          <X size={60} className="text-white hover:text-gray-300 transition" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl w-full overflow-hidden relative"
        >
          <div className="relative w-full h-64 sm:h-96">
            <Image
              src={data.imageUrl}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-2">{data.title}</h2>
            <p className="text-sm text-gray-500 mb-1">📅 {data.year}년</p>
            <p className="text-gray-700 mb-4">{data.description}</p>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
