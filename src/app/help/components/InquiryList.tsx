"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { db } from "@/firebase/firebase";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function InquiryList() {
  const router = useRouter();
  const auth = getAuth();

  const [inquiries, setInquiries] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const adminCheck = currentUser.email === "ogto@kakao.com"; // 관리자 이메일
        setIsAdmin(adminCheck);

        fetchInquiries(currentUser, adminCheck);
      } else {
        router.replace("/login"); // 로그인 필수
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const fetchInquiries = (currentUser: any, isAdmin: boolean) => {
    let q;

    if (isAdmin) {
      q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
    } else {
      q = query(
        collection(db, "inquiries"),
        where("userId", "==", currentUser.uid),
        orderBy("createdAt", "desc")
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate().toISOString().slice(0, 10),
      }));
      setInquiries(list);
      setLoading(false);
    });

    return unsubscribe;
  };

  if (loading) {
    return <div className="text-center py-16">로딩 중...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">1:1 문의 내역</h2>
        <button
          onClick={() => router.push("/inquiry/write")}
          className="bg-red-300 hover:bg-red-400 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> 문의하기
        </button>
      </div>
      <div className="rounded-xl shadow overflow-hidden">
        <div className="bg-gray-100 text-gray-600 text-sm grid grid-cols-12 py-2 px-4 font-semibold">
          <div className={isAdmin ? "col-span-4" : "col-span-7"}>제목</div>
          {isAdmin && <div className="col-span-3">작성자</div>}
          <div className="col-span-3">작성일</div>
          <div className="col-span-2">상태</div>
        </div>

        {inquiries.length === 0 ? (
          <div className="text-center py-20 text-gray-500">작성된 문의가 없습니다.</div>
        ) : (
          <ul>
            {inquiries.map((inq) => (
              <li
                key={inq.id}
                className="grid grid-cols-12 items-center px-4 py-4 border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => router.push(`/inquiry/${inq.id}`)}
              >
                <div className={isAdmin ? "col-span-4 text-sm font-medium text-gray-800 truncate" : "col-span-7 text-sm font-medium text-gray-800 truncate"}>
                  {inq.subject}
                </div>

                {isAdmin && (
                  <div className="col-span-3 text-sm text-gray-500 truncate">
                    {inq.name} ({inq.userEmail})
                  </div>
                )}

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
        )}
      </div>
    </div>
  );
}
