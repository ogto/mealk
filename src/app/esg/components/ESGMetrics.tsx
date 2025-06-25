'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ESGMetrics() {
  const metrics = [
    { name: '친환경 포장 적용률', value: 92 },
    { name: '지역 협력사 비율', value: 66 },
    { name: '내부 감사 수행률', value: 95 },
    { name: '사회공헌 금액 (만원)', value: 5000 },
  ];

  return (
    <section className="flex flex-col items-center text-center space-y-12">
      <h2 className="text-3xl font-bold text-gray-800">ESG 주요 지표</h2>

      <div className="w-full max-w-3xl space-y-10">
        {metrics.map((item, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-700 font-semibold">{item.name}</span>
              <span className="text-green-600 font-bold">
                {item.name.includes('금액') ? `${item.value}만원` : `${item.value}%`}
              </span>
            </div>

            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value > 100 ? 100 : item.value}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="h-full bg-green-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
