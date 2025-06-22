'use client';
import React, { useState, useRef, useLayoutEffect  } from 'react';
import { motion } from 'framer-motion';
import AboutCompany from './components/AboutCompany';
import AboutCEO from './components/AboutCEO';
import AboutAwards from './components/AboutAwards';
import AboutVolunteer from './components/AboutVolunteer';

const tabs = ['기업 소개', '대표이사 소개', '수상 이력', '사회공헌 활동'];


export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);


  useLayoutEffect(() => {
    const currentTab = tabRefs.current[tabs.indexOf(activeTab)];
    if (currentTab) {
      const { offsetLeft, clientWidth } = currentTab;
      setIndicatorStyle({ left: offsetLeft, width: clientWidth });
    }
  }, [activeTab, tabs]);

  const renderTabContent = () => {
    switch (activeTab) {
      case '기업 소개':
        return <AboutCompany />;
      case '대표이사 소개':
        return <AboutCEO />;
      case '수상 이력':
        return <AboutAwards />;
      case '사회공헌 활동':
        return <AboutVolunteer />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="relative flex justify-center gap-6 pt-10 border-gray-200">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-lg font-medium transition-colors duration-200 ${
              activeTab === tab ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}

        {/* 초록색 보더바 */}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-green-600"
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          animate={indicatorStyle}
          style={{
            position: 'absolute',
            height: '2px',
            bottom: 0,
          }}
        />
      </div>

      <div className="relative">
        {renderTabContent()}
      </div>
    </div>
  );
}
