"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const newsList = [
  {
    id: 1,
    title: "신규 밀키트 출시! 더 맛있고 간편하게",
    date: "2025.02.01",
    imageUrl: "/images/sub_banner.png",
    description: "정채움의 새로운 밀키트를 지금 만나보세요. 더 풍부해진 맛과 간편한 조리로 돌아왔습니다.",
  },
  {
    id: 2,
    title: "정채움 브랜드 스토리 공개",
    date: "2025.01.20",
    imageUrl: "/images/crt.png",
    description: "정채움이 걸어온 길, 그리고 앞으로의 이야기. 브랜드 스토리를 영상으로 확인해보세요.",
  },
  {
    id: 3,
    title: "1월 리뷰 이벤트 진행 중!",
    date: "2025.01.05",
    imageUrl: "/images/hello.png",
    description: "리뷰 작성하고 푸짐한 경품을 받아가세요. 참여 기간: 1월 1일 ~ 1월 31일",
  },
];

export default function NewPostList() {
  const router = useRouter();

  return (
    <div className="bg-white px-4 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">새소식</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
        {newsList.map((news) => (
          <motion.div
            key={news.id}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            className="rounded-xl border bg-white shadow-md overflow-hidden cursor-pointer transition-transform"
            onClick={() => router.push(`/news/${news.id}`)}
          >
            <div className="w-full aspect-[4/3] relative">
              <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{news.title}</h3>
              <p className="text-xs text-gray-400">{news.date}</p>
              <p className="text-sm text-gray-600 line-clamp-3">{news.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
