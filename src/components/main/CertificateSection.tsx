"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

type LightboxItem = { src: string; alt: string };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function LightboxModal({
  open,
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items?.[index];

  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const draggingRef = useRef(false);
  const lastRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!open) return;

    setScale(1);
    setPos({ x: 0, y: 0 });

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "+" || e.key === "=") setScale((s) => clamp(s + 0.25, 1, 4));
      if (e.key === "-" || e.key === "_") setScale((s) => clamp(s - 0.25, 1, 4));
      if (e.key.toLowerCase() === "r") {
        setScale(1);
        setPos({ x: 0, y: 0 });
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onPrev, onNext]);

  useEffect(() => {
    if (!open) return;
    setScale(1);
    setPos({ x: 0, y: 0 });
  }, [index, open]);

  if (!open || !item?.src) return null;

  const zoomIn = () => setScale((s) => clamp(s + 0.25, 1, 4));
  const zoomOut = () => setScale((s) => clamp(s - 0.25, 1, 4));
  const reset = () => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  };

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const delta = e.deltaY;
    setScale((s) => clamp(s + (delta > 0 ? -0.15 : 0.15), 1, 4));
  };

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    draggingRef.current = true;
    lastRef.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastRef.current.x;
    const dy = e.clientY - lastRef.current.y;
    lastRef.current = { x: e.clientX, y: e.clientY };
    setPos((p) => ({ x: p.x + dx, y: p.y + dy }));
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute left-0 right-0 top-0 z-10 px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-medium text-white/90">{item.alt}</div>
            <div className="text-xs text-white/50">ESC 닫기 · ← → 이동 · +/- 확대</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={zoomOut}
              className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white/85 hover:bg-white/10"
            >
              -
            </button>
            <button
              type="button"
              onClick={zoomIn}
              className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white/85 hover:bg-white/10"
            >
              +
            </button>
            <button
              type="button"
              onClick={onClose}
              className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white/85 hover:bg-white/10"
            >
              닫기
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="이전"
        onClick={onPrev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2
                  grid h-12 w-12 place-items-center
                  rounded-full
                  border border-white/20
                  bg-black/70 text-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.7)]
                  backdrop-blur
                  hover:bg-black/85 active:scale-[0.96]"
      >
        <span className="text-2xl leading-none">‹</span>
      </button>

      <button
        type="button"
        aria-label="다음"
        onClick={onNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2
                  grid h-12 w-12 place-items-center
                  rounded-full
                  border border-white/20
                  bg-black/70 text-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.7)]
                  backdrop-blur
                  hover:bg-black/85 active:scale-[0.96]"
      >
        <span className="text-2xl leading-none">›</span>
      </button>

      <div className="absolute inset-0 pt-16">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-center px-4 pb-6" onWheel={onWheel}>
          <div
            className="relative h-[78vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/40"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{ touchAction: "none" }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${scale})`,
                transformOrigin: "center",
                transition: draggingRef.current ? "none" : "transform 120ms ease-out",
                cursor: draggingRef.current ? "grabbing" : scale > 1 ? "grab" : "default",
              }}
            >
              <Image src={item.src} alt={item.alt} fill sizes="100vw" className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertificateSection() {
  const awardItems = useMemo<LightboxItem[]>(
    () => [
      { src: "/images/n_cert/3.png", alt: "수상/특허 3" },
      { src: "/images/n_cert/4.png", alt: "수상/특허 4" },
      { src: "/images/n_cert/5.png", alt: "수상/특허 5" },
      { src: "/images/n_cert/6.png", alt: "수상/특허 6" },
      { src: "/images/n_cert/7.png", alt: "수상/특허 7" },
      { src: "/images/n_cert/8.png", alt: "수상/특허 8" },
      { src: "/images/n_cert/9.png", alt: "수상/특허 9" },
      { src: "/images/n_cert/10.png", alt: "수상/특허 10" },
      { src: "/images/n_cert/11.png", alt: "수상/특허 11" },
      { src: "/images/n_cert/12.png", alt: "수상/특허 12" },
    ],
    []
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevLightbox = () => setLightboxIndex((i) => (i - 1 + awardItems.length) % awardItems.length);
  const nextLightbox = () => setLightboxIndex((i) => (i + 1) % awardItems.length);

  // ✅ 네이티브 캐러셀
  const stripRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: -1 | 1) => {
    const el = stripRef.current;
    if (!el) return;

    // 카드 폭(대략) + gap 만큼
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardW = card ? card.offsetWidth : 260;
    el.scrollBy({ left: dir * (cardW + 14), behavior: "smooth" });
  };

  return (
    <section id="certificates" className="bg-black py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        {/* 텍스트 */}
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-[0.25em] text-zinc-400 uppercase">
            Official Certificates
          </p>

          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            대한민국이 인정한
            <br className="hidden sm:block" />
            숙련 기술력
          </h2>

          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            정채움은 단순히 “맛있는 제품”을 만드는 수준을 넘어, 국가로부터 숙련 기술과 모범 사업체로 공식 인증을 받았습니다.
            눈에 보이는 상장 한 장이 아니라, 수십 년간 현장에서 쌓아온 노하우와 품질 기준을 의미합니다.
          </p>

          <div className="space-y-3 text-sm text-zinc-200">
            <div className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <p>
                <span className="font-semibold text-sky-300">우수 숙련기술자 선정</span>
                <span className="text-zinc-400"> · 직종: 식품가공 · 성명: 정한철</span>
              </p>
            </div>

            <div className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <p>
                <span className="font-semibold text-sky-300">숙련기술장려 모범사업체</span>
                <span className="text-zinc-400"> · 업체명: (주)정채움 · 분야: 제조업</span>
              </p>
            </div>

            <div className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <p className="text-zinc-400">2025년 9월 9일, 고용노동부장관 명의의 공식 인증서 수여</p>
            </div>
          </div>

          <p className="text-xs text-zinc-500">* 안정적인 품질·위생·공정 관리 기준을 충족한 업체에게만 부여되는 국가 차원의 인증입니다.</p>
        </div>

        {/* 우측 */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)] opacity-60" />

          {/* 상장 카드 */}
          <div className="relative mx-auto max-w-md">
            <div className="relative rounded-3xl border border-white/15 bg-zinc-950/90 p-3 shadow-[0_0_60px_rgba(0,0,0,0.8)] backdrop-blur">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 shadow-lg rotate-[-2deg]">
                <Image
                  src="/images/n_cert/1.png"
                  alt="우수 숙련기술자 증서 스캔본"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="absolute -right-8 bottom-[-40px] w-[65%] md:w-[60%]">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 shadow-xl rotate-3">
                  <Image
                    src="/images/n_cert/2.png"
                    alt="숙련기술장려 모범사업체 증서 스캔본"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 네이티브 캐러셀 */}
          <div className="mt-16">
            <div className="mb-4 flex items-end justify-between gap-4">
              <h3 className="text-xl font-semibold text-white md:text-2xl">수상경력 및 특허</h3>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="이전"
                  onClick={() => scrollByCards(-1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 active:scale-[0.98]"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="다음"
                  onClick={() => scrollByCards(1)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 active:scale-[0.98]"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
              <div
                ref={stripRef}
                className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory select-none"
                style={{
                  WebkitOverflowScrolling: "touch",
                  overscrollBehaviorX: "contain",
                }}
              >
                {/* 좌측 패딩용 */}
                <div className="w-1 shrink-0" />

                {awardItems.map((item, idx) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => openLightbox(idx)}
                    className="snap-start shrink-0 w-[72%] sm:w-[44%] lg:w-[30%] text-left"
                    aria-label={`${item.alt} 크게 보기`}
                    data-card
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 shadow-[0_0_30px_rgba(0,0,0,0.45)]">
                      <div className="relative aspect-[4/5] w-full">
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="eager"
                          draggable={false}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                      </div>
                    </div>
                  </button>
                ))}

                {/* 우측 패딩용 */}
                <div className="w-4 shrink-0" />
              </div>

              <div className="mt-3 text-xs text-white/40">
                * 좌우로 스와이프해서 확인 가능합니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <LightboxModal
        open={lightboxOpen}
        items={awardItems}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />
    </section>
  );
}
