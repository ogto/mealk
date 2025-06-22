'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stories = [
  {
    title: "더욱 신선하게 채움",
    description: "정채움은 원산지부터 철저히 따져요. 모든 재료는 신뢰할 수 있는 공급망을 통해 들어옵니다.",
    image: "/images/story/story_1.jpg",
  },
  {
    title: "더욱 건강하게 채움",
    description: "건강을 위한 레시피. 영양성분표를 투명하게 공개하며, 정제된 첨가물은 최소화했어요.",
    image: "/images/story/story_2.jpg",
  },
  {
    title: "더욱 깨끗하게 채움",
    description: "HACCP 기준 설비에서 위생적으로 제조되며, 매일매일 클린 체크를 진행하고 있어요.",
    image: "/images/story/story_3.jpg",
  },
];

export default function BrandStoryPage() {
  return (
    <div className="bg-white">

      {/* 인트로 */}
      <section className="text-center py-24 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">정채움 브랜드 스토리</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            좋은 식사는 정성을 채우는 것에서 시작됩니다. <br />
            정채움은 건강, 위생, 품질을 가장 먼저 생각합니다.
          </p>
        </motion.div>
      </section>

        <div className="max-w-[1280px] mx-auto">
      {/* 스토리 섹션 */}
      {stories.map((story, idx) => (
        <section
          key={idx}
          className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center px-6 md:px-12 py-16 gap-8`}
        >
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={story.image}
              alt={story.title}
              width={600}
              height={400}
              className="rounded-3xl w-full object-cover shadow-xl"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{story.title}</h2>
            <p className="text-lg text-gray-600">{story.description}</p>
          </motion.div>
        </section>
      ))}
      </div>

      {/* CTA */}
      <section className="py-20 text-center bg-red-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">정채움은 계속 진화 중입니다</h3>
          <p className="text-gray-600 mb-6">우리는 매일 더 좋은 식사를 위해 고민합니다.</p>
          <button className="bg-red-300 hover:bg-red-400 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            앞으로도 기대해주세요
          </button>
        </motion.div>
      </section>
    </div>
  );
}
