'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ESGOverview from './components/ESGOverview';
import ESGPhilosophy from './components/ESGPhilosophy';
import ESGCategory from './components/ESGCategory';
import ESGTimeline from './components/ESGTimeline';
import ESGMetrics from './components/ESGMetrics';
import ESGGallery from './components/ESGGallery';

export default function ESGPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-4 pt-20 space-y-20">
      {/* ESG 타이틀 애니메이션 */}
      <div className="text-center space-y-4">
        <div className="flex justify-center space-x-8 text-6xl font-bold text-gray-800">
          {['E', 'S', 'G'].map((letter, index) => (
            <motion.span
              key={letter}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.3, type: 'spring', stiffness: 300 }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-2 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-xl font-semibold text-green-600"
          >
            Environment - 환경
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-xl font-semibold text-green-600"
          >
            Social - 사회
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="text-xl font-semibold text-green-600"
          >
            Governance - 지배구조
          </motion.div>
        </div>
      </div>

      {/* ESG 페이지 컴포넌트 영역 */}
      <div className="w-full max-w-6xl space-y-24">
        <ESGOverview />
        <ESGPhilosophy />
        <ESGCategory />
        <ESGTimeline />
        <ESGMetrics />
        <ESGGallery />
      </div>
    </div>
  );
}
