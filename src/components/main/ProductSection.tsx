"use client";

import Image from "next/image";

export default function ProductSection() {
  const products = [
    {
      badge: "BEST",
      name: "궁중 양념갈비(LA)",
      desc: "전통의 깊은 맛을 담은 깔끔한 갈비",
      image: "/images/n_p/gg.jpeg",
    },
    {
      badge: "SIGNATURE",
      name: "팽이버섯 비법 신난왕구이",
      desc: "남녀노소 즐기는 달콤 짭짤한 갈비맛",
      image: "/images/n_p/ps.png",
      href: "https://smartstore.naver.com/jungchaeum/products/12914578911",
    },
    {
      badge: "NEW",
      name: "매콤 소스 신난 왕구이",
      desc: "두툼한 고기에 매콤함을 더한 별미",
      image: "/images/n_p/sw.png",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ------------------------------- */}
        {/* Header + CTA */}
        {/* ------------------------------- */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.25em] text-zinc-400">
              취급 품목
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              정채움이 다루는<br className="hidden sm:block" />
              주요 제품들
            </h2>
            <p className="text-zinc-300 max-w-xl text-sm md:text-base">
              가장 자신 있는 제품들만 선별해 소개합니다.
              온라인 문의부터 전화 상담, 스마트스토어까지
              편한 채널로 바로 연결해 보세요.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-3">

            {/* 🔵 PC / 태블릿 : 카카오톡 문의 */}
            <a
              href="https://pf.kakao.com/_xovdgn/chat"
              target="_blank"
              className="hidden md:inline-flex items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/10 px-5 py-2.5 text-sm font-medium text-sky-300 backdrop-blur transition hover:bg-sky-500/20 hover:border-sky-300"
            >
              카카오톡으로 문의하기
            </a>

            {/* 🔵 모바일 : 전화로 문의 */}
            <a
              href="tel:01000000000"
              className="md:hidden inline-flex items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/10 px-5 py-2.5 text-sm font-medium text-sky-300 backdrop-blur transition hover:bg-sky-500/20 hover:border-sky-300"
            >
              전화로 문의하기
            </a>

            {/* 스마트스토어 */}
            <a
              href="https://smartstore.naver.com/jungchaeum"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-4 py-2 text-xs md:text-sm font-medium text-zinc-100 backdrop-blur transition hover:bg-white/5"
            >
              정채움 제품 모두 보기
            </a>
          </div>
        </div>

        {/* ------------------------------- */}
        {/* 🚀 영상 배너 */}
        {/* ------------------------------- */}
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-lg bg-black">
          <video
            src="/videos/gal2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto aspect-video object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-transparent pointer-events-none" />
        </div>
        {/* ------------------------------- */}
        {/* PRODUCT CARDS */}
        {/* ------------------------------- */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-4 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(56,189,248,0.4)]"
            >
              {/* 블루 글로우 */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_60%)]" />
              </div>

              {/* BADGE */}
              <div className="flex items-center justify-between z-10">
                <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-sky-300">
                  {item.badge}
                </span>
                <span className="text-[0.68rem] text-zinc-400">
                  정채움 취급 품목
                </span>
              </div>

              {/* IMAGE */}
              <div className="relative z-10 mt-1 overflow-hidden rounded-2xl border border-white/10 bg-black/40 aspect-[4/3]">
                
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
               
                <div className="flex h-full items-center justify-center text-xs text-zinc-500">
                  제품 이미지 영역
                </div>
              </div>

              {/* TEXT */}
              <div className="z-10 space-y-2">
                <h3 className="text-lg md:text-xl font-semibold">{item.name}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
                {/* <p className="text-xs text-zinc-400">{item.spec}</p> */}
              </div>

              <div className="z-10 mt-auto pt-2 flex items-center justify-between text-[0.7rem] text-zinc-400">
                <span>카카오톡 또는 전화로 문의</span>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      hidden md:inline
                      text-sky-300
                      transition-transform
                      group-hover:translate-x-0.5
                      hover:underline
                    "
                  >
                    제품 상세보기 →
                  </a>
                ) : (
                  <span className="hidden md:inline text-zinc-500 cursor-default">
                    제품 상세보기 →
                  </span>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
