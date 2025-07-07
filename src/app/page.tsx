import MainBanner from "@/components/MainBanner";
import CategoryIcons from "@/components/CategoryIcons";
import AboutSection from "@/components/AboutSection";
import VisualSection from "@/components/company/VisualSection";
import SubBanner from "@/components/company/SubBanner";
import StorySection from "@/components/company/StorySection";

export default function HomePage() {
  return (
    <div>
      <VisualSection />
      <MainBanner />
      <StorySection />
      <SubBanner />
      <CategoryIcons />
      <section className="w-full bg-gray-50 py-20">
        <AboutSection />
      </section>
    </div>
  );
}
