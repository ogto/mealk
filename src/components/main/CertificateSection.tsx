"use client";

import Image from "next/image";

export default function CertificateSection() {
  return (
    <section
      id="certificates"
      className="py-24 px-6 md:px-12 lg:px-20 bg-black"
    >
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 md:items-center">
        {/* ---------------------------- */}
        {/* 텍스트 설명 영역 */}
        {/* ---------------------------- */}
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-[0.25em] text-zinc-400 uppercase">
            Official Certificates
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            정부가 인정한
            <br className="hidden sm:block" />
            숙련 기술력
          </h2>

          <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
            정채움은 단순히 “맛있는 제품”을 만드는 수준을 넘어,
            국가로부터 숙련 기술과 모범 사업체로 공식 인증을 받았습니다.
            눈에 보이는 상장 한 장이 아니라, 수십 년간 현장에서 쌓아온
            노하우와 품질 기준을 의미합니다.
          </p>

          <div className="space-y-3 text-sm text-zinc-200">
            <div className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <p>
                <span className="font-semibold text-sky-300">
                  우수 숙련기술자 선정
                </span>
                <span className="text-zinc-400"> · 직종: 식품가공 · 성명: 정한철</span>
              </p>
            </div>

            <div className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <p>
                <span className="font-semibold text-sky-300">
                  숙련기술장려 모범사업체
                </span>
                <span className="text-zinc-400"> · 업체명: (주)정채움 · 분야: 제조업</span>
              </p>
            </div>

            <div className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <p className="text-zinc-400">
                2025년 9월 9일, 고용노동부장관 명의의 공식 인증서 수여
              </p>
            </div>
          </div>

          <p className="text-xs text-zinc-500">
            * 안정적인 품질·위생·공정 관리 기준을 충족한 업체에게만 부여되는
            국가 차원의 인증입니다.
          </p>
        </div>

        {/* ---------------------------- */}
        {/* 상장 이미지 영역 */}
        {/* ---------------------------- */}
        <div className="relative">
          {/* Glow 배경 */}
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)] opacity-60" />

          <div className="relative mx-auto max-w-md">
            <div className="relative rounded-3xl border border-white/15 bg-zinc-950/90 p-3 shadow-[0_0_60px_rgba(0,0,0,0.8)] backdrop-blur">

              {/* 첫 번째 상장 */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 shadow-lg rotate-[-2deg]">
                <Image
                  src="/images/n_cert/1.png"
                  alt="우수 숙련기술자 증서 스캔본"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* 두 번째 상장 (오버랩) */}
              <div className="absolute -right-8 bottom-[-40px] w-[65%] md:w-[60%]">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 shadow-xl rotate-3">
                  <Image
                    src="/images/n_cert/2.png"
                    alt="숙련기술장려 모범사업체 증서 스캔본"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
