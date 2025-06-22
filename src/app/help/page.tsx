'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import FAQSection from './components/FAQSection';
import NoticeList from './components/NoticeList';
import InquiryList from './components/InquiryList';

const tabs = [
  { id: '1', label: '자주 묻는 질문' },
  { id: '2', label: '공지사항' },
  { id: '3', label: '1:1문의' },
];

export default function HelpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTabId = searchParams.get('tab') || '1';

  const [activeTabId, setActiveTabId] = useState(initialTabId);

  useEffect(() => {
    setActiveTabId(initialTabId); // URL이 바뀌면 반영
  }, [initialTabId]);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
    router.push(`/help?tab=${tabId}`);
  };

  return (
    <div className="bg-white min-h-screen px-4 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">고객센터</h1>

      {/* 탭 버튼 */}
      <div className="flex justify-center space-x-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2 rounded-full font-semibold border transition-all ${
              activeTabId === tab.id
                ? 'bg-red-300 text-white border-red-300'
                : 'bg-white text-gray-600 border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 콘텐츠 */}
      <div>
        {activeTabId === '1' && <FAQSection />}
        {activeTabId === '2' && <NoticeList />}
        {activeTabId === '3' && <InquiryList />}
      </div>
    </div>
  );
}
