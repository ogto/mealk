'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function MealkitPage() {
  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      {/* 메인 배너 */}
      <section className="w-full h-[80vh] relative overflow-hidden flex items-center justify-center bg-gray-100">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full z-0"
        >
          <Image src="/images/product/product_banner.jpg" alt="밀키트 배너" layout="fill" objectFit="cover" />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center"
        >
          <h1 className="text-5xl font-bold mb-4 text-red-400">정채움 밀키트</h1>
          <p className="text-lg text-white">간편함과 품질을 담은 밀키트</p>
        </motion.div>
      </section>

      {/* 스토리 섹션 */}
      <section className="max-w-5xl mx-auto py-20 px-4 space-y-16">
        {/* 스토리 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">정채움 밀키트는 다릅니다.</h2>
          <p className="text-gray-600 leading-relaxed">
            우리는 신선함을 가장 먼저 생각합니다.<br />
            정채움 밀키트는 최상의 품질, 위생, 맛을 모두 갖춘 밀키트입니다.
          </p>
        </motion.div>

        {/* 제품 라인업 */}
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">제품 라인업</h2>
            <p className="text-gray-600 leading-relaxed">정채움의 신선한 밀키트 제품을 만나보세요.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: '신난 표고버섯 왕갈비 구이', img: '/images/product/galbi.png' },
              { title: '팽이버섯 왕구이', img: '/images/product/gui.png' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform"
              >
                <Image src={item.img} alt={item.title} width={400} height={300} className="w-full h-60 object-contain" />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">신선하고 간편한 {item.title}를 만나보세요.</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 패키징 라인업 */}
        <section className="space-y-16 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">패키지 디자인</h2>
            <p className="text-gray-600 leading-relaxed">정채움만의 고급 패키지로 특별함을 더했습니다.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Image
              src="/images/product/ddizi.png"
              alt="패키지"
              width={1920}
              height={500}
              className="w-full object-contain"
            />
            <div className="p-8 bg-white text-center">
              <h3 className="text-2xl font-semibold mb-4">정채움 패키지</h3>
              <p className="text-gray-600 text-base">정채움의 브랜드 감성을 담은 고급 패키지입니다.</p>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/partnership">
            <button className="bg-red-300 hover:bg-red-400 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg">
              제휴/상담 문의하기
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
