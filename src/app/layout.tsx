import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevNote from "@/components/DevNote";
import KakaoChatButton from "@/components/KakaoChatButton";

export const metadata: Metadata = {
  title: "정채움 | Mealkit",
  description: "간편하고 건강한 정채움, 지금 만나보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="w-full">
      <head>
        <link rel="icon" href="/logo/favicon.ico" type="image/x-icon" />

        {/* 공유 최적화용 수동 태그들 */}
        <meta property="og:title" content="정채움 | Mealkit" />
        <meta property="og:description" content="간편하고 건강한 정채움, 지금 만나보세요." />
        <meta property="og:image" content="https://www.jungchaeum.com/logo/seo/og.jpg" />
        <meta property="og:url" content="https://www.jungchaeum.com" />
        <meta property="og:type" content="website" />

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="정채움 | Mealkit" />
        <meta name="twitter:description" content="간편하고 건강한 정채움, 지금 만나보세요." />
        <meta name="twitter:image" content="https://www.jungchaeum.com/og-image.jpg" /> */}
      </head>
      <body className="w-full overflow-x-hidden bg-white text-black font-sans">
        <Toaster position="top-center" reverseOrder={false} />
        {/* <DevNote /> */}
        <Header />
        <main className="w-full min-h-[75vh]">{children}</main>
        <Footer />
        <KakaoChatButton />
      </body>
    </html>
  );
}
