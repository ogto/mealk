// ✅ app/about/components/AboutCompany.tsx
'use client';
import { motion } from 'framer-motion';

export default function AboutCompany() {
  return (
    <div className="w-full text-gray-800">
      {/* 인트로 섹션 */}
      <section className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url(/images/about-intro.jpg)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black bg-opacity-50 p-6 rounded-xl text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-white">정성을 채우다,</span>
            <img src="/logo/logo2.png" alt="정채움 로고" className="h-13 invert w-auto" />
          </div>

          <p className="text-lg">정채움은 건강한 식문화를 위해 오늘도 정직하게 만듭니다.</p>
        </motion.div>
      </section>

      {/* 미션/비전/가치 */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">우리가 지키는 가치</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {i === 0 && (
                <>
                  <h3 className="text-xl font-bold mb-3">🍽️ 정직한 재료</h3>
                  <p>좋은 식재료만을 엄선하여 건강한 맛을 추구합니다.</p>
                </>
              )}
              {i === 1 && (
                <>
                  <h3 className="text-xl font-bold mb-3">🌿 지속 가능한 식문화</h3>
                  <p>환경을 생각하며 친환경 포장과 지속가능한 공급망을 구축합니다.</p>
                </>
              )}
              {i === 2 && (
                <>
                  <h3 className="text-xl font-bold mb-3">👨‍👩‍👧‍👦 모두를 위한 식사</h3>
                  <p>누구나 쉽게, 맛있고 건강한 한 끼를 즐길 수 있도록 설계합니다.</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 회사 정보 테이블 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10"
          >
            정채움 한눈에 보기
          </motion.h2>
          <motion.table
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full table-auto text-left border-collapse"
          >
            <tbody className="text-lg">
              <tr className="border-b">
                <td className="py-3 font-semibold">설립일</td>
                <td className="py-3">2013년</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">대표자</td>
                <td className="py-3">정한철</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">위치</td>
                <td className="py-3">대전광역시</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 font-semibold">주요 사업</td>
                <td className="py-3">밀키트, 반조리 식품, F&B 유통</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold">슬로건</td>
                <td className="py-3">정성을 채우다, 정채움</td>
              </tr>
            </tbody>
          </motion.table>
        </div>
      </section>

      {/* 연혁 타임라인 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-10"
          >
            정채움 연혁
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-l-4 border-green-500 pl-6 space-y-6"
          >
            <li><span className="text-green-500 font-semibold">2013</span> - 정채움 설립</li>
            <li><span className="text-green-500 font-semibold">2015</span> - 밀키트 브랜드 런칭</li>
            <li><span className="text-green-500 font-semibold">2017</span> - 전국 편의점 입점</li>
            <li><span className="text-green-500 font-semibold">2018</span> - 누적 판매 100만 개 돌파</li>
            <li><span className="text-green-500 font-semibold">2020</span> - 건강 도시락, 유아식 출시</li>
          </motion.ul>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-green-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-4"
        >
          정채움과 함께할 준비 되셨나요?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          제휴 및 사업 문의는 고객센터 또는 제휴문의 페이지를 통해 연락주세요.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="px-6 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          제휴 문의하기
        </motion.button>
      </section>
    </div>
  );
}
