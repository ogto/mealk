"use client";

import Image from "next/image";

export default function MediaSection() {
  const articles = [
    {
      title: "장흥군 물품 기부 소식",
      desc: "정채움이 지역사회에 따뜻한 지원을 전하며 장흥군에 물품을 기부한 기사입니다.",
      link: "https://www.paxetv.com/news/articleView.html?idxno=254001",
      date: "2025.01",
    },
    {
      title: "정채움 봉사활동 조명",
      desc: "지역 발전과 사회적 약자를 위한 봉사활동이 소개된 기사입니다.",
      link: "https://www.joongdo.co.kr/web/view.php?key=20250112010002994",
      date: "2025.01",
    },
    {
      title: "충청투데이 인터뷰 – 정채움 경영 이야기",
      desc: "기업 철학, 제품 생산 과정, 경영 마인드를 중심으로 진행된 공식 인터뷰 기사입니다.",
      link: "https://www.cctoday.co.kr/news/articleView.html?idxno=2221425",
      date: "2024.12",
    },
    {
      title: "장학금 기부 및 여러 사회 공헌 활동",
      desc: "교육 지원을 위한 장학금 기부와 다양한 사회 공헌이 보도된 기사입니다.",
      link: "https://news.tf.co.kr/read/national/2261365.htm",
      date: "2024.12",
    },
  ];

  return (
    <section
      id="media"
      className="py-24 px-6 md:px-12 lg:px-20 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* 헤더 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            언론 & 미디어 노출
          </h2>
          <p className="text-zinc-300 max-w-3xl">
            정채움의 사회공헌·기부·기업 경영 인터뷰 등 다양한 활동이 여러 매체를 통해 보도되었습니다.
          </p>
        </div>

        {/* 기사 카드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-col gap-3 transition hover:bg-white/[0.07] hover:border-sky-400/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500">{item.date}</span>
                <span className="text-sky-300 text-xs opacity-0 group-hover:opacity-100 transition">
                  기사 보기 →
                </span>
              </div>

              <h3 className="text-lg font-semibold group-hover:text-sky-300 transition">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {item.desc}
              </p>

              <div className="text-xs text-zinc-500 mt-auto">
                {item.link.replace(/^https?:\/\//, "").split("/")[0]} 제공
              </div>
            </a>
          ))}
        </div>

        {/* 한 줄 마무리 */}
        <p className="text-xs text-zinc-500 text-center mt-10">
          정채움은 제품을 넘어, 지역사회와 함께 성장하는 기업을 지향합니다.
        </p>
      </div>
    </section>
  );
}
