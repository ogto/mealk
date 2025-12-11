"use client";

import Image from "next/image";

export default function ManagementSystemSection() {
  const certs = [
    {
      code: "ISO 45001",
      label: "안전보건경영시스템",
      desc: "현장 안전과 보건 관리를 국제 기준에 맞춰 운영합니다.",
      image: "/images/n_ms/1.png", // 1페이지 이미지
    },
    {
      code: "ISO 9001",
      label: "품질경영시스템",
      desc: "제품·서비스 전 과정의 품질을 체계적으로 관리합니다.",
      image: "/images/n_ms/2.png", // 2페이지 이미지
    },
    {
      code: "ISO 14001",
      label: "환경경영시스템",
      desc: "환경 영향을 줄이기 위한 프로세스를 지속적으로 개선합니다.",
      image: "/images/n_ms/3.png", // 3페이지 이미지
    },
  ];

  return (
    <section
      id="management-system"
      className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* 헤더 영역 */}
        <div className="text-center space-y-4">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-[0.25em] text-zinc-400 uppercase">
            Management System
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            안전 · 품질 · 환경까지
            <br className="hidden sm:block" />
            경영 시스템으로 증명된 신뢰
          </h2>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            정채움은 생산 현장만 관리하는 것이 아니라,
            <span className="text-sky-300 font-medium">
              {" "}안전보건 · 품질 · 환경
            </span>
            을 아우르는 통합 경영시스템을 구축하고
            국제 표준 인증을 취득했습니다.
          </p>

          {/* ISO 뱃지 라인 */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-[0.7rem] md:text-xs">
            <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-sky-300">
              ISO 45001 · 안전보건경영
            </span>
            <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-sky-300">
              ISO 9001 · 품질경영
            </span>
            <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-sky-300">
              ISO 14001 · 환경경영
            </span>
          </div>
        </div>

        {/* 인증서 카드들 */}
        <div className="relative">
          {/* 뒤 배경 글로우 */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.2),_transparent_60%)] opacity-60" />

          <div className="grid gap-6 md:grid-cols-3">
            {certs.map((cert, index) => (
              <article
                key={cert.code}
                className={`group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.02] p-4 flex flex-col gap-4 shadow-[0_0_40px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-transform transition-shadow
                hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(56,189,248,0.45)]
                `}
              >
                {/* 상단 텍스트 */}
                <div className="space-y-1 z-10">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-400">
                    {cert.code}
                  </p>
                  <h3 className="text-sm md:text-base font-semibold text-zinc-50">
                    {cert.label}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                {/* 인증서 이미지 */}
                <div className="relative mt-2 overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 aspect-[3/4]">
                  <Image
                    src={cert.image}
                    alt={`${cert.code} ${cert.label} 인증서`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* 하단 라벨 */}
                <div className="pt-1 text-[0.7rem] text-zinc-500">
                  국제 인증기관 ICR 발행 · 가공육류 제품 제조 분야
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 한 줄 요약 */}
        <p className="text-xs text-zinc-500 text-center">
          단순한 문서가 아니라, 매일의 작업과 공정이 국제 표준에 맞춰 운영된다는 것을 의미합니다.
        </p>
      </div>
    </section>
  );
}
