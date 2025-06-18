'use client';

import Image from 'next/image';

export default function SubBanner() {
  return (
    <section className="w-full bg-white relative">
      <div className="max-w-[1280px] mx-auto relative">
        <Image
          src="/images/sub_banner.png"
          alt="서브배너"
          width={1280}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />

        {/* 상단 그라데이션 */}
        <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/100 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
