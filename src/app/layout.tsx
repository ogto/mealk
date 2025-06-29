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
      <body className="w-full overflow-x-hidden bg-white text-black font-sans">
        <Toaster position="top-center" reverseOrder={false} />
        <DevNote />
        <Header />
        <main className="w-full min-h-[75vh]">{children}</main>
        <Footer />
        <KakaoChatButton />
      </body>
    </html>
  );
}
