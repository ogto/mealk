'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function DevNote() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-6 left-6 w-[320px] bg-white border border-gray-300 rounded-lg shadow-lg z-[9999] p-4 text-sm font-sans">
      <button
        onClick={() => setVisible(false)}
        className="absolute -top-4 -right-4 bg-white text-gray-600 hover:text-black rounded-full p-1 shadow"
        title="닫기"
      >
        <X size={20} />
      </button>

      <h2 className="text-lg font-bold text-green-700 mb-3">✅ 개발 완료 페이지</h2>
      <ul className="space-y-1 text-gray-800">
        <li>메인페이지</li>
        <li>로그인</li>

        <li>
          기업소개
          <ul className="ml-5 border-l border-gray-300 pl-3 mt-1 space-y-1">
            <li>↳ 회사소개</li>
            <li>↳ 대표이사 소개</li>
            <li>↳ 수상 이력</li>
            <li>↳ 사회공헌 활동</li>
          </ul>
        </li>

        <li>
          기업갤러리
          <ul className="ml-5 border-l border-gray-300 pl-3 mt-1 space-y-1">
            <li>↳ 갤러리 디테일 페이지</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
