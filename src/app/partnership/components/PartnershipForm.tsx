"use client";

import emailjs from "emailjs-com";
import { useState } from "react";

export default function PartnershipForm() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_b1u0rl4",
        "template_e30h1pu",
        form,
        "hG505FSOpjZtkH2Ox"
      );

      alert("제휴문의가 성공적으로 제출되었습니다.");
      setForm({ company: "", name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("이메일 발송 오류:", error);
      alert("제출에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-xl shadow-md"
    >
      <div>
        <label className="block mb-1 font-medium text-gray-700">업체명</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 text-black"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">담당자 이름</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 text-black"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">연락처</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 text-black"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">이메일</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 text-black"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">제휴 목적 및 요청사항</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 text-black"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-300 hover:bg-red-400 text-white py-3 rounded-md font-semibold transition-colors"
      >
        문의하기
      </button>
    </form>
  );
}
