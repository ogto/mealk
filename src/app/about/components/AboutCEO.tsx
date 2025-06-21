'use client';
import { motion } from 'framer-motion';

export default function AboutCEO() {
  const data = [
    ['학력', '경기대학교 외식산업경영 석사 졸업', '🎓'],
    ['학력', '호원대학교 관광경영학 학사 졸업', '🎓'],
    ['학력', '군장대학 관광전문학사 졸업', '🎓'],
    ['병역', '해군 병장 만기전역 (1993)', '🎖️'],
    ['경력', '호텔 엑스포(신호그룹), 호텔롯데 대전, 호텔유성 등', '🏨'],
    ['강의', '공주대·중부대·동아인재대·유성생명과학고 등 조리학 강의', '🎓'],
    ['수상', '전국 및 국제 요리대회 수상 (2000~2025, 금상·대상 등)', '🏅'],
    ['위촉', '전국기능경기대회 요리직종 심사위원 (2006~2025, 10회 이상)', '🧑‍⚖️'],
    ['위촉', '(사)한국음식문화원 자문의원 (2024~2025)', '🏢'],
    ['위촉', '(사)호국보훈기념사업회 위촉위원 (2025)', '🏛️'],
    ['수상', '대전 유성구청장, 대전시, 국회의원 표창 다수', '🏅'],
    ['수상', '2024 대통령상 수상 - 한국음식관광박람회', '🥇'],
    ['수상', '2022 한국조리사협회 최우수지도자상 수상', '🎖️'],
    ['경영', '2013년~ (주)정채움 / (주)맛있는생활 대표이사 재직', '🤝'],
  ];

  return (
    <motion.div
      className="max-w-3xl mx-auto py-20 px-6 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-green-700">대표이사 소개</h2>
      <p className="mb-6 text-lg leading-relaxed text-gray-700">
        정채움 대표이사는 외식산업, 조리교육, 향토음식 진흥에 있어 30년 이상의 경력을 보유한 전문가로,
        국내외 요리 대회 및 심사위원 활동을 통해 조리 문화 발전에 기여해왔습니다.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-t border-b border-gray-200">
          <thead className="bg-green-50 text-green-800 font-semibold">
            <tr>
              <th className="py-3 px-4 text-left border-b border-gray-200 w-[60px]">항목</th>
              <th className="py-3 px-4 text-left border-b border-gray-200">내용</th>
              <th className="py-3 px-4 text-left border-b border-gray-200 w-[60px]">비고</th>
            </tr>
          </thead>
          <tbody>
            {data.map(([category, content, icon], idx) => (
              <tr key={idx} className="border-t border-gray-100 text-sm md:text-base">
                <td className="py-3 px-4 whitespace-nowrap">{category}</td>
                <td className="py-3 px-4">{content}</td>
                <td className="py-3 px-4">{icon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
