"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

export default function InquiryList() {
  const router = useRouter();

  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      subject: "배송이 너무 늦어요",
      content: "주문한 지 3일이 지났는데 아직 발송이 안됐습니다.",
      createdAt: "2025.06.20",
      status: "답변 완료",
      answer: "배송이 지연되어 죄송합니다. 내일 출고 예정입니다."
    },
    {
      id: 2,
      subject: "상품 문의",
      content: "이 상품은 유통기한이 얼마나 되나요?",
      createdAt: "2025.06.18",
      status: "처리 중",
      answer: ""
    },
  ]);

  const [form, setForm] = useState({ subject: "", content: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInquiry = {
      id: inquiries.length + 1,
      subject: form.subject,
      content: form.content,
      createdAt: new Date().toISOString().slice(0, 10),
      status: "처리 중",
      answer: ""
    };
    setInquiries([newInquiry, ...inquiries]);
    setForm({ subject: "", content: "" });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">나의 1:1 문의내역</h2>
        <button
          onClick={() => router.push("/inquiry/write")}
          className="bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> 글쓰기
        </button>
      </div>

      <div className="rounded-xl shadow overflow-hidden">
        <div className="bg-gray-100 text-gray-600 text-sm grid grid-cols-12 py-2 px-4 font-semibold">
          <div className="col-span-7">제목</div>
          <div className="col-span-3">작성일</div>
          <div className="col-span-2">상태</div>
        </div>
        <ul>
          {inquiries.map((inq) => (
            <li
              key={inq.id}
              className="grid grid-cols-12 items-center px-4 py-4 border-b hover:bg-gray-50 cursor-pointer"
              onClick={() => router.push(`/inquiry/${inq.id}`)}
            >
              <div className="col-span-7 text-sm font-medium text-gray-800 truncate">{inq.subject}</div>
              <div className="col-span-3 text-sm text-gray-500">{inq.createdAt}</div>
              <div className="col-span-2 text-xs">
                <span
                  className={`inline-block px-2 py-1 rounded-full font-medium ${
                    inq.status === "답변 완료"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {inq.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
