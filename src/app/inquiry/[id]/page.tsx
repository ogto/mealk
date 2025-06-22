'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Inquiry = {
  id: number;
  subject: string;
  content: string;
  createdAt: string;
  status: string;
  answer?: string;
};

export default function InquiryDetailPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [inquiry, setInquiry] = useState<Inquiry | null>(null);

  // 예시 데이터 (API 연결 전용)
  useEffect(() => {
    const dummyData: Inquiry[] = [
      {
        id: 1,
        subject: '배송이 너무 늦어요',
        content: '주문한 지 3일이 지났는데 아직 발송이 안됐습니다.',
        createdAt: '2025.06.20',
        status: '답변 완료',
        answer: '배송이 지연되어 죄송합니다. 내일 출고 예정입니다.',
      },
      {
        id: 2,
        subject: '상품 문의',
        content: '이 상품은 유통기한이 얼마나 되나요?',
        createdAt: '2025.06.18',
        status: '처리 중',
      },
    ];

    const found = dummyData.find((item) => item.id === Number(id));
    setInquiry(found || null);
  }, [id]);

  if (!inquiry) {
    return <div className="text-center py-20 text-gray-500">문의 내용을 불러올 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-white px-4 py-16 max-w-3xl mx-auto">
      <div className="mb-6">
        <button
          onClick={() => router.push('/help?tab=3')}
          className="text-sm text-red-400 hover:underline"
        >
          ← 목록으로
        </button>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">{inquiry.subject}</h1>
      <p className="text-sm text-gray-500 mb-6">{inquiry.createdAt} · {inquiry.status}</p>

      <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-10 whitespace-pre-line text-gray-400">
        {inquiry.content}
      </div>

      {inquiry.answer && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">📬 답변</h2>
          <div className="bg-white border border-red-200 rounded-md p-4 text-gray-800 whitespace-pre-line">
            {inquiry.answer}
          </div>
        </div>
      )}
    </div>
  );
}
