'use client';
import { motion } from 'framer-motion';

export default function AboutAwards() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-20 px-6 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-green-700">주요 수상 및 위촉 이력</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto border-t border-b border-gray-200">
          <thead className="bg-green-50 text-green-800 font-semibold">
            <tr>
              <th className="py-3 px-4 border-b border-gray-200">연도</th>
              <th className="py-3 px-4 border-b border-gray-200">내용</th>
              <th className="py-3 px-4 border-b border-gray-200">구분</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm md:text-base">
            {[
              ['2024', '대통령상 - 제25회 한국음식관광박람회', '수상'],
              ['2024', '대한민국명장회 표창장', '수상'],
              ['2022', '한국조리사협회 최우수지도자상', '수상'],
              ['2018~2025', '국회의원 표창장 총 4회', '수상'],
              ['-', '대전광역시·유성구청장·외식업중앙회 등 다수 표창', '수상'],
              ['2006~2025', '전국기능경기대회 요리직종 심사위원', '위촉'],
              ['-', '세계 중국요리대회, 세계푸드경연대회 대상', '수상'],
              ['-', '향토음식경연대회 최우수상 / 대한민국향토식문화대전 대상', '수상'],
              ['-', '논산공고·대전신일여고 진로특강 표창장', '강의·수상'],
              ['-', '소상공인진흥공단 희망리턴패키지 재창업 교육 강사', '강의'],
              ['2024~2025', '한국음식문화원 자문의원', '위촉'],
              ['2025', '(사)호국보훈기념사업회 현충시설 알리미 위촉', '위촉'],
            ].map(([year, desc, type], idx) => (
              <tr key={idx} className="border-t border-gray-100">
                <td className="py-3 px-4 whitespace-nowrap">{year}</td>
                <td className="py-3 px-4">{desc}</td>
                <td className="py-3 px-4 text-green-700 font-medium">{type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
