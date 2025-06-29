'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function DevNote() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* 왼쪽 상단 FAB 버튼 */}
      <div
        className="fixed top-30 left-4 z-[100] bg-green-600 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer select-none flex items-center gap-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={16} /> : <Check size={16} />}
      </div>

      {/* 팝업 목록 패널 */}
      {isOpen && (
        <div
          className="fixed top-40 left-4 z-[100] w-[320px] bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-sm font-sans"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-green-700">✅ 개발 완료 페이지</h2>
          </div>
          <ul className="space-y-1 text-gray-800">
            <li>☑️ 메인 페이지 (카테고리 수정 필요)</li>
            <li>✔️ 로그인 (기능완료)</li>
            <li>✔️ 비밀번호 찾기 (기능완료)</li>
            <li>✔️ 내정보 (기능완료)</li>
            <li>
              회사소개
              <ul className="ml-5 border-l border-gray-300 pl-3 mt-1 space-y-1">
                <li>↳ 기업소개</li>
                <li>↳ 대표이사 소개</li>
                <li>↳ 수상 이력</li>
                <li>↳ 사회공헌 활동</li>
              </ul>
            </li>
            <li>
              ESG
            </li>
            <li>
              기업갤러리
              <ul className="ml-5 border-l border-gray-300 pl-3 mt-1 space-y-1">
                <li>↳ 갤러리 디테일 페이지</li>
              </ul>
            </li>
            <li>
              브랜드스토리
            </li>
            <li>
              고객센터
              <ul className="ml-5 border-l border-gray-300 pl-3 mt-1 space-y-1">
                <li>↳ 자주묻는 질문</li>
                <li>↳ 공지사항</li>
                <li>↳ ✔️ 1:1문의 (기능 완료)</li>
                <ul className="ml-5 border-l border-gray-300 pl-3 mt-1 space-y-1">
                  <li>↳ 문의 작성</li>
                  <li>↳ 문의 상세 (관리자 답변)</li>
                </ul>
              </ul>
            </li>
            <li>
              ✔️ 제휴 (기능완료)
            </li>
            <li>
              ✔️ 회원가입 (기능완료)
            </li>
            <li>
              새소식
              <ul className="ml-5 border-l border-gray-300 pl-3 mt-1 space-y-1">
                <li>↳ 새소식 상세 페이지</li>
              </ul>
            </li>
            <li>
              이용약관
            </li>
            <li>
              마케팅 수신 동의
            </li>
            <li>
              개인정보처리방침
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
