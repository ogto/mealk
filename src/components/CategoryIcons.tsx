'use client';

import { Beef, Fish, Salad, UtensilsCrossed } from 'lucide-react';

const categories = [
  {
    title: '육류 (국내산/수입)',
    icon: Beef,
    items: ['냉장·냉동쇠고기', '돼지고기', '가금육', '육가공품'],
    color: 'bg-red-100 text-red-600',
  },
  {
    title: '수산물',
    icon: Fish,
    items: ['새우류', '참치류', '연어류', '기타수산물'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: '식품류',
    icon: Salad,
    items: ['냉동식품류', '냉동채소류', '수입냉동과일류', '소스류'],
    color: 'bg-green-100 text-green-600',
  },
  {
    title: '기타',
    icon: UtensilsCrossed,
    items: ['훈제오리', '칠리새우', '닭살꼬치', '랍부탄', '리치'],
    color: 'bg-yellow-100 text-yellow-600',
  },
];

export default function CategoryGroups() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-black">카테고리</h2>
        <p className="text-gray-500 mb-16">정채움에서 제공하는 상품 카테고리입니다.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ title, items, icon: Icon, color }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              {/* 아이콘 */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto ${color}`}>
                <Icon className="w-8 h-8" />
              </div>

              {/* 타이틀 */}
              <h3 className="text-xl font-bold text-gray-800 mb-6 group-hover:text-red-300 transition-colors">
                {title}
              </h3>

              {/* 소분류 */}
              <ul className="space-y-3 text-gray-600 text-base">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-red-300 cursor-pointer transition-colors"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
