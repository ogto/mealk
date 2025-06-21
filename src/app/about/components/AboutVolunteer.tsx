'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutVolunteer() {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 pt-20 pb-10 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-green-700 mb-6">사회공헌 및 봉사 활동</h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        정채움 대표이사는 요리 교육과 외식산업 경험을 바탕으로,
        <strong className="text-green-800 font-semibold"> 사회적 약자와 지역사회를 위한 봉사</strong>에 적극적으로 앞장서고 있습니다.
        <br />
        장애인, 청소년, 노인, 다문화 가정 등 다양한 계층을 위한 요리 나눔 활동을 지속하며,
        건강한 식문화 전파와 정서적 힐링에 기여해왔습니다.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-base leading-snug">
        <li>2016 보건복지부 후원 장애인 봉사 대상 수상</li>
        <li>한국장애인복지협회 요리 재능기부 강연 <strong className="text-green-700">30회 이상</strong> 진행</li>
        <li>사회복지관·요양원 대상 <strong>식생활 개선 프로그램</strong> 기획 및 운영</li>
        <li>다문화가정 대상 <strong>요리교실 정기 운영</strong></li>
        <li>지역아동센터 아동 대상 <strong>요리 체험교실 50회 이상</strong> 개최</li>
        <li>독거노인 대상 맞춤형 도시락 나눔 프로젝트 참여</li>
        <li>소외계층 청소년 대상 <strong>푸드멘토링 및 진로 멘토링</strong> 진행</li>
      </ul>

      <motion.div
        className="mt-10 p-6 bg-green-50 border-l-4 border-green-400 rounded-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-green-900 font-medium text-lg leading-relaxed">
          "식(食)은 나눔의 시작입니다. <br />
          정채움은 따뜻한 식문화를 통해 지역 사회에 보탬이 되는 기업이 되겠습니다."
        </p>
      </motion.div>

      <motion.div
        className="mt-12 bg-white border-l-4 border-green-400 pl-4 py-3 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p>
          앞으로도 <strong className="text-green-800">정채움은 ‘요리로 세상과 연결되는 따뜻한 가치’를 실현</strong>하고자 다양한 사회공헌 활동을 이어갈 계획입니다.
        </p>
      </motion.div>
    </motion.div>
  );
}
