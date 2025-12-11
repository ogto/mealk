// app/page.tsx
"use client";

import BrandVisual from "@/components/main/BrandVisual";
import CertificateSection from "@/components/main/CertificateSection";
import HeroSection from "@/components/main/HeroSection";
import ManagementSystemSection from "@/components/main/ManagementSystemSection";
import MediaSection from "@/components/main/MediaSection";
import ProductSection from "@/components/main/ProductSection";

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
      <ProductSection />

      {/* Experience / Features */}
      <CertificateSection />
      <ManagementSystemSection />

      {/* Media / Mention */}
      <MediaSection />

    </main>
  );
}
