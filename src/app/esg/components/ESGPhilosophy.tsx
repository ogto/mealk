'use client';

import React from 'react';

export default function ESGPhilosophy() {
  return (
    <section className="flex flex-col items-center text-center space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">정채움 ESG 철학</h2>
      <p className="max-w-3xl text-gray-600 text-lg leading-relaxed">
        정채움은 환경을 보호하고, 사회적 책임을 다하며, 투명한 지배구조를 통해 고객, 지역사회, 협력사와 함께 지속 가능한 가치를 창출합니다.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
        <div className="p-6 border rounded-2xl shadow-md w-64">
          <h3 className="text-xl font-semibold mb-2 text-green-600">친환경 경영</h3>
          <p className="text-gray-600">환경을 보호하는 지속 가능한 제품과 서비스 제공</p>
        </div>
        <div className="p-6 border rounded-2xl shadow-md w-64">
          <h3 className="text-xl font-semibold mb-2 text-green-600">사회적 책임</h3>
          <p className="text-gray-600">지역사회와의 상생, 모두를 위한 공정한 기회 제공</p>
        </div>
        <div className="p-6 border rounded-2xl shadow-md w-64">
          <h3 className="text-xl font-semibold mb-2 text-green-600">투명한 경영</h3>
          <p className="text-gray-600">윤리적이고 투명한 지배구조 확립</p>
        </div>
      </div>
    </section>
  );
}
