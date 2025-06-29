import { notFound } from "next/navigation";
import Image from "next/image";

const newsList = [
  {
    id: 1,
    title: "신규 밀키트 출시! 더 맛있고 간편하게",
    date: "2025.02.01",
    imageUrl: "/images/sub_banner.png",
    content: `정채움의 새로운 밀키트를 지금 만나보세요.

더 풍부해진 맛과 간편한 조리로 돌아왔습니다.`,
  },
  {
    id: 2,
    title: "정채움 브랜드 스토리 공개",
    date: "2025.01.20",
    imageUrl: "/images/crt.png",
    content: `정채움이 걸어온 길, 그리고 앞으로의 이야기.

브랜드 스토리를 영상으로 확인해보세요.`,
  },
  {
    id: 3,
    title: "1월 리뷰 이벤트 진행 중!",
    date: "2025.01.05",
    imageUrl: "/images/hello.png",
    content: `리뷰 작성하고 푸짐한 경품을 받아가세요.

참여 기간: 1월 1일 ~ 1월 31일`,
  },
];

interface PageProps {
  params: { id: string }
}

export default function NewsDetailPage({ params }: PageProps) {

  const newsId = parseInt(params.id);
  const news = newsList.find((item) => item.id === newsId);

  if (!news) {
    notFound();
  }

  return (
    <div className="bg-white px-4 py-16 max-w-[800px] mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-black">{news.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{news.date}</p>
      <div className="w-full aspect-[4/3] relative mb-8">
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          className="object-contain rounded-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">{news.content}</p>
    </div>
  );
}
