// app/help/components/NoticeList.tsx
"use client";

const notices = [
  {
    id: 1,
    title: "[공지] 정채움 설 연휴 배송 안내",
    date: "2025.01.31",
    content: "설 연휴 기간 동안 배송 일정이 조정됩니다. 2월 8일부터 순차 배송됩니다.",
  },
  {
    id: 2,
    title: "[신상품 출시] 건강한 한끼 도시락 출시!",
    date: "2025.01.15",
    content: "영양을 고려한 프리미엄 도시락이 출시되었습니다. 많은 관심 부탁드립니다.",
  },
  {
    id: 3,
    title: "[이벤트] 리뷰 작성 이벤트 당첨자 발표",
    date: "2024.12.28",
    content: "이벤트 당첨자 발표 및 경품 수령 안내드립니다. 상세 내용은 아래 링크를 확인해주세요.",
  },
];

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NoticeList() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {notices.map((notice) => {
        const isOpen = openId === notice.id;
        return (
          <div
            key={notice.id}
            className="border rounded-xl bg-white overflow-hidden shadow-sm"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              onClick={() => setOpenId(isOpen ? null : notice.id)}
            >
              <div>
                <h3 className="font-semibold text-gray-900 text-base">
                  {notice.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{notice.date}</p>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  layout
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm text-gray-700 whitespace-pre-line">
                    {notice.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
