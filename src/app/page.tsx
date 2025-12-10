// app/page.tsx
"use client";

import BrandVisual from "@/components/main/BrandVisual";
import HeroSection from "@/components/main/HeroSection";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <HeroSection />

      {/* Brand Story */}
      <BrandVisual
        imageSrc="/images/n_bv/1.png"
        headline={
          <>
            가장 익숙한 재료를
            <br />
            가장 새롭게 만드는 방법
          </>
        }
        subText={
          <>
            우리가 매일 먹는 것에
            <br />
            시간을 더했을 때 생기는 변화
          </>
        }
      />

      {/* Process */}
      <section id="process" className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.25em] text-emerald-300 mb-4">
            PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            서비스/제품이 완성되는 과정
          </h2>
          <p className="text-zinc-300 mb-10 max-w-3xl">
            숙성도의 Water Aging / Dry Aging처럼, 단계별로 과정을 설명하는
            섹션입니다. 각 단계가 어떤 가치를 더하는지 간단히 적어주세요.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "STEP 01",
                title: "첫 번째 단계",
                desc: "가장 처음에 하는 작업을 설명합니다. 고객 입장에서 이해하기 쉽도록 적어주세요.",
              },
              {
                step: "STEP 02",
                title: "두 번째 단계",
                desc: "핵심적인 공정/프로세스를 적습니다. 여기에서 서비스만의 차별점을 강조해도 좋습니다.",
              },
              {
                step: "STEP 03",
                title: "세 번째 단계",
                desc: "최종적으로 고객이 체감하게 되는 결과를 적습니다.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3"
              >
                <span className="text-xs tracking-[0.25em] text-zinc-400">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Features */}
      <section id="experience" className="py-24 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.25em] text-emerald-300 mb-4">
            EXPERIENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            사용 경험 & 핵심 특징
          </h2>
          <p className="text-zinc-300 mb-10 max-w-3xl">
            실제 사용자가 느끼게 될 경험을 3~4개의 키워드로 정리해 주세요.
            숙성도의 “Juiciness / flavor of fat / tenderness” 같은 구조를
            떠올리면 됩니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "키워드 1",
                desc: "간단한 설명을 1~2문장으로 적어 주세요.",
              },
              {
                title: "키워드 2",
                desc: "서비스가 주는 장점/강점을 담아 보세요.",
              },
              {
                title: "키워드 3",
                desc: "다른 서비스와 구별되는 포인트를 넣어도 좋습니다.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 px-6 md:px-12 lg:px-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.25em] text-emerald-300 mb-4">
            NUMBERS
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            숫자로 보여주는 신뢰도
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "지표 1", value: "000", sub: "설명 텍스트" },
              { label: "지표 2", value: "000", sub: "설명 텍스트" },
              { label: "지표 3", value: "000", sub: "설명 텍스트" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-3xl font-semibold mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-zinc-300 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-zinc-500">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product / Menu */}
      <section id="menu" className="py-24 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.25em] text-emerald-300 mb-4">
            MENU / PRODUCT
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            제공 서비스 / 상품
          </h2>
          <p className="text-zinc-300 mb-10 max-w-3xl">
            숙성도 메뉴처럼, 각각의 상품/플랜을 카드 형태로 나열하는 공간입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3"
              >
                <h3 className="text-xl font-semibold">상품명 {idx + 1}</h3>
                <p className="text-sm text-zinc-300">
                  상품에 대한 간단한 설명을 적어주세요.
                </p>
                <div className="mt-auto text-sm text-emerald-300">
                  자세히 보기 →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media / Mention */}
      <section id="media" className="py-24 px-6 md:px-12 lg:px-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.25em] text-emerald-300 mb-4">
            MEDIA
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            언론 & 미디어 노출
          </h2>
          <p className="text-zinc-300 mb-10 max-w-3xl">
            숙성도가 넷플릭스/방송/유튜브 노출을 정리해둔 것처럼, 여기에는
            기사/리뷰/콜라보/파트너사 로고 등을 넣으면 좋습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3"
              >
                <h3 className="text-lg font-semibold">미디어 타이틀 {idx + 1}</h3>
                <p className="text-sm text-zinc-300">
                  어떤 매체에 어떻게 소개되었는지 요약합니다.
                </p>
                <span className="text-xs text-zinc-500">
                  링크 / 날짜 등 부가 정보
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
