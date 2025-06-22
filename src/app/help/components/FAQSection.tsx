'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    { question: '배송은 얼마나 걸리나요?', answer: '보통 1~2일 소요됩니다.' },
    { question: '결제 수단은 어떤 게 있나요?', answer: '카드, 계좌이체, 간편결제 등을 지원합니다.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={idx} className="border rounded-xl overflow-hidden shadow-sm bg-white">
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className="font-semibold text-gray-800">{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  layout
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {/* ✅ 텍스트는 그냥 div - 애니메이션 없음 */}
                  <div className="px-6 pb-4 text-sm text-gray-600">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
