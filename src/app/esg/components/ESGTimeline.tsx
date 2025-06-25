'use client';

import React from 'react';

const timeline = [
  { date: '2024.05', event: '친환경 포장 100% 적용' },
  { date: '2024.08', event: '지역 소상공인 연계 캠페인 시작' },
  { date: '2024.12', event: 'ESG 경영 선언 및 윤리헌장 제정' },
  { date: '2025.03', event: '전사 에너지 절감 프로젝트 시행' },
];

export default function ESGTimeline() {
  return (
    <section className="flex flex-col items-center text-center space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">ESG 활동 타임라인</h2>

      <div className="flex flex-col space-y-6 mt-8 max-w-2xl w-full">
        {timeline.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-green-600 rounded-full flex-shrink-0"></div>
            <div className="text-left">
              <div className="text-green-600 font-semibold">{item.date}</div>
              <div className="text-gray-700">{item.event}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
