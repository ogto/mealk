// app/partnership/page.tsx
"use client";

import PartnershipForm from "./components/PartnershipForm";

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-16 max-w-[640px] mx-auto">
      <h1 className="text-3xl font-bold text-center text-black mb-8">제휴문의</h1>
      <PartnershipForm />
    </div>
  );
}
