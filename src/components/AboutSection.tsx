'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* 왼쪽 이미지 */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-[300px] md:h-[400px] relative"
      >
        <Image
          src="/about.jpg"
          alt="회사 소개"
          fill
          className="rounded-xl object-cover"
        />
      </motion.div>

      {/* 오른쪽 텍스트 */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-800"
      >
        <h2 className="text-3xl font-extrabold mb-4">
          우리의 철학은 <span className="text-red-300">‘간편함’</span> 입니다
        </h2>

        <p className="text-base leading-relaxed mb-6 text-gray-700">
          정채움은 바쁜 일상 속에서도 <span className="font-semibold text-gray-900">간편하고 맛있는 식사</span>를 즐길 수 있도록 돕는 브랜드입니다.
          우리는 재료 선정부터 배송, 조리 편의성까지 고민하며 제품을 만듭니다.
        </p>

        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-sm text-gray-800">100% 국내산 재료</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-sm text-gray-800">친환경 패키징</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-sm text-gray-800">10분 완성 조리법</span>
          </li>
        </ul>
      </motion.div>

    </div>
  );
}
