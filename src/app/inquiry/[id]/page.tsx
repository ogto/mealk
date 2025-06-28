"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

type Inquiry = {
  id: string;
  subject: string;
  content: string;
  createdAt: string;
  status: string;
  answer?: string;
  name?: string;
  userEmail?: string;
};

export default function InquiryDetailPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [loading, setLoading] = useState(true);

  const [answer, setAnswer] = useState("");

  // 로그인 유저, 관리자 판별
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsAdmin(user.email === "ogto@kakao.com"); // 관리자 이메일
      } else {
        router.replace("/login");
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (id) {
      fetchInquiry();
    }
  }, [id]);

  const fetchInquiry = async () => {
    try {
      const docRef = doc(db, "inquiries", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setInquiry({
          id: docSnap.id,
          subject: data.subject,
          content: data.content,
          createdAt: data.createdAt.toDate().toISOString().slice(0, 10),
          status: data.status,
          answer: data.answer,
          name: data.name,
          userEmail: data.userEmail,
        });
      } else {
        setInquiry(null);
      }
    } catch (error) {
      console.error("문의 조회 실패:", error);
      setInquiry(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSubmit = async () => {
    if (!answer.trim()) {
      alert("답변을 입력하세요.");
      return;
    }

    try {
      const docRef = doc(db, "inquiries", id);
      await updateDoc(docRef, {
        answer,
        status: "답변 완료",
      });

      alert("답변이 등록되었습니다.");
      await fetchInquiry();
    } catch (error) {
      console.error("답변 등록 실패:", error);
      alert("답변 등록에 실패하였습니다.");
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-gray-500">로딩 중...</div>;
  }

  if (!inquiry) {
    return <div className="text-center py-20 text-gray-500">문의 내용을 불러올 수 없습니다.</div>;
  }

  return (
    <div className="bg-white px-4 py-16 max-w-3xl mx-auto">
      <div className="mb-6">
        <button
          onClick={() => router.push("/help?tab=3")}
          className="text-md text-red-300"
        >
          ← 목록으로
        </button>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">{inquiry.subject}</h1>
      <p className="text-sm text-gray-500 mb-2">
        작성자: {inquiry.name} ({inquiry.userEmail})
      </p>
      <p className="text-sm text-gray-500 mb-6">
        {inquiry.createdAt} · {inquiry.status}
      </p>

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

      {/* 관리자 답변 작성 영역 */}
      {isAdmin && !inquiry.answer && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">답변 작성</h2>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={6}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 text-gray-800 mb-4"
            placeholder="답변을 입력하세요."
          />
          <button
            onClick={handleAnswerSubmit}
            className="bg-red-300 hover:bg-red-400 text-white px-6 py-2 rounded-md text-sm font-semibold"
          >
            답변 등록
          </button>
        </div>
      )}
    </div>
  );
}
