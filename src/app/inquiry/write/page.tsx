"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function InquiryWritePage() {
  const router = useRouter();
  const auth = getAuth();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ subject: "", content: "" });

  // 로그인 여부 체크
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        router.replace("/login"); // 로그인 페이지로 강제 이동
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(user)
      await addDoc(collection(db, "inquiries"), {
        subject: form.subject,
        content: form.content,
        createdAt: Timestamp.now(),
        status: "처리 중",
        answer: "",
        userId: user?.uid,
        userEmail: user?.email,
        name: user?.displayName
      });

      alert("문의가 등록되었습니다.");
      router.push("/help?tab=3");
    } catch (error) {
      console.error("문의 등록 실패:", error);
      alert("등록에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  if (loading) {
    return <div className="text-center py-16">로딩 중...</div>;
  }

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
