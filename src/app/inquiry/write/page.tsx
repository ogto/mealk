// app/inquiry/write/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InquiryWritePage() {
  const router = useRouter();

  const [form, setForm] = useState({ subject: "", content: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("제출된 문의:", form);
    alert("문의가 등록되었습니다.");
    router.push("/help?tab=3");
  };

  return (
    <div className="bg-white px-4 py-16 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">1:1 문의 작성</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">문의 제목</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 text-gray-800"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">문의 내용</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={6}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 text-gray-800"
            required
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => router.push("/help?tab=3")}
            className="px-4 py-2 text-sm text-gray-500 hover:underline"
          >
            취소
          </button>
          <button
            type="submit"
            className="bg-red-300 hover:bg-red-400 text-white px-6 py-2 rounded-md text-sm font-semibold"
          >
            문의하기
          </button>
        </div>
      </form>
    </div>
  );
}
