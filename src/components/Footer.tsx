'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast'

export default function Footer() {
  const [openInfo, setOpenInfo] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [openBank, setOpenBank] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('복사되었습니다.')
  }

  return (
    <footer className="w-full bg-gray-50 text-sm text-gray-700 border-t mt-20 border-gray-300" id="footer">
      {/* Section 1: 메뉴 */}
      <div className="border-b py-4 border-gray-300">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-wrap justify-between gap-6">
          <ul className="space-x-6 flex flex-wrap">
            <li><a href="/about">회사소개</a></li>
            <li><a href="/terms">이용약관</a></li>
            <li><a href="/marketing">마케팅 수신 동의</a></li>
            {/* <li><a href="#">쇼핑몰이용안내</a></li> */}
            <li><a href="/privacy" className="font-bold">개인정보처리방침</a></li>
          </ul>
          <ul className="space-x-6 flex flex-wrap">
            {/* <li><a href="#">입점매장 안내</a></li> */}
            <li><a href="#" target="_blank">상품제휴</a></li>
            {/* <li><a href="#">입점신청</a></li> */}
          </ul>
        </div>
      </div>

      {/* Section 2: 모바일 - 아코디언 */}
      <div className="md:hidden border-b py-4 px-6 space-y-4 border-gray-300">
        <AccordionSection title="회사 정보" open={openInfo} onToggle={() => setOpenInfo(!openInfo)}>
          <p><strong className="text-base text-gray-800">(주) 정채움</strong></p>
          <p>대표: 정한철</p>
          <p>사업자등록번호: 314-86-45574</p>
          <p>통신판매업 신고: 제2025-별내-0615호</p>
          <p>본사: 대전광역시 유성구 월드컵대로51번길 51-4</p>
          <p>개인정보관리책임자: 정한철</p>
          <p className="mt-2">© 2025 www.mealkit.com All rights reserved.</p>
        </AccordionSection>

        <AccordionSection title="고객센터" open={openSupport} onToggle={() => setOpenSupport(!openSupport)}>
          <h4 className="text-2xl font-semibold text-red-300">042-624-7287</h4>
          <h4 className="text-2xl font-semibold text-red-300">042-624-7288</h4>
          <a href="#" className="inline-block mt-2 px-4 py-2 border border-red-300 text-red-300 rounded hover:bg-red-300 hover:text-white transition">
            1:1 문의하기
          </a>
          <p className="mt-2 text-gray-500 text-sm">평일 10:00 ~ 17:00 (점심시간 12:00 ~ 13:00)<br />주말 · 공휴일 휴무</p>
        </AccordionSection>

        <AccordionSection title="무통장 입금안내" open={openBank} onToggle={() => setOpenBank(!openBank)}>
          <ul className="mt-2 space-y-1 text-gray-600 text-sm">
            <li>기업: 078-159043-01-010</li>
            <li>농협: 123-123456-12-123</li>
          </ul>
        </AccordionSection>
      </div>

      {/* Section 2: 데스크탑 - 펼침 */}
      <div className="hidden md:block border-b py-6 border-gray-300">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between gap-10">
          <address className="not-italic text-sm leading-relaxed text-gray-600">
            <p><strong className="text-base text-gray-800">(주) 정채움</strong></p>
            <p>대표: 정한철</p>
            <p>사업자등록번호: 314-86-45574</p>
            {/* <p>통신판매업 신고: 제2025-별내-0615호<a href="#" target="_blank" className="underline text-red-300">[사업자정보확인]</a></p> */}
            <p>본사: 대전광역시 유성구 월드컵대로51번길 51-4</p>
            <p>개인정보관리책임자: 정한철</p>
            <p className="mt-2">© 2025 www.mealkit.com All rights reserved.</p>
          </address>

          <div className="flex flex-col gap-6 text-sm">
            <div>
              <h3 className="font-bold text-gray-800">고객상담센터</h3>
              <h4 className="text-2xl font-semibold text-red-300">042-624-7287</h4>
              <h4 className="text-2xl font-semibold text-red-300">042-624-7288</h4>
              <a href="/help?tab=3" className="inline-block mt-2 px-4 py-2 border border-red-300 text-red-300 rounded hover:bg-red-300 hover:text-white transition">
                1:1 문의
              </a>
              <p className="mt-2 text-gray-500">평일 10:00 ~ 17:00 (점심시간 12:00 ~ 13:00)<br />주말 · 공휴일 휴무</p>
            </div>
            <div>
              <h3 className="font-bold">무통장 입금안내</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li
                  onClick={() => handleCopy('신한 140-013-159130 맛있는생활')}
                  className="cursor-pointer hover:underline"
                >
                  신한: 140-013-159130 | 맛있는생활
                </li>
                {/* <li>농협: 123-123456-12-123</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: 안내 */}
      <div className="py-6">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col gap-4 text-xs text-gray-500">
          <p>
            주식회사 정채움이 운영하는 정채움 홈페이지 내 이미지 및 모든 컨텐츠 등은 저작권법 및 콘텐츠산업진흥법에 의해 보호받고 있습니다.<br />
            무단 도용 시 민·형사상 책임을 물을 수 있습니다.
          </p>
          {/* <p>
            고객님은 안전거래를 위해 현금 등으로 결제 시 NHN KCP 에스크로 구매안전서비스를 이용하실 수 있습니다.&nbsp;
            <a href="#" target="_blank" className="text-red-300 underline">서비스가입사실확인</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}

function AccordionSection({ title, open, onToggle, children }: { title: string, open: boolean, onToggle: () => void, children: React.ReactNode }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full text-left font-semibold py-2 border-b border-gray-300 flex justify-between items-center text-gray-800"
      >
        {title}
        <span className="text-sm">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="pt-3 text-gray-600 text-sm">
          {children}
        </div>
      )}
    </div>
  );
}