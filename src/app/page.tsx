import MainBanner from "@/components/MainBanner";
import CategoryIcons from "@/components/CategoryIcons";
import AboutSection from "@/components/AboutSection";
import VisualSection from "@/components/company/VisualSection";
import SubBanner from "@/components/company/SubBanner";
import StorySection from "@/components/company/StorySection";
import DevNote from "@/components/DevNote";

export default function HomePage() {
  return (
    <div>
      <DevNote />
      <VisualSection />
      <MainBanner />
      <StorySection />
      <SubBanner />
      <section className="max-w-screen-xl mx-auto px-4 py-12 w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">카테고리</h2>
        <p className="text-gray-500">정채움에서 직접 만드는 상품 카테고리에요.</p>
        <CategoryIcons />
      </section>
      <section className="w-full bg-gray-50 py-20">
        <AboutSection />
      </section>
    </div>
  );
}
