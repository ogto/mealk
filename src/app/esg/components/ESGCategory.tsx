'use client';

import React, { useState } from 'react';

const tabs = ['환경 (Environment)', '사회 (Social)', '지배구조 (Governance)'];

export default function ESGCategory() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case '환경 (Environment)':
        return (
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>친환경 포장재 100% 사용</li>
            <li>에너지 절약 및 탄소 저감 활동</li>
            <li>재활용 자원 확대</li>
          </ul>
        );
      case '사회 (Social)':
        return (
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>지역 소상공인 연계 협업</li>
            <li>취약계층 지원 기부 활동</li>
            <li>임직원 복지 및 교육 프로그램 운영</li>
          </ul>
        );
      case '지배구조 (Governance)':
        return (
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>윤리경영 실천</li>
            <li>투명한 회계 및 정보 공개</li>
            <li>내부통제 및 리스크 관리 체계 강화</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col items-center text-center space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">ESG 핵심 영역</h2>

      <div className="flex justify-center space-x-6 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl border transition ${
              activeTab === tab ? 'bg-green-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">{renderContent()}</div>
    </section>
  );
}
