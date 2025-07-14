'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      className="max-w-5xl mx-auto py-20 px-6 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* 대표 이미지 + 인삿말 블럭 */}
      <div className="flex flex-col gap-6 items-start mb-12">
        {/* 이미지 */}
        <div className="w-full">
          <Image
            src="/images/company/ceo-message.png"
            alt="대표이사 정한철"
            width={1200}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* 인사말 */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-green-700 mb-4">CEO 인사말</h2>
          <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
            안녕하십니까.<br />
            정직한 먹거리로 건강한 식문화를 만들어가는<br />
            (주)정채움 대표이사 정한철입니다.<br /><br />

            저희 정채움은 2010년 부터 대전 충남지역의 호텔, 뷔페, 구내식당, 웨딩홀, 식당 프렌차이즈 본사, 일반식당 등의 업체에 육가공, 양념육 제조 냉동식품, 수산물 등의 다양한 식재료를 유통하고 있습니다.

호텔 주방장 17년, 대학의 식품관련 학과의 외래교수, 고등학교 지도교사 등으로 다양한 활동을 하며 살펴보니,
필요한 규격과 품질의 식자재를 수급하기가 너무 어려운 현실에 직접 요리사가 원하는 품질 좋은, 규격에 맞는 식재료를 직접 유통하기 위해, 회사를 설립한지 20년이 넘어가고 있습니다.

젊은 날의 현장 경험을 바탕으로 조리하기 편하고, 신선하게 유통할 수 있도록 최선을 다하고, 제품의 개발에 매진하여 여러 업체들과 소비자들에게 받은 사랑을 나누어 드릴 수 있도록 노력하고 있습니다.

정채움은 단순히 식품을 유통한다는 마음가짐으로 세워진 회사는 아닙니다.
더 바르고 깨끗하고 맛 좋은 식품을 많은 분들이 드시고, 식에서 정을 느끼고, 식에서 행복을 느낄 수 있도록 최선을 다하여 다양한 제품을 출시 및 유통하고 있습니다.

최근 Clean 사업장 인정을 받아 더욱 더 신선하고 깨끗함에 신경 쓰고 있습니다. 항상 건강하고 믿을 수 있는 제품을 위해 더 노력하는 정채움을 만들어가겠습니다.

          </p>
        </div>
      </div>

      {/* 경력 테이블 */}
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
