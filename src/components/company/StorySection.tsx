"use client";

import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: <>더욱 신선하게 <span className="text-red-300 font-bold">채움</span></>,
    description: "원산지 확인",
    img: "/images/story/story_1.jpg",
    href: "#",
  },
  {
    title: <>더욱더 건강하게 <span className="text-red-300 font-bold">채움</span></>,
    description: "영양표 확인",
    img: "/images/story/story_2.jpg",
    href: "#",
  },
  {
    title: <>깨끗하게 <span className="text-red-300 font-bold">채움</span></>,
    description: "정채움의 스토리가 더 궁금하다면?",
    img: "/images/story/story_3.jpg",
    href: "#",
  },
];

export default function StorySection() {
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      <div className="max-w-[824px] mx-auto px-4 relative">
        {/* 스토리 텍스트 */}
        <h2 className="text-5xl lg:text-7xl font-bold text-gray-700 mb-10 lg:mb-0 lg:absolute lg:top-10 lg:left-5 z-10">
          스토리
        </h2>

        {/* 카드 영역 */}
        <div className="flex flex-col items-center gap-y-16 lg:block lg:relative lg:h-[1000px]">
          {/* 카드 1 */}
          <div className="lg:absolute lg:top-0 lg:right-0 z-10">
            <StoryCard {...stories[0]} />
          </div>

          {/* 카드 2 */}
          <div className="lg:absolute lg:top-[300px] lg:left-0 z-20">
            <StoryCard {...stories[1]} />
          </div>

          {/* 카드 3 */}
          <div className="lg:absolute lg:top-[600px] lg:right-0 z-20">
            <StoryCard {...stories[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryCard({ title, description, img, href }: any) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-full max-w-[360px] flex flex-col items-center text-center group"
    >
      <div className="w-full h-full bg-white rounded-[50px] overflow-hidden aspect-square relative">
        <Image
          src={img}
          alt="story image"
          width={500}
          height={500}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="text-base font-bold text-gray-900 mt-6 text-xl">{title}</h2>
      <p className="text-gray-600 mt-2 whitespace-pre-line leading-snug">
        {description}
      </p>
    </Link>
  );
}
